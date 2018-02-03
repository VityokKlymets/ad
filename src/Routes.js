import React from "react";
import HomePage from "./client/components/pages/HomePage";
import AboutPage from "./client/components/pages/AboutPage";

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
