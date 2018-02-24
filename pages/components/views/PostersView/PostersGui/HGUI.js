import React, { Component } from "react";
class HGUI extends Component {
  displayName = "HGUI";
  state = {
    currentPoster: this.props.current,
    posterCount: this.props.count,
    invert: !!this.props.invert,
    counter: !!this.props.counter
  };
  slideLeft = () => {
    this.props.slideLeft();
  };
  slideRight = () => {
    this.props.slideRight();
  };
  renderArrow = () => {
    const { currentPoster, posterCount, invert } = this.state;
    const firstPoster = currentPoster === 0;
    const lastPoster = currentPoster === posterCount - 1;
    return (
      <div className="gui-arrows">
        <div
          className={`arrow left-arrow ${!firstPoster ? "active" : ""}`}
          onClick={this.slideLeft}
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
          </svg>
        </div>

        <div
          className={`arrow right-arrow ${!lastPoster ? "active" : ""}`}
          onClick={this.slideRight}
        >
          <svg version="1.1" width="24" height="24" viewBox="0 0 24 24">
            <path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" />
          </svg>
        </div>
      </div>
    );
  };
  renderCounter = () => {
    const { currentPoster, posterCount, invert } = this.state;
    return (
      <div className="counter">
        <span className="left">{currentPoster + 1}</span>
        <span className="devider">/</span>
        <span className="right">{posterCount}</span>
        <style jsx>{`
          .counter {
            position: absolute;
            top: 10px;
            right: 140px;
            z-index: 4;
          }
          span {
            font-family: verdana;
            display: inline-block;
          }
          .left {
            transform: translateY(-10%);
          }
          .right {
            transform: translateY(10%);
          }
          .left,
          .right {
            font-size: 2.5em;
            padding: 0 0.4em;
          }
          .devider {
            transform-origin: center;
            font-size: 4em;
            font-weight: 300;
            transform: translateY(5%);
          }
        `}</style>
      </div>
    );
  };
  componentWillReceiveProps = props => {
    this.setState({
      currentPoster: props.current,
      posterCount: props.count,
      invert: props.invert
    });
  };
  render = () => {
    const { currentPoster, posterCount, invert, counter } = this.state;
    return (
      <div className={`poster-gui ${invert ? "invert" : ""}`}>
        {this.renderArrow()}
        {counter&&this.renderCounter()}
      </div>
    );
  };
}

export default HGUI;
