import React, { Component } from "react";
class StyledInput extends Component {
  displayName = "StyledInput";
  state = {
    value: ""
  };
  onChange = e => {
    this.setState({
      value: e.target.value
    });
  };
  render = () => {
    return (
      <div>
        <input
          type="text"
          onChange={this.onChange}
          value={this.state.value}
          placeholder={this.props.placeholder || ""}
        />
        <style jsx>{`
          input {
            border: 0;
            outline: none;
            padding-left: 1em;
            font-size: 1.2em;
            border: 2px solid transparent;
            border-bottom-color: #555;
            margin: 20px 0;
            transition: all .5s ease-in-out;
          }
          input:focus{
            border-bottom-color: #3870c9;
          }
        `}</style>
      </div>
    );
  };
}

export default StyledInput;
