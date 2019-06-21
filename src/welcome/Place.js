import React from 'react'
import classNames from "classnames"

import sicrediLogo from "../images/sicredi.png"
import agibankLogo from "../images/agibank.png"

class Place extends React.Component {

    render(){

        const { card, index, handleChangeMap, handleChangeLogo } = this.props;

        return (
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
        )
    }

}

export default Place
