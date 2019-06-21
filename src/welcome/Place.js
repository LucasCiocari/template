import React from 'react'
import classNames from "classnames"
import { Dropdown, DropdownButton } from "react-bootstrap"

import sicrediLogo from "../images/sicredi.png"
import agibankLogo from "../images/agibank.png"

class Place extends React.Component {

    render() {

        const { card, index, handleChangeMap, handleChangeLogo } = this.props;

        return (
            <div className="div-do-select">

                <div className="select-place">
                    <Dropdown id="dropdown-logo">
                        <Dropdown.Toggle variant="secondary" id="dropdown-logo-toggle">
                            <img className="dropdown-image" src={card.logoSelectValue} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => {
                                handleChangeLogo("sicredi", card.id);
                            }}>
                                <img className="dropdown-image" src={sicrediLogo} />
                            </Dropdown.Item>
                            <Dropdown.Item onClick={() => {
                                handleChangeLogo("agibank", card.id);
                            }}>
                                <img className="dropdown-image" src={agibankLogo} />
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <img
                    className="imagem-selecionada"
                    src={card.imageMap}
                    alt="sicredi"
                />

                <Dropdown id="dropdown-place">
                    <Dropdown.Toggle className={classNames(
                        "text-styling",
                        { "select-image--azul": index % 2 == 0 },
                        { "select-image--branco": index % 2 == 1 },
                        { "select-text-warning": card.map === "selecione" }
                    )} variant="secondary" id="dropdown-place-toggle">
                        {card.map}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => { handleChangeMap("assis", card.id) }} >CAS - Assis Brasil</Dropdown.Item>
                        <Dropdown.Item onClick={() => { handleChangeMap("digital", card.id) }} >PUC - Sicredi Digital</Dropdown.Item>
                        <Dropdown.Item onClick={() => { handleChangeMap("ibmp", card.id) }} >IBM Filial</Dropdown.Item>
                        <Dropdown.Item onClick={() => { handleChangeMap("downtownibm", card.id) }} >CAS - Alberto Bins</Dropdown.Item>
                        <Dropdown.Item onClick={() => { handleChangeMap("agibankplace", card.id) }} >Agibank Mostardeiro</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

            </div>
        )
    }

}

export default Place
