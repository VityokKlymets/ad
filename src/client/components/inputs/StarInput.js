import React, { Component } from "react";
import PropTypes from "prop-types";

class StarInput extends Component {
  displayName = "StarInput";
  state = {
    value: this.props.value || 0
  };
  onChange = value => {
    this.setState({ value });
  };
  renderStars = () => {
    const stars = [];
    const value = this.state.value;
    for (let i = 0; i < 5; i++) {
      stars.push(
        <div
          className={`star ${i < value ? "active" : ""}`}
          onClick={() => {
            this.onChange(i + 1);
          }}
          key={i}
        >
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z" />
          </svg>
        </div>
      );
    }
    return stars;
  };
  render = () => {
    const { value } = this.state;
    return <div className="StarInput">{this.renderStars()}</div>;
  };
}
StarInput.propTypes = {
  value: PropTypes.number
};
export default StarInput;
