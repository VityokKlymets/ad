import React, { Component } from "react";
import PropTypes from "prop-types";

class Poster extends Component {
  displayName = "Poster";
  state = {
    isFirst: this.props.currentPoster === 0,
    isLast: this.props.currentPoster === this.props.postersCount - 1
  };
  render = () => {
    const { children, slideDown, slideUp } = this.props;
    const { isFirst, isLast } = this.state;
    return (
      <div className="poster">
        {React.cloneElement(children, { rec: this.props.rec })}
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
