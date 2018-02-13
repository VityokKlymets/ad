import React, { Component } from "react";
import { canUseDOM } from "../utils/Util";
class MainPreloader extends Component {
  displayName = "MainPreloader";
  state = {
    loaded: 0,
    actualLoaded: false
  };
  canUseDOM = canUseDOM();
  attachEvents = () => {
    window.addEventListener('onload',()=>{this.setState({actualLoaded:true})},false);
  }
  removeEventListeners = () =>{
    window.removeEventListener('onload',()=>{},false);
  }
  componentDidMount = () => {
    if (!canUseDOM) return;
    this.attachEvents();
  };
  render = () => {
    const { loaded, actualLoaded } = this.state;
    return !actualLoaded ? (
      <div className="preloader">
        <div className="line" />
        <div className="loaded">
          <span>Loading... {loaded}%</span>
        </div>
        <style jsx>{`
          
          .line {
            width: ${loaded}%;
            height: 25px;
            background: #54f;
          }
          .preloader {
            display: flex;
            color: #333;
            position: fixed;
            flex-direction: column;
            justify-content: center;
            left: 0;
            top: 0;
            width: 100vw;
            height: 100vh;
            background: #eee;
            z-index: 999;
          }
          .loaded {
            text-align: center;
          }
        `}</style>
      </div>
    ) : null;
  };
}

export default MainPreloader;
