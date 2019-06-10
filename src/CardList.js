import React from "react";

import Card from "./Card";

const CardList = ({cards, handleChange}) => (
    <React.Fragment>
    <div className="card-list">
        {
            cards.map((card, index) => 
                <Card key={card.id} index={index} card={card} handleChange={handleChange}/>
            )
        }
    </div>
    </React.Fragment>
)

export default CardList;