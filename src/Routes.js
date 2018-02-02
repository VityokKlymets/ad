import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./client/components/pages/HomePage";
import AboutPage from "./client/components/pages/AboutPage";

export default () => {
  return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/about" component={AboutPage} />
    </div>
  );
};
