import React, { Component } from "react";
import PropTypes from "prop-types";

class Poster extends Component {
  displayName = "Poster";
  state = {
    visible: this.props.currentPoster === this.props.rec.currentRow
  };
  render = () => {
    const { children, slideDown, slideUp } = this.props;
    const { visible } = this.state;
    console.log(visible);
    return (
      <div className={`poster ${visible ? "visible" : ""}`}>
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
