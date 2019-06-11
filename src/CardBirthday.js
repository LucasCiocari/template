import React from "react";

class CardBirthday extends React.Component {
    render() {
        const { index, card, handleChange }  = this.props;
        return (
            <div className="card-bd">
                <img className="card-bd-img" src={card.image} alt="aha">
                </img>
            </div>
        )
    }
}

export default CardBirthday;