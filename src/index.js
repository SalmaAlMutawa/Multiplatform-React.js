import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

//styles
import "./index.css";
import "./css/skel.css";
import "./css/style-mobile.css";
import "./css/style-narrow.css";
import "./css/style-narrower.css";
import "./css/style-normal.css";
import "./css/style-wide.css";
import "./css/style.css";



ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
