import React from "react";
import classNames from "classnames";
import AvatarEditor from "react-avatar-editor";
import ReactHoverObserver from "react-hover-observer";
import sicrediLogo from "./images/sicredi.png";
import agibankLogo from "./images/agibank.png";
import placeholder from "./images/placeholder.png";
import { Modal, Button } from "react-bootstrap";
import { Slider } from "antd";


class Card extends React.Component {
  state = {
    enableInput: true,
    nameIsHovering: false,
    godparentIsHovering: false,
    leaderIsHovering: false,
    teamIsHovering: false,
    roleIsHovering: false,
    selectIsHovering: false,
    showmodal: false,
    imageToModal: null,
    scale: 1.0
  };

  handleShowmodal = () => {
    this.setState({
      showmodal: true
    });
  }
  handleCloseModal = () => {
    this.setState({
      showmodal: false
    });
  }

  onHoverNameChanged = ({ isHovering }) => {
    this.setState({
      nameIsHovering: isHovering
    });
  };
  onHoverGodparentChanged = ({ isHovering }) => {
    this.setState({
      godparentIsHovering: isHovering
    });
  };
  onHoverLeaderChanged = ({ isHovering }) => {
    this.setState({
      leaderIsHovering: isHovering
    });
  };
  onHoverTeamChanged = ({ isHovering }) => {
    this.setState({
      teamIsHovering: isHovering
    });
  };
  onHoverRoleChanged = ({ isHovering }) => {
    this.setState({
      roleIsHovering: isHovering
    });
  };
  onHoverSelectChanged = ({ isHovering }) => {
    this.setState({
      selectIsHovering: isHovering
    });
  };

  onClickSave = () => {
    if (this.editor) {
      return this.editor.getImageScaledToCanvas()
    }
  }

  setEditorRef = (editor) => this.editor = editor

