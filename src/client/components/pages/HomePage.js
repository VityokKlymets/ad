import React, { Component } from "react";
import { Link } from "react-router-dom";
import MainHeader from "../headers/MainHeader";
import InteriorView from "../views/InteriorView";
class HomePage extends Component {
  displayName = "HomePage";
  render = () => {
    return (
      <div>
        <MainHeader />
        <div className="container-fluid">
          <InteriorView
            zoomable
            img="/images/indoor-garden-wall-1-960x580.jpg"
            headText="Somth cool"
          />
          <div style={{ height: '1000px' }} />
        </div>
      </div>
    );
  };
}

export default HomePage;
