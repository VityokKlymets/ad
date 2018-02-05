import React, { Component } from "react";
import PropTypes from "prop-types";

class Poster extends Component {
  displayName = "Poster";
  state = {
    visible: this.props.currentPoster === this.props.rec.currentRow
  };
  renderPosterContent = () => {
    const { children } = this.props;
    let isPostersView = false;
    if (!children) return null;
    isPostersView =
      children.type.name === "VerticalPosters" ||
      children.type.name === "HorizontalPosters";

    return isPostersView ? (
      React.cloneElement(children, { rec: this.props.rec })
    ) : (
      <div className="free-space">
        {React.cloneElement(children, { rec: this.props.rec })}
      </div>
    );
  };
  render = () => {
    const { children, slideDown, slideUp, bgSrc } = this.props;
    const { visible } = this.state;
    return (
      <div className={`poster ${visible ? "visible" : ""}`}>
        {bgSrc && (
          <div
            className="poster-full-image"
            style={{
              backgroundImage: `url(${bgSrc})`
            }}
          />
        )}
        {this.renderPosterContent()}
      </div>
    );
  };
}
Poster.propTypes = {
  currentPoster: PropTypes.number,
  postersCount: PropTypes.number,
  slideDown: PropTypes.func,
  slideUp: PropTypes.func,
  bgSrc: PropTypes.string
};
export default Poster;
