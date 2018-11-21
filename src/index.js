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

//Extra Redux Stuff
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

// Store
import store from "./Store";

// Actions
import * as actionCreators from "./Store/actions";

store.dispatch(actionCreators.checkForExpiredToken());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
