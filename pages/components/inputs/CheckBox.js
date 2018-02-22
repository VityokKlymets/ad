import React, { Component } from "react";
class CheckBox extends Component {
  displayName = "CheckBox";
  state = {
    checked: this.props.checked || false,
    name: this.props.name || "сBox"
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
    const { label = "Checkbox" } = this.props;
    return (
      <div className="cntr">
        <label htmlFor={name} className="label-cbx">
          <input
            type="checkbox"
            className="invisible"
            id={name}
            name={name}
            onChange={this.onChange}
            checked={checked}
          />
          <div className="checkbox">
            <svg width="20px" height="20px" viewBox="0 0 20 20">
              <path d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z" />
              <polyline points="4 11 8 15 16 6" />
            </svg>
          </div>
          <span>{label}</span>
        </label>
        <style jsx>{`
          .label-cbx {
            user-select: none;
            cursor: pointer;
            margin-bottom: 0;
          }
          .label-cbx input:checked + .checkbox {
            border-color: #20c2e0;
          }
          .label-cbx input:checked + .checkbox svg path {
            fill: #20c2e0;
          }
          .label-cbx input:checked + .checkbox svg polyline {
            stroke-dashoffset: 0;
          }
          .label-cbx:hover .checkbox svg path {
            stroke-dashoffset: 0;
          }
          .label-cbx .checkbox {
            position: relative;
            top: 2px;
            float: left;
            margin-right: 8px;
            width: 20px;
            height: 20px;
            border: 2px solid #c8ccd4;
            border-radius: 3px;
          }
          .label-cbx .checkbox svg {
            position: absolute;
            top: -2px;
            left: -2px;
          }
          .label-cbx .checkbox svg path {
            fill: none;
            stroke: #20c2e0;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-dasharray: 71px;
            stroke-dashoffset: 71px;
            transition: all 0.6s ease;
          }
          .label-cbx .checkbox svg polyline {
            fill: none;
            stroke: #fff;
            stroke-width: 2;
            stroke-linecap: round;
            stroke-linejoin: round;
            stroke-dasharray: 18px;
            stroke-dashoffset: 18px;
            transition: all 0.3s ease;
          }
          .label-cbx > span {
            pointer-events: none;
            vertical-align: middle;
          }
          .invisible {
            position: absolute;
            z-index: -1;
            width: 0;
            height: 0;
            opacity: 0;
          }
        `}</style>
      </div>
    );
  };
}

export default CheckBox;
