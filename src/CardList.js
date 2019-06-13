import React from "react";

import Card from "./Card";

const CardList = ({ cards, handleChange, handleNameChange, handleGodparentChange, handleLeaderChange, handleTeamChange, handleAreaChange, handleChangeMap}) => (
  <React.Fragment>
    <div className="card-list">
      {cards.map((card, index) => (
        <Card
          key={card.id}
          index={index}
          card={card}
          handleChange={handleChange}
          handleNameChange={handleNameChange}
          handleGodparentChange={handleGodparentChange}
          handleLeaderChange={handleLeaderChange}
          handleTeamChange={handleTeamChange}
          handleAreaChange={handleAreaChange}
          handleChangeMap={handleChangeMap}
        />
      ))}
    </div>
  </React.Fragment>
);

export default CardList;
