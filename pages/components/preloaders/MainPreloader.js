import React, { Component } from "react";
import { canUseDOM } from "../utils/Util";
import LeftTopLogo from "../logos/LeftTopLogo";
class MainPreloader extends Component {
  displayName = "MainPreloader";
  state = {
    actualLoaded: false
  };
  canUseDom = canUseDOM();
  getAllImages = () => {
    if (!this.canUseDom) return;
    let images = [];
    let divs = document.querySelectorAll("div");
    [].forEach.call(divs, (div, idx) => {
      if (div.style.backgroundImage !== "") {
        images.push(div.style.backgroundImage.replace(/url|\(|\)|\"/g, ""));
      }
    });
    return images;
  };
  preload = () => {
    let images = this.getAllImages();
    let counter = 0;
    let length = images.length;
    images.forEach((src, idx) => {
      var img = new Image();
      img.onload = () => {
        counter++;
        if (counter === length - 1) {
          this.setState({
            blur: 0,
            actualLoaded: true
          });
        }
      };
      img.src = src;
    });
  };
  componentDidMount = () => {
    if (!this.canUseDom) return;
    this.preload();
  };
  setBlur = blur => this.setState({ blur });
  render = () => {
    const { actualLoaded } = this.state;
    const { children } = this.props;
    return (
      <div>
        <div className={`blur ${actualLoaded ? "no-blur" : ""}`}>
          {children && React.cloneElement(children, {})};
          <style jsx>{`
            .blur {
              -webkit-filter: blur(25px);
              position: fixed;
              left: 0;
              top: 0;
              width: 100vw;
              height: 100vh;
              z-index: 20;
              transition: all 1s linear;
            }
            .blur.no-blur {
              -webkit-filter: blur(0);
            }
          `}</style>
        </div>
        {!actualLoaded && (
          <div className="preloader">
            <LeftTopLogo animate />
            <style jsx>{`
              .preloader {
                display: flex;
                color: #fff;
                position: fixed;
                flex-direction: column;
                justify-content: center;
                left: 0;
                top: 0;
                width: 100vw;
                height: 100vh;
                z-index: 999;
              }
            `}</style>
          </div>
        )}
      </div>
    );
  };
}

export default MainPreloader;
