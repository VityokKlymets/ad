import React, { Component } from "react";
import TextInput from "../inputs/TextInput";
class AddCollectionForm extends Component {
  displayName = "AddCollectionForm";
  state = {
    data: {
      name: "",
      description: ""
    }
  };
  onChange = e => {
    this.setState({
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  };
  validate = data => {
    const errors = {};

    return errors;
  };
  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state.data);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.submit(this.state.data);
    }
  };
  render = () => {
    const { errors, data } = this.state;
    return (
      <div className="row justify-content-center">
        <div className="col-8">
          <form className='pt-4' onSubmit={this.onSubmit}>
            <TextInput
              value={data.name}
              onChange={this.onChange}
              name="name"
              label="Name"
            />
             <TextInput
              value={data.description}
              onChange={this.onChange}
              name="description"
              label="Description"
              textarea
            />
            <button className="btn btn-primary">Add</button>
          </form>
        </div>
      </div>
    );
  };
}

export default AddCollectionForm;
