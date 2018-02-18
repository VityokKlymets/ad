import React, { Component } from "react";
import TextInput from "../inputs/TextInput";
import OptionInput from "../inputs/OptionInput";
import FileInput from "../inputs/FileInput";
import ParamsInput from "../inputs/ParamsInput";
import Spinner from "../spinners/Spinner";
class AddCollectionForm extends Component {
  displayName = "AddCollectionForm";
  state = {
    loading: false,
    data: {
      name: "",
      description: "",
      items: []
    }
  };
  onOptionInput = data => {};
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
  setItems = items => {
    this.setState({
      data: { ...this.state.data, items }
    });
  };
  onItemImageChange = (data, idx) => {
    let items = this.state.data.items.slice();
    items[idx].images = data;
    this.setItems(items);
  };
  onItemDataChange = (e, idx) => {
    let items = this.state.data.items.slice();
    items[idx][e.target.name] = e.target.value;
    this.setItems(items);
  };
  onItemOptionChange = (value, idx) => {
    let items = this.state.data.items.slice();
    items[idx].tags = value;
    this.setItems(items);
  };
  onItemParamsChange = (data, idx) => {
    let items = this.state.data.items.slice();
    items[idx].params = data;
    this.setItems(items);
  };
  renderItemsField = (item, idx) => {
    return (
      <div key={idx}>
        <h3>{`Item ${idx + 1}`}</h3>
        <div className="row">
          <div className="col">
            <FileInput onChange={data => this.onItemImageChange(data, idx)} />
            <ParamsInput
              params={{
                width: { type: "text" },
                height: { type: "text" }
              }}
              onChange={data => {
                this.onItemParamsChange(data, idx);
              }}
            />
          </div>
          <div className="col">
            <TextInput
              value={item.name}
              onChange={e => this.onItemDataChange(e, idx)}
              name="name"
              label="Name"
            />
            <TextInput
              value={item.description}
              onChange={e => this.onItemDataChange(e, idx)}
              name="description"
              label="Description"
              textarea
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div>
              <i>Tags :</i>
            </div>
            <OptionInput
              onChange={({ value }) => {
                this.onItemOptionChange(value, idx);
              }}
              options={[]}
              onInput={this.onOptionInput}
              name="tags"
            />
          </div>
        </div>
      </div>
    );
  };
  render = () => {
    const { errors, data, loading } = this.state;
    return (
      <div className="row justify-content-center">
        <div className="col-8 pt-4">
          <h3>Add Collection</h3>
          <Spinner loading={loading} transparent>
            <form className="pt-4 pb-5" onSubmit={this.onSubmit}>
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
                return this.renderItemsField(item, idx);
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
