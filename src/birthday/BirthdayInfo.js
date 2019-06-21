import React from "react"
import Textarea from "react-textarea-autosize";
import DatePicker from "react-datepicker";
import ReactHoverObserver from "react-hover-observer";
import classNames from "classnames";

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
            </React.Fragment>
        )
    }
}

export default BirthdayInfo