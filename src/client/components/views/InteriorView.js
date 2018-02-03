import React, { Component } from "react";
import PropTypes from "prop-types";
import { Parallax, Background } from "react-parallax";
import StarInput from "../inputs/StarInput";

class InteriorView extends Component {
  displayName = "InteriorView";

  render = () => {
    const { img, headText, zoomable } = this.props;
    return (
      <div className="InteriorView view">
      <div className="view-head">
          <h1>{headText}</h1>
          <div className='post-info-date'>
            <span>3.02.2017</span>
          </div>
        </div>
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
          <div className="col-4">
            <div className=" image-description">
              <div className="author">
                <div
                  className="avatar small"
                  style={{
                    backgroundImage: 'url("/images/Bart\'s_youngest_son.png")'
                  }}
                />
                <span> Maxim savin</span>
              </div>
              <div className="text">
                <h3>Where does it come from?</h3>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur,
                  from a Lorem Ipsum passage, and going through the cites of the
                  word in classical literature, discovered the undoubtable
                  source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of
                  "de Finibus Bonorum et Malorum"
                </p>
              </div>
              <div className="controls" />
              <StarInput />
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
