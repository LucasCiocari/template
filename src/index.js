import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import uuid from "uuid/v1"; // gera hash a partir do timestamp
import html2canvas from "html2canvas";
import saveAs from "file-saver";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faCamera } from '@fortawesome/free-solid-svg-icons';
import ReactTooltip from 'react-tooltip';
import GoogleFontLoader from 'react-google-font-loader'; 

//Images
import logo from './images/sicredi.png';
import logoIBM from './images/IBM.png';
import generic from './images/ico.png';
import assis from './images/assis.jpg';
import digital from './images/digital.jpg';
import ibmp from './images/IBM.jpg';
// import downtownibm from '/images/downtownibm.xxx';

import "./index.scss";


const iconeAdicionar = <FontAwesomeIcon icon={faPlus} size='2x' />
const iconePrint = <FontAwesomeIcon icon={faCamera} size='2x'/>
const fontNames = 
<GoogleFontLoader fonts={[
        {
            font: 'Roboto',
            weights: [400]
        },
        {
            font: 'Roboto Slab',
            weights: [400]
        }
    ]
}/>

class App extends React.Component {
    state = {
        items : [
            {id: uuid(), image: generic}
        ]
    }

    handleChange = (id, file) => {
        this.setState( prevState => {
            const newItems = prevState.items;
            const index = newItems.findIndex(card => card.id === id);
            if(file){
                newItems[index].image = URL.createObjectURL(file);
            }

            return {
                items : newItems
            };
        });
    }

    handleAddCard = () => {
        this.setState(
            prevState => {
                return{
                    items: prevState.items.concat({id: uuid(), image: generic})
                }
            }
        )
    }

    render() {
        return (
            <React.Fragment>
                <div className="container" id="aplicacao">
                    <div className="app">
                        <Header/>
                        <CardList cards={this.state.items} handleChange={this.handleChange}/>
                        {/* <Footer size={this.state.items.length}/> */}
                    </div>
                </div>
                <div className="container">
                    <Controller onAddCard={this.handleAddCard}/>
                </div>
            </React.Fragment>
        );
    }
}

const CardList = ({cards, handleChange}) => (
    <React.Fragment>
    <div className="card-list">
        {
            cards.map((card, index) => 
                <Card key={card.id} index={index} card={card} handleChange={handleChange}/>
            )
        }
    </div>
    <Footer length={cards.length}/>
   
    </React.Fragment>
)

const Footer = ({length}) => (
    <div className={classNames("footer", {"footer--branco" : length%2==1}, {"footer--azul" : length%2==0})}>
        <h1 className={classNames("font", {"font--branco" : length%2==1}, {"font--azul" : length%2==0})}>
            muito sucesso na nova carreira
        </h1>
    </div>
)


const Header = () => (
    <React.Fragment>
        <div className="cabecalho">
            <h1>Vamos dar as boas vindas à</h1>
        </div>
        <div className="logo">
            <div className="sicredi"><img src={logo} alt="Logo Sicredi" /></div>
            <div className="ibm"><img src={logoIBM} alt="Logo Sicredi" /></div>
        </div>
    </React.Fragment>
)

const Controller = ({onAddCard}) => (
    <div className="botoes">
        <ReactTooltip id='adicionar' type='error' effect='solid'>
            <span>Adicionar Carta</span>
        </ReactTooltip>
        <ReactTooltip id='print' type='success' effect='solid'>
            <span>Salvar como Imagem</span>
        </ReactTooltip>
        <button className="card-list-button btn btn-add" data-tip data-for="adicionar" onClick={onAddCard}>{iconeAdicionar}</button> 

        <button className="save-photo btn btn-print" data-tip data-for="print" onClick={
                () => {
                    window.scrollTo(0,0);  
                    const element = document.querySelector("#aplicacao");
                    html2canvas(element, 
                        {
                            letterRendering: 1,
                            allowTaint: true
                        }
                        ).then(
                    canvas => { 
                        
                        canvas.toBlob(function(blob) {
                            saveAs(blob, "pretty image.png");
                        });
                    }
                );
            }
        }>{iconePrint}
        </button>
    </div>

)

class Card extends React.Component {

  state = {
    image : assis,
    value : "assis"
  }

  handleChangeMap = (event) => { 
    this.setState({ value: event.target.value });
    if(event.target.value == "assis") {
        this.setState({ image: assis });
    }

    if(event.target.value == "digital") {
        this.setState({ image: digital });
    }

    if(event.target.value == "ibmp") {
        this.setState({ image: ibmp });
    }

    if(event.target.value == "downtownibm") {
        //this.setState({ image: downtownibm });
    }
  }



  render() {
    const { index, card, handleChange }= this.props;
    const { image, value } = this.state;
    
    return (
        <div className={classNames("carta", { "carta--azul" : (index%2==0)}, {"carta--branca" : (index%2==1)})}>
            <div className="informacoes">
                <div className="nome">
                    <input type="text" className="form-control form-control--azul" id="nomeFuncionario" placeholder="Nome Completo"/>
                </div>
                <div className="padrinho">
                    <input type="text" className="form-control form-control--azul" id="nomePadrinho" placeholder="Nome do Padrinho"/>
                </div>
                <div className="scrum">
                    <input type="text" className="form-control form-control--azul" id="nomeScrum" placeholder="Nome do Líder"/>
                </div>
                <div className="time">
                    <input type="text" className="form-control form-control--azul" id="nomeSetor" placeholder="Nome do Time"/>
                </div>
            </div>
            <div className="div-do-select">
              <img className="imagem-selecionada" src={image} alt="sicredi"/>
              <select className={classNames("text-styling", { "select-image--azul" : (index%2==0)}, {"select-image--branco" : (index%2==1)})} value={value} onChange={ event => {
                  this.handleChangeMap(event);
              }}>
                <option value="assis">CAS - Assis Brasil</option>
                <option value="digital">PUC - Sicredi Digital</option>
                <option value="ibmp">IBM Filial</option>
                <option value="downtownibm">CAS - Alberto Bins</option>
              </select>
            </div>
            <div className="foto">
                <div className="perfil">
                <label>
                        <input className="hideinput" type="file" name="image" id="image"
                         onChange={ (event) => {
                                handleChange(card.id, event.target.files[0]);
                            }
                        }
                        />
                        <img src={card.image} alt="Foto"/>
                    </label>
                </div>
            </div>
        </div>	
)}
}

ReactDOM.render(<App />, document.getElementById("root"));