import React, { Component } from "react";
import { canUseDOM } from "../../../utils/Util";
import Poster from "./Poster";
import Image from "./Image";
class PostersView extends Component {
  displayName = "PostersView";
  state = {
    currentPoster: 0,
    postersCount: this.props.children.length
  };
  timestamp = Date.now();
  canUseDOM = canUseDOM();
  onKeyDown = e => {
    const keyCode = e.keyCode;
    console.log(keyCode);
    switch (keyCode) {
      case 40:
        this.slideDown();
        break;
      case 38:
        this.slideUp();
        break;
    }
  };
  slideDown = () => {
    const { currentPoster, postersCount } = this.state;
    const nextPoster = currentPoster + 1;
    this.setState({
      currentPoster: nextPoster < postersCount ? nextPoster : currentPoster
    });
  };
  slideUp = () => {
    const { currentPoster } = this.state;
    const nextPoster = currentPoster - 1;
    this.setState({
      currentPoster: nextPoster > 0 ? nextPoster : 0
    });
  };
  componentDidMount = () => {
    this.addListeners();
  };
  componentWillUnmount = () => {
    this.removeListeners();
  };
  addListeners = () => {
    if (!this.canUseDOM) return;
    window.addEventListener("keydown", this.onKeyDown, false);
  };
  removeListeners = () => {
    window.removeEventListener("keydown", this.onKeyDown, false);
  };

  render = () => {
    const { currentPoster } = this.state;
    const { children } = this.props;
    return (
      <div className="PosterView">
        <div className="view-area">
          <div
            className="posters"
            style={{
              transform: `translateY(-${currentPoster * 100}vh)`
            }}
          >
            {children.map((child, idx) => {
              return React.cloneElement(child,{key:idx});
            })}
            }
          </div>
        </div>
      </div>
    );
  };
  static Poster = Poster;
  static Image = Image;
}
export default PostersView;
