import React, { Component } from "react";
import { canUseDOM } from "../../../utils/Util";
class HorizontalPosters extends Component {
  displayName = "HorizontalPosters";
  state = {
    currentPoster: 0,
    isFirstPoster: true,
    isLastPoster: false,
    postersCount: this.props.children.length
  };
  canUseDOM = canUseDOM();
  canInteractive = () => {
    const { currentRow } = this.props.rec;
    const { row } = this.props;
    return currentRow === row;
  };
  onKeyDown = e => {
    if (!this.canInteractive()) return;
    const keyCode = e.keyCode;
    switch (keyCode) {
      case 37:
        this.slideLeft();
        break;
      case 39:
        this.slideRight();
        break;
    }
  };

  slideRight = () => {
    const { currentPoster, postersCount } = this.state;
    const { incCol } = this.props.rec;
    const nextPoster = currentPoster + 1;
    if (nextPoster < postersCount) {
      incCol();
    }
    this.setState({
      currentPoster: nextPoster < postersCount ? nextPoster : currentPoster,
      isFirstPoster: false,
      isLastPoster: nextPoster === postersCount
    });
  };
  slideLeft = () => {
    const { currentPoster } = this.state;
    const { decCol } = this.props.rec;
    const nextPoster = currentPoster - 1;
    if (nextPoster >= 0) {
      decCol();
    }
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
      <div className="HorizontalPosters">
        {this.canInteractive() && (
          <div className="poster-gui"></div>
        )}
        <div
          className="posters"
          style={{
            width: `${postersCount * 100}vw`,
            transform: `translateX(-${currentPoster * 100}vw)`
          }}
        >
          {children.map((child, idx) => {
            return React.cloneElement(child, {
              key: idx,
              currentPoster: idx,
              postersCount,
              slideLeft: this.slideLeft,
              slideRight: this.slideRight,
              rec: this.props.rec
            });
          })}
          }
        </div>
      </div>
    );
  };
}

export default HorizontalPosters;
