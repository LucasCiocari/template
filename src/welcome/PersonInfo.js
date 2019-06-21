import React from 'react'
import ReactHoverObserver from "react-hover-observer"
import classNames from "classnames"

class PersonInfo extends React.Component {

    state = {
        nameIsHovering: false,
        godparentIsHovering: false,
        leaderIsHovering: false,
        teamIsHovering: false,
        roleIsHovering: false
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

    render() {
        const { handleNameChange, handleGodparentChange, handleLeaderChange, handleTeamChange, handleAreaChange, card } = this.props;
        const { nameIsHovering, godparentIsHovering, leaderIsHovering, teamIsHovering, roleIsHovering } = this.state;
      
    
        return (
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
  
        )
    }

}

export default PersonInfo