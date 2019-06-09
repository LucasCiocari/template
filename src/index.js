import React from "react";
import ReactDOM from "react-dom";

import GoogleFontLoader from 'react-google-font-loader'; 

//Images


import App from "./App";

import "./index.scss";

const fontNames = 
    <GoogleFontLoader fonts={[
            {
                font: 'Roboto',
                weights: [400]
            },
            {
                font: 'Roboto Slab',
                weights: [400]
            }
        ]
    }/>



ReactDOM.render(<App />, document.getElementById("root"));