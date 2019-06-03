import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import uuid from "uuid/v1"; // gera hash a partir do timestamp

//Images
import logo from './images/sicredi.png';
import logoIBM from './images/IBM.png';
import henrique from './images/henrique.jpg';


import "./index.scss";

class App extends React.Component {
    state = {
        items : []
    }

    render() {
        return (
            <div className="container">
                <div className="app" id="aplicacao">
                    <Header/>
                    <Card/>
                </div>
            </div>
        );
    }
}

const Header = () => (
    <React.Fragment>
        <div className="cabecalho">
            <h1>Bem Vindo</h1>
        </div>
        <div className="logo">
            <div className="sicredi"><img src={logo} alt="Logo Sicredi" /></div>
            <div className="ibm"><img src={logoIBM} alt="Logo Sicredi" /></div>
        </div>
    </React.Fragment>
)

const Card = () => (
        <div className="carta carta--azul">
            <div className="informacoes">
                <div className="nome">
                    <input type="text" className="form-control form-control--azul" id="nomeFuncionario" placeholder="Nome Completo"/>
                </div>
                <div className="padrinho">
                    <input type="text" className="form-control form-control--azul" id="nomePadrinho" placeholder="Nome do Padrinho"/>
                </div>
                <div className="scrum">
                    <input type="text" className="form-control form-control--azul" id="nomeScrum" placeholder="Nome do Scrum"/>
                </div>
                <div className="time">
                    <input type="text" className="form-control form-control--azul" id="nomeSetor" placeholder="Nome do Setor"/>
                </div>
            </div>
            <div className="foto">
                <div className="perfil"><img src={henrique} alt="Foto" /></div>
            </div>
        </div>	
)


ReactDOM.render(<App />, document.getElementById("root"));