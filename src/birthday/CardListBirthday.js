import React from "react";

import CardBirthday from "./CardBirthday";

const CardListBirthday = ({ cards, handleChange, handleNameBdChange, handlePlaceBdChange, handleDateBdChange }) => (
  <React.Fragment>
    <div className="card-list-bd">
      <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
        <div className="row justify-content-center">
        {cards.map((card, index) => (
          <div className="col-3" key={card.id+1}>
            <CardBirthday
              key={card.id}
              index={index}
              card={card}
              handleChange={handleChange}
              handleNameBdChange={handleNameBdChange}
              handlePlaceBdChange={handlePlaceBdChange}
              handleDateBdChange={handleDateBdChange}
            />
          </div>
        ))}
        </div>
        </div>
        <div className="col-2"></div>
      </div>
    </div>
  </React.Fragment>
);

export default CardListBirthday;
