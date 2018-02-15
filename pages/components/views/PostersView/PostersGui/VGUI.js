import React, { Component } from "react";
class VGUI extends Component {
  displayName = "VGUI";
  state = {
    currentPoster: this.props.current,
    posterCount: this.props.count,
    invert: !!this.props.invert,
    next: this.props.next
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
            this.setPoster(i);
          }}
        />
      );
    }
    return buttons;
  };
  setPoster = poster => {
    this.props.setPoster(poster);
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
      invert: props.invert,
      next: props.next
    });
  };
  render = () => {
    const { currentPoster, posterCount, invert, next } = this.state;
    const lastPoster = currentPoster === posterCount - 1;
    return (
      <div className={`poster-gui ${invert ? "invert" : ""}`}>
        <div className="poster-btn-wrapper">{this.renderPostersButtons()}</div>
        <div className="gui-arrows">
          {next && <div className="next-poster-text">{next}</div>}
          {!lastPoster && (
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
