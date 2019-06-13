import React from "react";

const HeaderBirthday = ({bdMonthText, handleBdMonthChange}) => (
  
    <div className="confetti-top">
    <h1>PARABÉNS IBMISTAS!</h1>
    <input type="text" className="input-date-bd" value={bdMonthText} placeholder="Digite o mês" onChange={
        event => {
            handleBdMonthChange(event.target.value);
        }
    }/>
    </div>
  
);

export default HeaderBirthday;
