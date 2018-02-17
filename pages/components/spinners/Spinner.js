import React, { Component } from "react";
import PropTypes from "prop-types";
class Spinner extends Component {
  state = {
    loading: !!this.props.loading
  };
  componentWillReceiveProps = props => {
    this.setState({
      loading: props.loading
    });
  };
  render() {
    const { children, transparent, size, className } = this.props;
    const { loading } = this.state;
    return loading ? (
      <div className={`Spinner ${className ? className : ""}`}>
        {children && React.cloneElement(children, ...this.props)}
        <div
          className={`spinner ${transparent ? "transparent" : ""} ${
            size ? size : ""
          }`}
        >
          <div className="circle-spin" />
        </div>
      </div>
    ) : children ? (
      React.cloneElement(children, ...this.props)
    ) : null;
  }
}
Spinner.propTypes = {
  children: PropTypes.shape({}),
  loading: PropTypes.bool,
  transparent: PropTypes.bool,
  size: PropTypes.string,
  className: PropTypes.string
};
export default Spinner;
