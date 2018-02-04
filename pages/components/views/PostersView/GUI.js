import React, { Component } from "react";
import PropTypes from "prop-types";
class GUI extends Component {
  displayName = "GUI";
  state = {
    toggleColor: !!this.props.toggle
  };
  render = () => {
    const { toggleColor } = this.state;
    return (
      <div className={`gui ${toggleColor ? "toggle" : ""}`}>
        {React.cloneElement(this.props.children, ...this.props.children.props)}
      </div>
    );
  };
}
GUI.propTypes = {
  toggle: PropTypes.bool,
  children: PropTypes.shape({
    props: PropTypes.shape({})
  })
};
export default GUI;
