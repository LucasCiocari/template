import React from "react";


import logo from './images/sicredi.png';
import logoIBM from './images/IBM.png';

const Header = () => (
    <React.Fragment>
        <div className="cabecalho">
            <h1>Vamos dar as boas vindas à</h1>
        </div>
        <div className="logo">
            <div className="ibm"><img src={logoIBM} alt="Logo IBM" /></div>
        </div>
    </React.Fragment>
)

export default Header;