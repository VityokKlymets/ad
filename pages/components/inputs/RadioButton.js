import React, { Component } from "react";
class RadioButton extends Component {
  displayName = "RadioButton";
  state = {
    checked: this.props.checked || false,
    name: this.props.name || "rBtn"
  };
  onChange = e => {
    this.setState({ checked: e.target.checked });
    this.props.onChange({
      value: e.target.checked,
      name: this.state.name
    });
  };
  render = () => {
    const { checked, name } = this.state;
    const { label = "Option" } = this.props;
    return (
      <div className="cntr">
        <label htmlFor={name + this.props.idx} className="btn-radio">
          <input
            type="radio"
            id={name + this.props.idx}
            name={name}
            checked={checked}
            onChange={this.onChange}
          />
          <svg width="20px" height="20px" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="9" />
            <path
              d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
              className="inner"
            />
            <path
              d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
              className="outer"
            />
          </svg>
          <span>{label}</span>
        </label>
        <style jsx>{`
          .btn-radio {
            cursor: pointer;
            display: inline-block;
            float: left;
            -webkit-user-select: none;
            user-select: none;
          }
          .btn-radio:not(:first-child) {
            margin-left: 20px;
          }
          @media screen and (max-width: 480px) {
            .btn-radio {
              display: block;
              float: none;
            }
            .btn-radio:not(:first-child) {
              margin-left: 0;
              margin-top: 15px;
            }
          }
          .btn-radio svg {
            fill: none;
            vertical-align: middle;
          }
          .btn-radio svg circle {
            stroke-width: 2;
            stroke: #c8ccd4;
          }
          .btn-radio svg path {
            stroke: #008fff;
          }
          .btn-radio svg path.inner {
            stroke-width: 6;
            stroke-dasharray: 19;
            stroke-dashoffset: 19;
          }
          .btn-radio svg path.outer {
            stroke-width: 2;
            stroke-dasharray: 57;
            stroke-dashoffset: 57;
          }
          .btn-radio input {
            display: none;
          }
          .btn-radio input:checked + svg path {
            transition: all 0.4s ease;
          }
          .btn-radio input:checked + svg path.inner {
            stroke-dashoffset: 38;
            transition-delay: 0.3s;
          }
          .btn-radio input:checked + svg path.outer {
            stroke-dashoffset: 0;
          }
          .btn-radio span {
            padding-left: 0.5em;
            display: inline-block;
            vertical-align: middle;
          }
        `}</style>
      </div>
    );
  };
}

export default RadioButton;
