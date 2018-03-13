import React, { Component } from "react";
import TextInput from "../inputs/TextInput";
import StyledInput from "../inputs/StyledInput";
import MaskedInput from "react-maskedinput";
class OrderForm extends Component {
  displayName = "OrderForm";
  state = {
    data: {
      name: "",
      phone: "380"
    },
    errors: {}
  };
  submit = e => {
    e.preventDefault();
    this.setState({
      errors: this.validate(this.state.data)
    });
    if (Object.keys(this.state.errors).length !== 0) {
      this.props.submit(this.state.data);
    }
  };
  validate = data => {
    const errors = {};
    return errors;
  };
  onNameChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        name: e.target.value
      }
    });
  };
  onPhoneChange = e => {
    this.setState({
      data: {
        ...this.state.data,
        phone: e.target.value
      }
    });
  };
  render = () => {
    const { data } = this.state;

    return (
      <div>
        <form onSubmit={this.submit}>
          <input
            type="text"
            onChange={this.onNameChange}
            value={data.name}
            placeholder="Имя"
          />
          <MaskedInput
            value={data.phone}
            mask="111 11 1111 111"
            name="phone"
            placeholder="+38"
            onChange={this.onPhoneChange}
          />
          <button>Отправить</button>
        </form>
        <style>
          {`
            form{
              text-align: center;
              background: rgba(255,255,255,.8);
              border-radius: 20px;
              padding: 20px;
            }
            input {
              text-align: center;
              border-top-left-radius: 5px;
              border-top-right-radius: 5px;
              width: 300px;
              display: block;
              border: 0;
              outline: none;
              font-size: 1.2em;
              border: 2px solid transparent;
              border-bottom-color: #555;
              margin: 20px 0;
              transition: all .5s ease-in-out;
            }
            input:focus{
              border-bottom-color: #3870c9;
            }
            button {
              margin: 10px 0;
              cursor: pointer;
              background: #fff;
              border: 2px solid #444;
              outline: none;
              padding: .5em 1em;
              text-transform: uppercase;
              font-weight: bold;
              transition: all .2s linear; }
              button:hover {
                color: #fff;
                border-color: #000;
                background: #444; }
          `}
        </style>
      </div>
    );
  };
}

export default OrderForm;
