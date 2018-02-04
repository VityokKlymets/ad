import "babel-polyfill";
import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import "normalize.css/normalize.css";
import "bootstrap/dist/css/bootstrap-grid.css";
import "./assets/css/index.css";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import store from "./store/store";

ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <div>{renderRoutes(Routes)}</div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);