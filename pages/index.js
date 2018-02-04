import React, { Component } from "react";
import { Link } from "react-router-dom";
import MainHeader from "./components/headers/MainHeader";
import InteriorView from "./components/views/InteriorView";
import BigPosterView from "./components/views/BigPosterView";
import SliderView from "./components/views/SliderView";
import MainPreloader from "./components/preloaders/MainPreloader";
import Head from "./head/Head";
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
      <div>
        <Head/>
        <MainPreloader>
          <div>
            <MainHeader />
            <div className="container-fluid">
              <InteriorView
                zoomable
                img="/static/images/indoor-garden-wall-1-960x580.jpg"
                headText="Family Home With Dashes Of Pastel Colour Decor"
              />
              <SliderView
                images={[
                  "/static/images/The-Best-Interior-Design-Trends-for-2017.jpg",
                  "/static/images/indoor-garden-wall-1-960x580.jpg"
                ]}
                headText="White Walls and Exposed Brick Go Minimalist in This Couple’s Retreat"
              />
            </div>
          </div>
        </MainPreloader>
      </div>
    );
  };
}

export default HomePage;
