import React from "react"
import Textarea from "react-textarea-autosize";
import DatePicker from "react-datepicker";
import ReactHoverObserver from "react-hover-observer";
import classNames from "classnames";
import { Dropdown } from "react-bootstrap"

class BirthdayInfo extends React.Component {

    state = {
        nameIsHovering: false,
        localIsHovering: false
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

    render() {
        const { card, handleNameBdChange, handlePlaceBdChange, handleDateBdChange } = this.props;
        const { nameIsHovering, localIsHovering } = this.state;

        return (
            <React.Fragment>
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
                    <Dropdown id="dropdown-birthday">
                    <Dropdown.Toggle className={classNames("card-bd-place-input", { "card-bd-hover": localIsHovering })}
                     variant="secondary" id="dropdown-birthday-toggle">
                        {card.place}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => { handlePlaceBdChange("assis", card.id) }} >CAS - Assis Brasil</Dropdown.Item>
                        <Dropdown.Item onClick={() => { handlePlaceBdChange("digital", card.id) }} >PUC - Sicredi Digital</Dropdown.Item>
                        <Dropdown.Item onClick={() => { handlePlaceBdChange("ibmp", card.id) }} >IBM Filial</Dropdown.Item>
                        <Dropdown.Item onClick={() => { handlePlaceBdChange("downtownibm", card.id) }} >CAS - Alberto Bins</Dropdown.Item>
                        <Dropdown.Item onClick={() => { handlePlaceBdChange("agibankplace", card.id) }} >Agibank </Dropdown.Item>
                        <Dropdown.Item onClick={() => { handlePlaceBdChange("ibmsp", card.id) }} >IBM Tutóia - SP </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </React.Fragment>
        )
    }
}

export default BirthdayInfo