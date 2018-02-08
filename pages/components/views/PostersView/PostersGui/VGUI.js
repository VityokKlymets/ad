import React, { Component } from "react";
class VGUI extends Component {
  displayName = "VGUI";
  state = {
    currentPoster: this.props.current,
    posterCount: this.props.count,
    invert: !!this.props.invert
  };
  renderPostersButtons = () => {
    const { currentPoster, posterCount } = this.state;
    const buttons = [];
    for (let i = 0; i < posterCount; i++) {
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
  slideDown = () => {
    this.props.slideDown();
  };
  slideUp = () => {
    this.props.slideUp();
  };
  componentWillReceiveProps = props => {
    this.setState({
      currentPoster: props.current,
      posterCount: props.count,
      invert: props.invert
    });
  };
  render = () => {
    const { currentPoster, posterCount, invert } = this.state;
    const lastPoster = currentPoster === posterCount - 1;
    return (
      <div className={`poster-gui ${invert ? "invert" : ""}`}>
        <div className="poster-btn-wrapper">{this.renderPostersButtons()}</div>
        <div className="gui-arrows">
          {lastPoster ? (
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
          )}
        </div>
      </div>
    );
  };
}

export default VGUI;
