import React, { Component } from "react";
import PropTypes from "prop-types";
class Image extends Component {
  displayName = "Image";

  render = () => {
    const { src } = this.props;
    return (
      <div
        className="poster-full-image"
        style={{
          backgroundImage: `url(${src})`
        }}
      />
    );
  };
}
Image.propTypes = {
  src: PropTypes.string.isRequired
};
export default Image;
