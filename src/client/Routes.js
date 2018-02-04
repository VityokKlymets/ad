import React from "react";
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";

export default [
  {
    path: "/",
    component: HomePage,
    exact: true
  },
  {
    path: "/about",
    component: AboutPage,
    exact: true
  }
];
