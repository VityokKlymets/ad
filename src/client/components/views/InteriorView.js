import React, { Component } from "react";
import PropTypes from "prop-types";
import { Parallax, Background } from "react-parallax";

class InteriorView extends Component {
  displayName = "InteriorView";

  render = () => {
    console.log(process.browser);
    const { img, headText, zoomable } = this.props;
    return (
      <div className="InteriorView">
        <div className="row row-eq-height">
          <div className="col-8">
            <div className="image-view">
              {!!zoomable ? (
                <Parallax
                  blur={0}
                  bgImage={img}
                  bgImageAlt="the image"
                  strength={200}
                >
                  <div style={{ height: "500px" }} />
                </Parallax>
              ) : (
                <img src={img} alt={img} />
              )}

              {headText && <h1>{headText}</h1>}
            </div>
          </div>
          <div className="col-4 image-description">
              <div className="author">
                <div  className="avatar small" style={{
                  backgroundImage : "url(\"/images/Bart's_youngest_son.png\")"
                }}/>
                <span> Maxim savin</span>
              </div>
          </div>
        </div>
      </div>
    );
  };
}
InteriorView.propTypes = {
  img: PropTypes.string.isRequired,
  headText: PropTypes.string.isRequired,
  zoomable: PropTypes.bool
};
export default InteriorView;
