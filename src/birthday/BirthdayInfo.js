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
                <ReactHoverObserver
                    {...{
                        onHoverChanged: this.onHoverLocalChanged
                    }}
                >

                    <Dropdown id="dropdown-birthday">
                    <Dropdown.Toggle className={classNames("card-bd-place-input", { "card-bd-hover": localIsHovering })}
                     variant="secondary" id="dropdown-birthday-toggle">
                        {card.place}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item onClick={() => { handlePlaceBdChange("sicredi", card.id) }} >Sicredi</Dropdown.Item>
                        <Dropdown.Item onClick={() => { handlePlaceBdChange("agibank", card.id) }} >Agibank</Dropdown.Item>
                        <Dropdown.Item onClick={() => { handlePlaceBdChange("ibm", card.id) }} >IBM</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                </ReactHoverObserver>
            </React.Fragment>
        )
    }
}

export default BirthdayInfo