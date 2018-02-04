import React, { Component } from "react";
import { canUseDOM } from "../../../utils/Util";
class Posters extends Component {
  displayName = "Posters";
  state = {
    currentPoster: 0,
    isFirstPoster: true,
    isLastPoster: false,
    postersCount: this.props.children.length
  };
  canUseDOM = canUseDOM();
  onKeyDown = e => {
    const keyCode = e.keyCode;
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
      currentPoster: nextPoster < postersCount ? nextPoster : currentPoster,
      isFirstPoster: false,
      isLastPoster: nextPoster === postersCount
    });
  };
  slideUp = () => {
    const { currentPoster } = this.state;
    const nextPoster = currentPoster - 1;
    this.setState({
      currentPoster: nextPoster > 0 ? nextPoster : 0,
      isLastPoster: false,
      isFirstPoster: nextPoster === 0
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
  renderPostersButtons = () => {
    const { postersCount, currentPoster } = this.state;
    const buttons = [];
    for (let i = 0; i < postersCount; i++) {
      buttons.push(
        <div
          key={i}
          className={`poster-button ${i === currentPoster ? "active" : ""}`}
          onClick={() => {
            this.setState({ currentPoster: i });
          }}
        />
      );
    }
    return buttons;
  };
  render = () => {
    const {
      currentPoster,
      postersCount,
      isFirstPoster,
      isLastPoster
    } = this.state;
    const { children } = this.props;
    return (
      <div>
        <div className="poster-gui">{this.renderPostersButtons()}</div>
        <div
          className="posters"
          style={{
            transform: `translateY(-${currentPoster * 100}vh)`
          }}
        >
          {children.map((child, idx) => {
            return React.cloneElement(child, {
              key: idx,
              currentPoster: idx,
              postersCount,
              slideDown: this.slideDown,
              slideUp: this.slideUp
            });
          })}
          }
        </div>
      </div>
    );
  };
}

export default Posters;
