import React, { Component } from "react";
import Spinner from "../spinners/Spinner";
import TextInput from "../inputs/TextInput";
import ItemInput from "./ItemInput";
import Item from '../../class/Item'; 
class AddItemForm extends Component {
  displayName = "AddItemForm";
  state = {
    data: this.props.item || new Item(),
    loading: false,
    errors: {}
  };
  onChange = item => {
    this.setState({
      data: item
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
      this.setState({ loading: true });
      this.props.submit(this.state.data).then(() => {
        this.setState({ loading: false });
      });
    }
  };
  render = () => {
    const { data, errors, loading } = this.state;
    return (
      <div className="row justify-content-center">
        <div className="col-9">
          <Spinner loading={loading} transparent>
            <form onSubmit={this.onSubmit}>
              <ItemInput onChange={this.onChange} item={data}/>
              <button className="btn btn-primary">Add Item</button>
            </form>
          </Spinner>
        </div>
      </div>
    );
  };
}

export default AddItemForm;
