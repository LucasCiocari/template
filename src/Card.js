import React from "react";
import classNames from "classnames";

import assis from './images/assis.jpg';
import digital from './images/digital.jpg';
import ibmp from './images/IBM.jpg';
import downtownibm from './images/no-image.png';


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
          this.setState({ image: downtownibm });
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

export default Card;