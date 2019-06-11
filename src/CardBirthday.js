import React from "react";

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
        <input type="text" className="card-bd-name-input" placeholder="Nome"/>
        <input type="date" className="card-bd-date-input"/>
        <input type="text" className="card-bd-place-input" placeholder="Localização"/>
      </div>
    );
  }
}

export default CardBirthday;
