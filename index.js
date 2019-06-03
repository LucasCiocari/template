import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import uuid from "uuid/v1"; // gera hash a partir do timestamp

import "./index.scss";

class App extends React.Component {
    state = {}

    render() {
        return (
            <div></div>
        );
    }
}


ReactDOM.render(<App />, document.getElementById("root"));