  render() {
    const {
      index,
      card,
      handleChange,
      handleNameChange,
      handleGodparentChange,
      handleLeaderChange,
      handleTeamChange,
      handleAreaChange,
      handleChangeMap,
      handleChangeLogo
    } = this.props;

    const {
      nameIsHovering,
      godparentIsHovering,
      leaderIsHovering,
      teamIsHovering,
      roleIsHovering,
      showmodal,
      scale

    } = this.state;

    return (
      <div
        className={classNames(
          "carta",
          { "carta--azul": index % 2 == 0 },
          { "carta--branca": index % 2 == 1 }
        )}
      >
        <div className="informacoes">
          <div className="nome">
            <ReactHoverObserver
              {...{
                onHoverChanged: this.onHoverNameChanged
              }}
            >
              <div className="text-inputs">Funcionario:</div>
              <input
                type="text"
                value={card.name}
                className={classNames("form-control", "form-control--azul", {
                  "form-control-hover": nameIsHovering
                })}
                id="nomeFuncionario"
                placeholder="Nome Completo"
                onChange={event => {
                  handleNameChange(event.target.value, card.id);
                }}
              />
            </ReactHoverObserver>
          </div>
          <div className="padrinho">
            <ReactHoverObserver
              {...{
                onHoverChanged: this.onHoverGodparentChanged
              }}
            >
              <div className="text-inputs">Padrinho:</div>
              <input
                type="text"
                value={card.godparent}
                className={classNames("form-control", "form-control--azul", {
                  "form-control-hover": godparentIsHovering
                })}
                id="nomePadrinho"
                placeholder="Nome do Padrinho"
                onChange={event => {
                  handleGodparentChange(event.target.value, card.id);
                }}
              />
            </ReactHoverObserver>
          </div>
          <div className="lider">
            <ReactHoverObserver
              {...{
                onHoverChanged: this.onHoverLeaderChanged
              }}
            >
              <div className="text-inputs">Lider:</div>
              <input
                type="text"
                value={card.leader}
                className={classNames("form-control", "form-control--azul", {
                  "form-control-hover": leaderIsHovering
                })}
                id="nomeScrum"
                placeholder="Nome do Líder"
                onChange={event => {
                  handleLeaderChange(event.target.value, card.id);
                }}
              />
            </ReactHoverObserver>
          </div>
          <div className="time">
            <ReactHoverObserver
              {...{
                onHoverChanged: this.onHoverTeamChanged
              }}
            >
              <div className="text-inputs">Time:</div>
              <input
                type="text"
                value={card.team}
                className={classNames("form-control", "form-control--azul", {
                  "form-control-hover": teamIsHovering
                })}
                id="nomeSetor"
                placeholder="Nome do Time"
                onChange={event => {
                  handleTeamChange(event.target.value, card.id);
                }}
              />
            </ReactHoverObserver>
          </div>
          <div className="atuacao">
            <ReactHoverObserver
              {...{
                onHoverChanged: this.onHoverRoleChanged
              }}
            >
              <div className="text-inputs">Área:</div>
              <input
                type="text"
                value={card.area}
                className={classNames("form-control", "form-control--azul", {
                  "form-control-hover": roleIsHovering
                })}
                id="atuacao"
                placeholder="Área de Atuação"
                onChange={event => {
                  handleAreaChange(event.target.value, card.id);
                }}
              />
            </ReactHoverObserver>
          </div>
        </div>


        {/* Foto Perfil */}
        <div className="perfil">
          <label>
            {this.state.enableInput ? (
              <React.Fragment>
                <input
                  className="hideinput"
                  type="file"
                  name="image"
                  id="image"
                  onChange={event => {
                    this.setState({
                      enableInput: false,
                      imageToModal: event.target.files[0]
                    });
                    this.handleShowmodal();
                  }}
                />

                <img className="prof-image" src={card.image}></img>

              </React.Fragment>

            ) : (

                <React.Fragment>
                  <img src={card.image} className="prof-image" onClick={this.handleShowmodal}></img>

                  <Modal show={showmodal} onHide={this.handleCloseModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Escolha o formato da foto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{textAlign: "center"}}>

                      {/* Avatar Editor */}
                      
                        <AvatarEditor
                          ref={this.setEditorRef}
                          image={this.state.imageToModal}
                          width={220}
                          height={220}
                          border={0}
                          borderRadius={20}
                          className="avatar-editor"
                        />
                      
                      

                    </Modal.Body>
                    <Modal.Footer>
                    <div>
                        <label className="btn btn-warning button-modal">
                        <input 
                          hidden 
                          type="file"
                          onChange={event => {
                            this.setState({
                              enableInput: false,
                              imageToModal: event.target.files[0]
                            });
                          }} /> Trocar foto
                          </label>
                      </div>
                      <Button variant="secondary" onClick={this.handleCloseModal}>
                        Fechar
          </Button>
                      <Button variant="primary" onClick={() => { this.handleCloseModal(); handleChange(card.id, this.onClickSave()); }}>
                        Salvar Mudanças
          </Button>
                    </Modal.Footer>
                  </Modal>
                </React.Fragment>
              )}
          </label>
        </div>


        {/* Select local e logo */}
        <div className="div-do-select">
          <div className="select-place">
            <div className="dropdown">
              <button
                className="btn dropdown-principal "
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src={card.logoSelectValue} className="dropdown-image" />
              </button>

              <div
                className="dropdown-menu dropdown-principal"
                aria-labelledby="dropdownMenuButton"
              >
                <a
                  className="dropdown-item dropdown-item-style"
                  onClick={() => {
                    handleChangeLogo("agibank", card.id);
                  }}
                >
                  <img src={agibankLogo} className="dropdown-item-style" />
                </a>

                <a
                  className="dropdown-item dropdown-item-style"
                  onClick={() => {
                    handleChangeLogo("sicredi", card.id);
                  }}
                >
                  <img src={sicrediLogo} className="dropdown-item-style" />
                </a>

              </div>
            </div>
          </div>

          <img
            className="imagem-selecionada"
            src={card.imageMap}
            alt="sicredi"
          />

          <select
            className={classNames(
              "text-styling",
              { "select-image--azul": index % 2 == 0 },
              { "select-image--branco": index % 2 == 1 },
              { "select-text-warning": card.map === "selecione" }
            )}
            value={card.map}
            onChange={event => {
              handleChangeMap(event.target.value, card.id);
            }}
          >
            <option value="selecione" className="value-default">
              SELECIONE LOCAL
            </option>
            <option value="assis">CAS - Assis Brasil</option>
            <option value="digital">PUC - Sicredi Digital</option>
            <option value="ibmp">IBM Filial</option>
            <option value="downtownibm">CAS - Alberto Bins</option>
            <option value="agibankplace">Agibank</option>
          </select>
        </div>
      </div >
    );
  }
}

export default Card;
