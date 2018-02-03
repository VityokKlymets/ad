import Slider from "react-slick";
import PropTypes from "prop-types";
import SliderLeftArrow from "./SliderLeftArrow";
import SliderRightArrow from "./SliderRightArrow";
import StarInput from "../inputs/StarInput";
import React, { Component } from "react";
class SliderView extends Component {
  displayName = "SliderView";

  render = () => {
    const { images } = this.props;
    const sliderSetting = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      autoplay: true,
      easing: "ease-in-out"
    };
    const { headText } = this.props;
    return (
      <div className="SliderView view">
        <div className="row">
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
                <h3>{headText}</h3>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem.
                </p>
              </div>
              <div className="controls" />
              <StarInput />
            </div>
          </div>
          <div className="col-8">
            <h3>{headText}</h3>
            <Slider {...sliderSetting}>
              {images.map((img, idx) => (
                <div
                  className="slide"
                  style={{
                    backgroundImage: `url(${img})`
                  }}
                  key={idx}
                />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    );
  };
}
SliderView.propTypes = {
  images: PropTypes.array.isRequired,
  headText: PropTypes.string.isRequired
};
export default SliderView;
