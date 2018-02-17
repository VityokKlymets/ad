import React, { Component } from "react";
import Spinner from "../spinners/Spinner";

class OptionInput extends Component {
  state = {
    value: "",
    options: this.props.options,
    selectedOptions: [],
    editMode: false,
    error: this.props.error,
    loading: !!this.props.loading,
    placeholder: this.props.placeholder
      ? this.props.placeholder
      : "select option"
  };
  componentWillReceiveProps = props => {
    this.setState({
      value: this.state.value,
      options: props.options,
      selectedOptions: this.state.selectedOptions,
      editMode: this.state.editMode,
      loading: props.loading,
      error: props.error,
      placeholder: props.placeholder
    });
  };
  onDeleteClick = idx => {
    let selectedOptions = this.state.selectedOptions.filter((value, index) => {
      return index !== idx;
    });
    this.setState({
      selectedOptions
    });
  };
  onAddClick = () => {
    this.state.value
      ? this.setState(
          {
            editMode: false,
            selectedOptions: [...this.state.selectedOptions, this.state.value],
            value: ""
          },
          () => {
            this.props.onChange({
              value: this.state.selectedOptions,
              name: this.props.name
            });
          }
        )
      : this.setState(
          {
            editMode: true
          },
          () => {
            this.refs.input.autofocus = true;
          }
        );
  };
  onChange = e => {
    const value = e.target.value;
    this.setState(
      {
        value
      },
      () => {
        this.props.onInput({
          name: this.props.name,
          value
        });
      }
    );
  };
  render() {
    const {
      editMode,
      options,
      selectedOptions,
      value,
      loading,
      error,
      placeholder
    } = this.state;
    return (
      <div>
        <div className={`OptionInput ${error ? "error" : ""}`}>
          {editMode ? (
            <div>
              <input
                ref="input"
                className="form-control"
                type="text"
                placeholder={placeholder}
                value={value}
                onChange={this.onChange}
              />
              <div className="finded-options">
                {options.map((elem, idx) => {
                  return (
                    <div
                      className="finded-option"
                      key={idx}
                      onClick={() => {
                        this.setState(
                          {
                            editMode: false,
                            selectedOptions: [...selectedOptions, elem],
                            value: ""
                          },
                          () => {
                            this.props.onChange({
                              value: this.state.selectedOptions,
                              name: this.props.name
                            });
                          }
                        );
                      }}
                    >
                      {elem}
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="selected-options">
              {selectedOptions.map((option, idx) => {
                return (
                  <div className="option-wrapper" key={idx}>
                    <span className="option">{option}</span>
                    <span
                      className="option-delete"
                      onClick={() => {
                        this.onDeleteClick(idx);
                      }}
                    >
                      {" "}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                      </svg>
                    </span>
                  </div>
                );
              })}
            </div>
          )}
          <div className="control">
            {loading ? (
              <Spinner loading={loading} transparent />
            ) : (
              <div onClick={this.onAddClick} className="btn-add">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                </svg>
              </div>
            )}
          </div>
        </div>
        <style jsx>{`
          .OptionInput {
            position: relative;
            min-height: 40px;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin: 10px 0;
          }
          .OptionInput.error {
            border-color: rgb(90, 23, 23);
          }
          .OptionInput input,
          .OptionInput div.selected-options {
            position: absolute;
            left: 0;
            top: 0;
            right: 40px;
            z-index: 0;
            overflow: hidden;
          }
          .OptionInput input:focus {
            box-shadow: none;
            border: 0;
            outline: none;
          }
          .OptionInput .control {
            border-left: 1px solid #ccc;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            width: 40px;
          }
          .OptionInput .btn-add svg {
            cursor: pointer;
            height: 100%;
            width: 100%;
          }
          .OptionInput input {
            border: 0;
          }
          .OptionInput .finded-options {
            background: #fff;
            position: absolute;
            z-index: 10;
            left: 1%;
            top: 101%;
            text-transform: uppercase;
          }
          .OptionInput .finded-option {
            text-transform: capitalize;
            cursor: pointer;
            padding: 5px 30px;
            border-left: 2px solid rgb(133, 50, 50);
            border-bottom: 1px solid #ccc;
          }
          .OptionInput .finded-option + .finded-option {
            border-left-color: rgb(30, 92, 92);
          }
          .OptionInput .finded-option:hover {
            background: rgba(211, 226, 188, 0.671);
          }
          .OptionInput .option-wrapper {
            display: inline-block;
          }
          .OptionInput span {
            display: inline-block;
            line-height: 40px;
            text-transform: capitalize;
            margin-left: 5px;
          }

          .OptionInput span.option-delete {
            cursor: pointer;
            border: 1px solid #ddd;
            background-size: cover;
            border-radius: 50%;
            transform: rotateZ(-45deg);
            width: 25px;
            height: 25px;
          }
        `}</style>
      </div>
    );
  }
}

export default OptionInput;
