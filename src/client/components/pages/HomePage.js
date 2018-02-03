import React, { Component } from "react";
import { Link } from "react-router-dom";
import MainHeader from "../headers/MainHeader";
import InteriorView from "../views/InteriorView";
import BigPosterView from "../views/BigPosterView";
import SliderView from "../views/SliderView";
import MainPreloader from "../preloaders/MainPreloader";
class HomePage extends Component {
  displayName = "HomePage";
  render = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <MainPreloader>
        <div>
          <MainHeader />
          <div className="container-fluid">
            <SliderView
              images={[
                "/images/The-Best-Interior-Design-Trends-for-2017.jpg",
                "/images/indoor-garden-wall-1-960x580.jpg"
              ]}
              headText="White Walls and Exposed Brick Go Minimalist in This Couple’s Retreat"
            />
            <InteriorView
              zoomable
              img="/images/indoor-garden-wall-1-960x580.jpg"
              headText="Family Home With Dashes Of Pastel Colour Decor"
            />
          </div>
        </div>
      </MainPreloader>
    );
  };
}

export default HomePage;
