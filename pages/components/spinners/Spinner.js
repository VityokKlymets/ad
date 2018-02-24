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
    const { children, transparent, size='', className ,type=""} = this.props;
    const { loading } = this.state;
    return loading ? (
      <div>
        <div className={`Spinner ${className ? className : ""}`}>
          {children && React.cloneElement(children, ...this.props)}
          <div
            className={`spinner ${transparent ? "transparent" : ""} ${size} ${type}`}
          >
            <div className="circle-spin" />
          </div>
        </div>
        <style jsx>{`
          .Spinner {
            position: relative;
            width: 100%;
            height: 100%;
          }
          .Spinner .spinner {
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 10;
          }
          .Spinner .spinner.light{
            background: rgba(255, 255, 255, 0.5);
          }
          .Spinner .spinner.transparent {
            background: inherit;
          }
          .Spinner .spinner.medium .circle-spin {
            min-width: 35px;
            min-height: 35px;
          }
          
          .Spinner .spinner.small .circle-spin {
            border-width: 2px;
            min-width: 25px;
            min-height: 25px;
            border-style: dashed;
            animation-duration: 0.8;
          }
          .Spinner .spinner .circle-spin {
            position: absolute;
            min-width: 25px;
            min-height: 25px;
            border-radius: 50%;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            border-width: 5px;
            border-top-color: #fff;
            border-style: solid;
            animation: spin 0.5s linear infinite;
          }
          @keyframes spin {
            from {
              transform: translate(-50%, -50%) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg);
            }
          }
        `}</style>
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
