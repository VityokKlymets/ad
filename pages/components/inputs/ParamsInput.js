import React, { Component } from "react";
import TextInput from "./TextInput";
class ParamsInput extends Component {
  displayName = "ParamsInput";
  state = {
    data: {}
  };
  componentDidMount = () => {
    const { params } = this.props;
    const data = {};
    Object.keys(params).forEach((key, idx) => {
      data[key] = "";
    });
    this.setState({
      data
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
    const { params } = this.props;
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
    return <div>{this.renderParams()}</div>;
  };
}

export default ParamsInput;
