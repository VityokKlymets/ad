import React, { Component } from "react";
import page from "./components/page";
import { connect } from "react-redux";
import OrderForm from "./components/forms/OrderForm";
import { orderComplete } from "./actions/order";
class order extends Component {
  state = {
    message: {
      text: "",
      type: "",
      active: false
    },
    order: this.props.order
  };
  setMessage = message => {
    this.setState({
      message: { ...message, active: true }
    });
  };
  componentDidMount = () => {
    if (this.state.order.items.length === 0) {
      this.setMessage({
        text: "Вы ничего не купили",
        type: "negative"
      });
    }
  };
  componentWillUpdate = (prev, next) => {
    if (next.message.active) {
      this.interval = setTimeout(() => {
        this.setState({
          message: { ...this.state.message, active: false }
        });
      }, 3000);
    }
  };
  displayName = "order";
  submit = data => {
    this.setState({
      order: {
        ...this.state.order,
        name: data.name,
        phone: data.phone
      }
    });
    this.props.orderComplete(this.state.order);
  };
  render = () => {
    const { message } = this.state;
    return (
      <div className="main-wrap d-flex justify-content-center flex-column">
        {message.text && (
          <div
            className={`message ${message.type} ${
              message.active ? "active" : ""
            }`}
          >
            {message.text}
          </div>
        )}
        <div className="wrapper">
          <div className="form">
            <OrderForm submit={this.submit} />
          </div>
        </div>
        <style jsx>{`
          .main-wrap {
            height: 100vh;
            background: url("/static/images/spiration-light.png");
          }
          .wrapper {
            box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.2) inset,
              0px 4px 10px rgba(0, 0, 0, 0.2) inset;
            background: rgba(255, 255, 255, 0.2);
            padding: 25px 0;
            display: flex;
            justify-content: center;
          }
          .form {
            animation: slideIn 1s ease-in-out 1;
          }
          .message {
            position: fixed;
            left: 0;
            top: 0;
            width: 100%;
            text-align: center;
            font-weight: bold;
            background: #fff;
            border: 2px solid #444;
            font-size: 1.2em;
            padding: 10px 0;
            border-bottom-right-radius: 5px;
            border-bottom-left-radius: 5px;
            animation: fadeOut 1s ease-in-out 1;
            transition: transform 0.5s ease-in-out;
            transform: translateY(-100%);
          }
          .message.active {
            transform: translateY(0);
          }
          .message.correct {
            color: #1e631d;
          }
          .message.negative {
            color: #631c1c;
          }
          @keyframes slideIn {
            from {
              transform: translate(200%);
              opacity: 0;
            }
            to {
              transform: translate(0%);
              opacity: 1;
            }
          }
        `}</style>
      </div>
    );
  };
}
const mapStateToProps = state => ({
  order: state.order
});
export default page(connect(mapStateToProps, { orderComplete })(order));
