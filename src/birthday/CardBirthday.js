import React from "react";

import BirthdayImage from "./BirthdayImage";
import BirthdayInfo from "./BirthdayInfo";


class CardBirthday extends React.Component {

  render() {
    const {
      card,
      handleChange,
      handleNameBdChange,
      handlePlaceBdChange,
      handleDateBdChange
    } = this.props;

    return (      
        <div className="card-bd">
          <BirthdayImage card={card} handleChange={handleChange} />
          <BirthdayInfo card={card} handleNameBdChange={handleNameBdChange} 
                        handlePlaceBdChange={handlePlaceBdChange} handleDateBdChange={handleDateBdChange}
          />
      </div>
    );
  }
}

export default CardBirthday;
