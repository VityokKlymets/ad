import React, { Component } from "react";
import { Parallax, Background } from "react-parallax";
import PropTypes from "prop-types";
class BigPosterView extends Component {
  displayName = "BigPosterView";

  render = () => {
    const { headText, img } = this.props;
    return (
      <div className="BigPosterView view">
        <div className="view-head">
          <h1>{headText}</h1>
          <div className='post-info-date'>
            <span>3.02.2017</span>
          </div>
        </div>
        <div className="image-view">
          <Parallax
            blur={0}
            bgImage={img}
            bgImageAlt="the image"
            strength={200}
          >
            <div style={{ height: "600px" }} />
          </Parallax>
        </div>
      </div>
    );
  };
}

BigPosterView.propTypes = {
  img: PropTypes.string.isRequired,
  headText: PropTypes.string.isRequired,
  zoomable: PropTypes.bool
};
export default BigPosterView;
