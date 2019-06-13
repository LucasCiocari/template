import React from "react";
import Textarea from 'react-textarea-autosize';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class CardBirthday extends React.Component {

  render() {
    const { index, card, handleChange, handleNameBdChange, handlePlaceBdChange, handleDateBdChange } = this.props;
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
        <Textarea minRows={1} maxRows={2} placeholder="Nome" 
          value={card.name}
          onChange={
          event => {
            handleNameBdChange(event.target.value, card.id);
          }
        } maxLength={30} className="card-bd-name-input" />
        <div className="margin-bd-date">
          {/* <input type="date" className="card-bd-date-input"/> */}
          <DatePicker 
            selected={card.date}
            onChange={date => {
              handleDateBdChange(date, card.id)
            }}
            dateFormat="d/MM  "
            className="card-bd-date-input"
            placeholderText="Escolha a data"
          />
        </div>
        <Textarea minRows={1} maxRows={2} value={card.place} onChange={
          event => {
            handlePlaceBdChange(event.target.value, card.id);
          }}
          placeholder="Localização"  maxLength={30} className="card-bd-place-input" />
      </div>
    );
  }
}

export default CardBirthday;
