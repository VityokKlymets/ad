import React, { Component } from "react";
import TextInput from "./TextInput";
class ParamsInput extends Component {
  displayName = "ParamsInput";
  state = {
    data: {},
    params: this.props.params || {}
  };
  onAddParamClick = () => {
    const key = this.refs.input.value;
    if (key)
      this.setState({
        params: { ...this.state.params, [key]: "" }
      });
    this.refs.input.value = "";
  };
  componentDidMount = () => {
    const { params } = this.props;
    const data = {};
    Object.keys(params).forEach((key, idx) => {
      data[key] = "";
    });
    this.setState({
      data,
      params
    });
  };
  onChange = () => {
    this.props.onChange(this.state.data);
  };
  onParamChange = e => {
    this.setState(
      {
        data: { ...this.state.data, [e.target.name]: e.target.value }
      },
      () => {
        this.onChange();
      }
    );
  };
  renderParams = () => {
    const params = this.state.params;
    const paramsFields = [];
    Object.entries(params).forEach((param, idx) => {
      const paramName = param[0];
      const paramOptions = param[1];
      paramsFields.push(
        <TextInput
          name={paramName}
          value={this.state.data[paramName] || ""}
          type={paramOptions.type}
          onChange={this.onParamChange}
          label={paramName}
          key={idx}
        />
      );
    });
    return paramsFields;
  };
  render = () => {
    return (
      <div>
        {this.renderParams()}
        <div className="d-flex align-items-center">
          <input type="text" ref="input" />
          <div onClick={this.onAddParamClick} className="btn">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
            </svg>
          </div>
        </div>
        <style jsx>{`
          input {
            display: inline-block;
            border-radius: 10px;
            outline: none;
            border: 1px solid #ccc;
            padding-left: 15px;
          }
          .btn {
            display: inline-block;
          }
          .btn svg {
            width: 30px;
            height: 30px;
          }
        `}</style>
      </div>
    );
  };
}

export default ParamsInput;
