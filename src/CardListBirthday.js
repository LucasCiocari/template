import React from "react";

import CardBirthday from "./CardBirthday";

const CardListBirthday = ({ cards, handleChange }) => (
  <React.Fragment>
    <div className="card-list-bd">
      <div className="row justify-content-center">
        {cards.map((card, index) => (
          <div className="col-2" key={card.id+1}>
            <CardBirthday
              key={card.id}
              index={index}
              card={card}
              handleChange={handleChange}
            />
          </div>
        ))}
      </div>
    </div>
  </React.Fragment>
);

export default CardListBirthday;
