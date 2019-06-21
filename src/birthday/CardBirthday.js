import React from "react";
import Textarea from "react-textarea-autosize";
import DatePicker from "react-datepicker";
import ReactHoverObserver from "react-hover-observer";
import AvatarEditor from "react-avatar-editor";
import classNames from "classnames";

import "react-datepicker/dist/react-datepicker.css";
import { Modal, Button } from "react-bootstrap";

class CardBirthday extends React.Component {
  state = {
    nameIsHovering: false,
    localIsHovering: false,
    showmodal: false,
    enableInput: true,
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

  onClickSave = () => {
    if (this.editor) {
      return this.editor.getImageScaledToCanvas()
    }
  }

  onHoverNameChanged = ({ isHovering }) => {
    this.setState({
      nameIsHovering: isHovering
    });
  };

  onHoverLocalChanged = ({ isHovering }) => {
    this.setState({
      localIsHovering: isHovering
    });
  };

  setEditorRef = (editor) => this.editor = editor

  render() {
    const {
      card,
      handleChange,
      handleNameBdChange,
      handlePlaceBdChange,
      handleDateBdChange
    } = this.props;


    const {
      nameIsHovering,
      localIsHovering,
      showmodal

    } = this.state;

    return (

      
        <div className="card-bd">
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

                <img className="card-bd-img" src={card.image}></img>

              </React.Fragment>

            ) : (

                <React.Fragment>
                  <img src={card.image} className="card-bd-img" onClick={this.handleShowmodal}></img>

                  <Modal show={showmodal} onHide={this.handleCloseModal}>
                    <Modal.Header closeButton>
                      <Modal.Title>Escolha o formato da foto</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{ textAlign: "center" }}>

                      {/* Avatar Editor */}

                      <AvatarEditor
                        ref={this.setEditorRef}
                        image={this.state.imageToModal}
                        width={150}
                        height={150}
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
        

        <ReactHoverObserver
          {...{
            onHoverChanged: this.onHoverNameChanged
          }}
        >
          <Textarea
            minRows={1}
            maxRows={2}
            placeholder="Nome"
            value={card.name}
            onChange={event => {
              handleNameBdChange(event.target.value, card.id);
            }}
            maxLength={30}
            className={classNames("card-bd-name-input", {
              "card-bd-hover": nameIsHovering
            })}
          />
        </ReactHoverObserver>


        <div className="margin-bd-date">
          <DatePicker
            selected={card.date}
            onChange={date => {
              handleDateBdChange(date, card.id);
            }}
            dateFormat="d/MM  "
            className="card-bd-date-input"
            placeholderText="Escolha a data"
          />
        </div>
        <ReactHoverObserver
          {...{
            onHoverChanged: this.onHoverLocalChanged
          }}
        >
          <Textarea
            minRows={1}
            maxRows={2}
            value={card.place}
            onChange={event => {
              handlePlaceBdChange(event.target.value, card.id);
            }}
            placeholder="Localização"
            maxLength={30}
            className={classNames("card-bd-place-input", { "card-bd-hover": localIsHovering })}
          />
        </ReactHoverObserver>
      </div>
    );
  }
}

export default CardBirthday;
