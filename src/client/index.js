import React from "react";
import ReactDOM from "react-dom";
import Routes from "../Routes";
import { BrowserRouter } from "react-router-dom";
import "normalize.css/normalize.css";
import "bootstrap/dist/css/bootstrap-grid.css";
import "./assets/css/index.css";
if (process.env.BROWSER) {
  devToolsExtension = window.devToolsExtension();
}
ReactDOM.hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  document.getElementById("root")
);
