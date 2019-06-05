import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import uuid from "uuid/v1"; // gera hash a partir do timestamp
import html2canvas from "html2canvas";
import saveAs from "file-saver";

//Images
import logo from './images/sicredi.png';
import logoIBM from './images/IBM.png';
import generic from './images/ico.png';


import "./index.scss";

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
            MUITO SUCESSO
        </h1>
    </div>
)


const Header = () => (
    <React.Fragment>
        <div className="cabecalho">
            <h1>Bem Vindo</h1>
        </div>
        <div className="logo">
            <div className="sicredi"><img src={logo} alt="Logo Sicredi" /></div>
            <div className="ibm"><img src={logoIBM} alt="Logo Sicredi" /></div>
        </div>
    </React.Fragment>
)

const Controller = ({onAddCard}) => (
    <div>
        <button className="card-list-button" onClick={onAddCard}>ADD</button> 

        <button className="save-photo" onClick={
                () => {
                    window.scrollTo(0,0);  
                    const element = document.querySelector("#aplicacao");
                    html2canvas(element).then(
                    canvas => { 
                        
                        canvas.toBlob(function(blob) {
                            saveAs(blob, "pretty image.png");
                        });
                    }
                );
            }
        }>PRINT
        </button>
    </div>

)

const Card = ({index, card, handleChange}) => {
    
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
                    <input type="text" className="form-control form-control--azul" id="nomeScrum" placeholder="Nome do Scrum"/>
                </div>
                <div className="time">
                    <input type="text" className="form-control form-control--azul" id="nomeSetor" placeholder="Nome do Setor"/>
                </div>
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
                        <img src={card.image} alt="Foto"></img>
                    </label>
                </div>
            </div>
        </div>	
)
}

ReactDOM.render(<App />, document.getElementById("root"));