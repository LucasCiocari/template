import React from "react";
import classNames from "classnames";
import AvatarEditor from "react-avatar-editor";
import ReactHoverObserver from "react-hover-observer";


import sicrediLogo from "./images/sicredi.png";
import agibankLogo from "./images/agibank.png";
import banrisulLogo from "./images/banrisul.png";

class Card extends React.Component {
  state = {
    enableInput: true,
    nameIsHovering: false,
    godparentIsHovering: false,
    leaderIsHovering: false,
    teamIsHovering: false,
    roleIsHovering: false
  };

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
      handleChangeMap
    } = this.props;

    const {
      nameIsHovering,
      godparentIsHovering,
      leaderIsHovering,
      teamIsHovering,
      roleIsHovering
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
          <div className="scrum">
            <ReactHoverObserver
              {...{
                onHoverChanged: this.onHoverLeaderChanged
              }}
            >
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

        <div className="div-do-select">
          <img className="selected-place" src={card.logoImage}/>
          <img
            className="imagem-selecionada"
            src={card.imageMap}
            alt="sicredi"
          />
          <select
            className={classNames(
              "text-styling",
              { "select-image--azul": index % 2 == 0 },
              { "select-image--branco": index % 2 == 1 }
            )}
            value={card.map}
            onChange={event => {
              handleChangeMap(event.target.value, card.id);
            }}
          >
            <option value="assis">CAS - Assis Brasil</option>
            <option value="digital">PUC - Sicredi Digital</option>
            <option value="ibmp">IBM Filial</option>
            <option value="downtownibm">CAS - Alberto Bins</option>
            <option value="agibankplace">Agibank</option>
            <option value="banrisulplace">Banrisul</option>
          </select>
        </div>
          <div className="perfil">
            <label>
              {this.state.enableInput ? (
                <input
                  className="hideinput"
                  type="file"
                  name="image"
                  id="image"
                  onChange={event => {
                    this.setState({
                      enableInput: false
                    });
                    handleChange(card.id, event.target.files[0]);
                  }}
                />
              ) : (
                <React.Fragment />
              )}

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
    );
  }
}

export default Card;
