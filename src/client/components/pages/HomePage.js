import React, { Component } from "react";
import { Link } from "react-router-dom";
import TopNavBar from "../navbars/TopNavBar";
class HomePage extends Component {
  displayName = "HomePage";
  render = () => {
    return (
      <div className="HomePage">
        <TopNavBar />
      </div>
    );
  };
}

export default HomePage;
