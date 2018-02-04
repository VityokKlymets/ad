import React, { Component } from "react";
import { canUseDOM } from "../../../utils/Util";
class VerticalPosters extends Component {
  displayName = "VerticalPosters";
  state = {
    currentPoster: 0,
    isFirstPoster: true,
    isLastPoster: false,
    postersCount: this.props.children.length
  };
  canUseDOM = canUseDOM();
  canInteractive = () => {
    const { currentColumn } = this.props.rec;
    const { column } = this.props;
    return currentColumn === column;
  };
  onKeyDown = e => {
    if (!this.canInteractive()) return;
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
    const { incRow } = this.props.rec;
    const { currentPoster, postersCount } = this.state;
    const nextPoster = currentPoster + 1;
    const needToChange = nextPoster < postersCount;
    if (!needToChange) return;
    incRow();
    this.setState({
      currentPoster: nextPoster,
      isFirstPoster: false,
      isLastPoster: nextPoster === postersCount - 1
    });
  };
  slideUp = () => {
    const { currentPoster } = this.state;
    const { decRow } = this.props.rec;
    const nextPoster = currentPoster - 1;
    const needToChange = nextPoster >= 0;
    if (!needToChange) return;
    decRow();
    this.setState({
      currentPoster: nextPoster,
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
  renderArrows = () => {
    const { isLastPoster } = this.state;
    return isLastPoster ? (
      <div className="arrow up-arrow" onClick={this.slideUp}>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z" />
        </svg>
      </div>
    ) : (
      <div className="arrow down-arrow" onClick={this.slideDown}>
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z" />
        </svg>
      </div>
    );
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
      <div className="VerticalPosters">
        {this.canInteractive() && (
          <div className="poster-gui">
            <div className="poster-btn-wrapper">
              {this.renderPostersButtons()}
            </div>
            {this.renderArrows()}
          </div>
        )}
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
              slideUp: this.slideUp,
              rec: this.props.rec
            });
          })}
          }
        </div>
      </div>
    );
  };
}

export default VerticalPosters;
