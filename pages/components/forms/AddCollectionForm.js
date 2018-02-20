import React, { Component } from "react";
import TextInput from "../inputs/TextInput";
import FileInput from "../inputs/FileInput";
import Spinner from "../spinners/Spinner";
import ItemInput from "./ItemInput";
class AddCollectionForm extends Component {
  displayName = "AddCollectionForm";
  state = {
    loading: false,
    data: {
      image: {},
      name: "",
      description: "",
      items: []
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
      this.setState({ loading: true });
      this.props.submit(this.state.data).then(() => {
        this.setState({ loading: false });
      });
    }
  };
  onImageChange = data => {
    this.setState({
      data: { ...this.state.data, image: data[0] }
    });
  };
  onAddItemClick = () => {
    const newItem = {
      name: "",
      description: "",
      tags: [],
      params: {},
      images: []
    };
    this.setState({
      data: {
        ...this.state.data,
        items: [...this.state.data.items, newItem]
      }
    });
  };
  onItemChange = (item, idx) => {
    const items = this.state.data.items.slice();
    items[idx] = item;
    this.setState({
      data: { ...this.state.data, items }
    });
  };
  renderItemsFields = (item, idx) => {
    return (
      <ItemInput
        key={idx}
        item={item}
        onChange={item => this.onItemChange(item, idx)}
      />
    );
  };
  render = () => {
    const { errors, data, loading } = this.state;
    return (
      <div className="row justify-content-center">
        <div className="col-9 pt-4">
          <h3>Add Collection</h3>
          <Spinner loading={loading} transparent>
            <form className="pt-4 pb-5" onSubmit={this.onSubmit}>
              <FileInput
                onChange={this.onImageChange}
                placeholder="Choose collection image"
              />
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
              {data.items.map((item, idx) => {
                return this.renderItemsFields(item, idx);
              })}
              <div className="d-flex justify-content-end">
                <div
                  className="btn btn-secondary"
                  onClick={this.onAddItemClick}
                >
                  add item
                </div>
              </div>
              <button className="btn btn-primary">Add Collection</button>
            </form>
          </Spinner>
        </div>
      </div>
    );
  };
}

export default AddCollectionForm;
