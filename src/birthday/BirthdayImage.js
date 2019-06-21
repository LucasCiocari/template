import React from "react"
import AvatarEditor from "react-avatar-editor";
import { Modal, Button } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";

class BirthdayImage extends React.Component {

    state = {
        modalState: false,
        enableInput: true,
        imageToModal: null
    }
    handleShowModal = () => {
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
        const { card, handleChange } = this.props;
        const { modalState } = this.state;
        return (
            <label>
                {this.state.enableInput ? (
                    <React.Fragment>
                        <input
                            hidden
                            type="file"
                            name="image"
                            id="image"
                            onChange={event => {
                                this.setState({
                                    enableInput: false,
                                    imageToModal: event.target.files[0]
                                });
                                this.handleShowModal();
                            }}
                        />

                        <img className="card-bd-img" src={card.image}></img>

                    </React.Fragment>

                ) : (

                        <React.Fragment>
                            <img src={card.image} className="card-bd-img" onClick={this.handleShowModal}></img>

                            <Modal show={modalState} onHide={this.handleCloseModal}>
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
                                        className="avatar-editor-bd"
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
        )
    }
}

export default BirthdayImage