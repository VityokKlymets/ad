import React, { Component } from "react";
class SliderRightArrow extends Component {
  displayName = "SliderRightArrow";

  render = () => {
    return (
      <div {...this.props} className="SliderRightArrow">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
        </svg>
      </div>
    );
  };
}

export default SliderRightArrow;
