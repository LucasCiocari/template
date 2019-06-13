import React from "react";
import classNames from "classnames";
import AvatarEditor from 'react-avatar-editor';

class Card extends React.Component {

    state = {
        enableInput : true
    }

    render() {
      const { index, card, handleChange, handleNameChange, handleGodparentChange, handleLeaderChange, handleTeamChange, handleAreaChange, handleChangeMap }= this.props;
 
      return (
          <div className={classNames("carta", { "carta--azul" : (index%2==0)}, {"carta--branca" : (index%2==1)})}>
              <div className="informacoes">
                  <div className="nome">
                      <input type="text" value={card.name} className="form-control form-control--azul" id="nomeFuncionario" placeholder="Nome Completo" onChange={event => {handleNameChange(event.target.value, card.id)}}/>
                  </div>
                  <div className="padrinho">
                      <input type="text" value={card.godparent} className="form-control form-control--azul" id="nomePadrinho" placeholder="Nome do Padrinho" onChange={event => {handleGodparentChange(event.target.value, card.id)}}/>
                  </div>
                  <div className="scrum">
                      <input type="text" value={card.leader} className="form-control form-control--azul" id="nomeScrum" placeholder="Nome do Líder" onChange={event => {handleLeaderChange(event.target.value, card.id)}}/>
                  </div>
                  <div className="time">
                      <input type="text" value={card.team} className="form-control form-control--azul" id="nomeSetor" placeholder="Nome do Time" onChange={event => {handleTeamChange(event.target.value, card.id)}}/>
                  </div>
                  <div className="atuacao">
                      <input type="text" value={card.area} className="form-control form-control--azul" id="atuacao" placeholder="Área de Atuação" onChange={event => {handleAreaChange(event.target.value, card.id)}}/>
                  </div>
              </div>
              <div className="div-do-select">
                <img className="imagem-selecionada" src={card.imageMap} alt="sicredi"/>
                <select className={classNames("text-styling", { "select-image--azul" : (index%2==0)}, {"select-image--branco" : (index%2==1)})} value={card.map} 
                onChange={ event => {
                    handleChangeMap(event.target.value, card.id);
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
                          {this.state.enableInput ?<input className="hideinput" type="file" name="image" id="image"
                          
                          onChange={ (event) => {
                                this.setState({
                                    enableInput : false
                                })
                                  handleChange(card.id, event.target.files[0]);
                              } 
                          }
                          /> : <React.Fragment></React.Fragment>}

                          {/* <img src={card.image} alt="Foto"/> */}
                          <AvatarEditor 
                            image={card.image}
                            width={200}
                            height={200}
                            border={0}
                            borderRadius={20}
                            className="avatar-editor"
                           />
                      </label>

                      

                  </div>
              </div>
          </div>	
  )}
  }

export default Card;