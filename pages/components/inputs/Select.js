import React, { Component } from "react";
class Select extends Component {
  displayName = "Select";
  state = {
    value: this.props.value || ""
  };
  onChange = e => {
    this.setState({
      value: e.target.value
    });
    this.props.onChange({ value: e.target.value, name: this.props.name });
  };
  render = () => {
    const { value } = this.state;
    console.log(value);
    const { list = [], name, label = "Select somth :" } = this.props;
    return (
      <div className="form-group">
        <label ref="input" htmlFor={name}>
          {label}
        </label>
        <select onChange={this.onChange} className="form-control" id={name}>
          {value && <option>{value}</option>}
          {list.map(
            (opn, idx) =>
              opn !== value ? <option key={idx}>{opn}</option> : null
          )}
        </select>
      </div>
    );
  };
}

export default Select;
