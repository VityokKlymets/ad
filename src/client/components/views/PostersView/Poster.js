import React, { Component } from "react";
import PropTypes from "prop-types";

class Poster extends Component {
  displayName = "Poster";
  state = {
    isFirst: this.props.currentPoster === 0,
    isLast: this.props.currentPoster === this.props.postersCount - 1
  };
  render = () => {
      console.log(this.state);
    const { children, slideDown, slideUp } = this.props;
    const { isFirst, isLast } = this.state;
    return (
      <div className="poster">
        {children}
        {isLast ? (
          <div className="arrow up-arrow" onClick={() => slideUp()}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z" />
            </svg>
          </div>
        ) : (
          <div className="arrow down-arrow" onClick={() => slideDown()}>
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M11,4H13V16L18.5,10.5L19.92,11.92L12,19.84L4.08,11.92L5.5,10.5L11,16V4Z" />
            </svg>
          </div>
        )}
      </div>
    );
  };
}
Poster.propTypes = {
  currentPoster: PropTypes.number,
  postersCount: PropTypes.number,
  slideDown: PropTypes.func,
  slideUp: PropTypes.func
};
export default Poster;
