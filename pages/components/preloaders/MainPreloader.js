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
    if (length === 0)
      this.setState({
        actualLoaded: true
      });
    images.forEach((src, idx) => {
      var img = new Image();
      img.onload = () => {
        counter++;
        if (counter === length - 1) {
          this.setState({
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
  render = () => {
    const { actualLoaded } = this.state;
    const { children } = this.props;
    return (
      <div>
        {children && React.cloneElement(children, {})}
        {!actualLoaded && (
          <div className="preloader">
            <div>
              <h1 className="pb-5 prel">Загрузка ...</h1>
            </div>
            <div className="caption">
              <div className="cube-loader">
                <div className="cube loader-1" />
                <div className="cube loader-2" />
                <div className="cube loader-4" />
                <div className="cube loader-3" />
              </div>
            </div>
          </div>
        )}
        <style jsx>{`
          .preloader {
            display: flex;
            flex-direction: column;
            color: #fff;
            position: fixed;
            align-items: center;
            justify-content: center;
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            z-index: 999;
            background: #fff;
          }
          h1.prel {
            font-size: 1.2rem;
            text-transform: capitalize;
            color: #1a3059;
          }
          .caption {
            margin: 0 auto;
          }
          .cube-loader {
            width: 73px;
            height: 73px;
            margin: 0 auto;
            position: relative;
            transform: rotateZ(45deg);
          }
          .cube {
            position: relative;
            transform: rotateZ(45deg);
            width: 50%;
            height: 50%;
            float: left;
            transform: scale(1.1);
          }
          .cube:before {
            overflow: hidden;
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #34495e;
            animation: cube-loader 2.76s infinite linear both;
            transform-origin: 100% 100%;
          }
          .loader-2 {
            transform: scale(1.1) rotateZ(90deg);
          }
          .loader-3 {
            transform: scale(1.1) rotateZ(180deg);
          }
          .loader-4 {
            transform: scale(1.1) rotateZ(270deg);
          }
          .loader-2:before {
            animation-delay: 0.35s;
          }
          .loader-3:before {
            animation-delay: 0.69s;
          }
          .loader-4:before {
            animation-delay: 1.04s;
          }

          @keyframes cube-loader {
            0%,
            10% {
              transform: perspective(136px) rotateX(-180deg);
              opacity: 0;
            }
            25%,
            75% {
              transform: perspective(136px) rotateX(0deg);
              opacity: 1;
            }
            90%,
            100% {
              transform: perspective(136px) rotateY(180deg);
              opacity: 0;
            }
          }
        `}</style>
      </div>
    );
  };
}

export default MainPreloader;
