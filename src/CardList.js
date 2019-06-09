import React from "react";

import Footer from "./Footer";
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
    <Footer length={cards.length}/>
   
    </React.Fragment>
)

export default CardList;