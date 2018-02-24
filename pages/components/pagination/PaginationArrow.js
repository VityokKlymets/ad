import React, { Component } from "react";
class PaginationArrow extends Component {
  displayName = "PaginationArrow";
  state = {
    index: this.props.index === undefined ? 1 : this.props.index,
    length: this.props.length || 5
  };
  componentWillReceiveProps = props => {
    this.setState({
      index: props.index,
      length: props.length
    });
  };
  onChange = data => {
    if (this.props.onChange) {
      this.props.onChange(data);
    }
  };
  setIndex = index => {
    this.setState({
      index
    });
    this.onChange({
      index,
      length: this.state.length
    });
  };
  onRClick = () => {
    let index =
      this.state.index + 1 <= this.state.length - 1
        ? this.state.index + 1
        : this.state.index;
    this.setIndex(index);
  };
  onLClicl = () => {
    let index =
      this.state.index - 1 >= 0 ? this.state.index - 1 : this.state.index;
    this.setIndex(index);
  };

  render = () => {
    const { index, length } = this.state;
    const leftState = index === 0 ? "disabled" : "";
    const rightState = index === length-1 ? "disabled" : "";
    return (
      <div className="wrap">
        <button
          data-state={leftState}
          onClick={this.onLClicl}
          className="paginate left"
        >
          <i />
          <i />
        </button>
        <div className="counter">{`${index + 1}/${length}`}</div>
        <button
          data-state={rightState}
          onClick={this.onRClick}
          className="paginate right"
        >
          <i />
          <i />
        </button>
        <style jsx>{`
          .wrap {
            width: 250px;
            justify-content: space-around;
            display: flex;
          }
          button {
            -webkit-appearance: none;
            background: transparent;
            border: 0;
            outline: 0;
          }
          .paginate {
            position: relative;
            width: 50px;
            height: 50px;
            cursor: pointer;
            transform: translate3d(0, 0, 0);
          }
          .paginate i {
            position: absolute;
            top: 40%;
            left: 0;
            width: 30px;
            height: 5px;
            border-radius: 2.5px;
            background: #000;
            transition: all 0.15s ease;
          }
          .paginate.left i {
            transform-origin: 0% 50%;
          }
          .paginate.left i:first-child {
            transform: translate(0, -1px) rotate(40deg);
          }
          .paginate.left i:last-child {
            transform: translate(0, 1px) rotate(-40deg);
          }
          .paginate.left:hover i:first-child {
            transform: translate(0, -1px) rotate(30deg);
          }
          .paginate.left:hover i:last-child {
            transform: translate(0, 1px) rotate(-30deg);
          }
          .paginate.left:active i:first-child {
            transform: translate(1px, -1px) rotate(25deg);
          }
          .paginate.left:active i:last-child {
            transform: translate(1px, 1px) rotate(-25deg);
          }
          .paginate.left[data-state="disabled"] i:first-child {
            transform: translate(-5px, 0) rotate(0deg);
          }
          .paginate.left[data-state="disabled"] i:last-child {
            transform: translate(-5px, 0) rotate(0deg);
          }
          .paginate.left[data-state="disabled"]:hover i:first-child {
            transform: translate(-5px, 0) rotate(0deg);
          }
          .paginate.left[data-state="disabled"]:hover i:last-child {
            transform: translate(-5px, 0) rotate(0deg);
          }
          .paginate.right i {
            transform-origin: 100% 50%;
          }
          .paginate.right i:first-child {
            transform: translate(0, 1px) rotate(40deg);
          }
          .paginate.right i:last-child {
            transform: translate(0, -1px) rotate(-40deg);
          }
          .paginate.right:hover i:first-child {
            transform: translate(0, 1px) rotate(30deg);
          }
          .paginate.right:hover i:last-child {
            transform: translate(0, -1px) rotate(-30deg);
          }
          .paginate.right:active i:first-child {
            transform: translate(1px, 1px) rotate(25deg);
          }
          .paginate.right:active i:last-child {
            transform: translate(1px, -1px) rotate(-25deg);
          }
          .paginate.right[data-state="disabled"] i:first-child {
            transform: translate(5px, 0) rotate(0deg);
          }
          .paginate.right[data-state="disabled"] i:last-child {
            transform: translate(5px, 0) rotate(0deg);
          }
          .paginate.right[data-state="disabled"]:hover i:first-child {
            transform: translate(5px, 0) rotate(0deg);
          }
          .paginate.right[data-state="disabled"]:hover i:last-child {
            transform: translate(5px, 0) rotate(0deg);
          }
          .paginate[data-state="disabled"] {
            opacity: 0.3;
            cursor: default;
          }

          .counter {
            text-align: center;
            font-size: 30px;
            font-family: Helvetica, sans-serif;
            text-shadow: 0px 2px 0px rgba(0, 0, 0, 0.2);
            color: #000;
          }
        `}</style>
      </div>
    );
  };
}

export default PaginationArrow;
