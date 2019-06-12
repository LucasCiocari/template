import React from "react";
import Textarea from 'react-textarea-autosize';

class CardBirthday extends React.Component {
  render() {
    const { index, card, handleChange } = this.props;
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
        <Textarea minRows={1} maxRows={2} placeholder="Nome" maxLength={30} className="card-bd-name-input" />
        <div className="margin-bd-date">
          <input type="date" className="card-bd-date-input"/>
        </div>
        <Textarea minRows={1} maxRows={2} placeholder="Localização"  maxLength={30} className="card-bd-place-input" />
      </div>
    );
  }
}

export default CardBirthday;
