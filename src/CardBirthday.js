import React from "react";
import Textarea from "react-textarea-autosize";
import DatePicker from "react-datepicker";
import ReactHoverObserver from "react-hover-observer";
import classNames from "classnames";

import "react-datepicker/dist/react-datepicker.css";

class CardBirthday extends React.Component {
  state = {
    nameIsHovering: false,
    localIsHovering: false
  };

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
    const {
      index,
      card,
      handleChange,
      handleNameBdChange,
      handlePlaceBdChange,
      handleDateBdChange
    } = this.props;
    const { nameIsHovering, localIsHovering } = this.state;
    return (
      <div className="card-bd">
        <label>
          <input
            className="hideinput"
            type="file"
            name="image"
            id="image"
            onChange={event => {
              handleChange(card.id, event.target.files[0]);
            }}
          />
          <img className="card-bd-img" src={card.image} alt="person image" />
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
          ></Textarea>
        </ReactHoverObserver>

        <div className="margin-bd-date">
          {/* <input type="date" className="card-bd-date-input"/> */}
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
          className={classNames("card-bd-place-input", {"card-bd-hover": localIsHovering})}
        />
        </ReactHoverObserver>
      </div>
    );
  }
}

export default CardBirthday;
