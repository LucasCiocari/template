import React from 'react'
import { Modal, Button } from "react-bootstrap"
import AvatarEditor from "react-avatar-editor"


class ProfileImage extends React.Component {

  state = {
    enableInput: true,
    modalState: false,
    imageInput: null
  }

  handleShowmodal = () => {
    this.setState({
      modalState: true
    });
  }
  handleCloseModal = () => {
    this.setState({
      modalState: false
    });
  }

  onClickSave = () => {
    if (this.editor) {
      return this.editor.getImageScaledToCanvas()
    }
  }

  setEditorRef = (editor) => this.editor = editor

  render() {

    const { enableInput, modalState, imageInput } = this.state;
    const { card, handleChange } = this.props;

    if (enableInput) {
      return (
        <div className="perfil">
          <label>
            <React.Fragment>
              <input
                hidden
                type="file"
                name="image"
                id="image"
                onChange={
                  event => {
                    this.setState({
                      enableInput: false,
                      imageInput: event.target.files[0]
                    });
                    this.handleShowmodal();
                  }
                }
              />
              <img className="prof-image" src={card.image}></img>
            </React.Fragment>
          </label>
        </div>
      )
    }
    else {
      return (
        <div className="perfil">
          <label>
            <React.Fragment>
              <img src={card.image} className="prof-image" onClick={this.handleShowmodal}></img>


              <Modal show={modalState} onHide={this.handleCloseModal}>
                <Modal.Header closeButton>
                  <Modal.Title>Escolha o formato da foto</Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ textAlign: "center" }}>


                  <AvatarEditor
                    ref={this.setEditorRef}
                    image={this.state.imageInput} width={200} height={200} border={0} borderRadius={20}
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

          </label>
        </div>
      )
    }

  }
}

export default ProfileImage;