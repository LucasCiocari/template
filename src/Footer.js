import React from "react";
import classNames from "classnames";

const Footer = ({length}) => (
    <div className={classNames("footer", {"footer--branco" : length%2==1}, {"footer--azul" : length%2==0})}>
        <h1 className={classNames("font", {"font--branco" : length%2==1}, {"font--azul" : length%2==0})}>
            muito sucesso na nova carreira
        </h1>
    </div>
)

export default Footer;