import React, { Component } from "react";
import TextInput from "../inputs/TextInput";
import OptionInput from "../inputs/OptionInput";
import FileInput from "../inputs/FileInput";
import ParamsInput from "../inputs/ParamsInput";
class ItemInput extends Component {
  displayName = "ItemInput";
  state = {
    item: this.props.item
  };
  onChange = item => {
    this.props.onChange(item);
  };
  onOptionInput = () => {};
  setItem = item => {
    this.setState({
      item
    });
    this.props.onChange(this.state.item);
  };
  onItemImageChange = data =>
    this.setItem({ ...this.state.item, images: data });
  onItemOptionChange = data => this.setItem({ ...this.state.item, tags: data });
  onItemParamsChange = data =>
    this.setItem({ ...this.state.item, params: data });
  onItemDataChange = e =>
    this.setItem({ ...this.state.item, [e.target.name]: e.target.value });
  render = () => {
    const { item } = this.state;
    return (
      <div>
        <h3>{item.name}</h3>
        <div className="row">
          <div className="col">
            <FileInput onChange={this.onItemImageChange} />
            <ParamsInput
              params={{
                width: { type: "text" },
                height: { type: "text" }
              }}
              onChange={this.onItemParamsChange}
            />
          </div>
          <div className="col">
            <TextInput
              value={item.name}
              onChange={this.onItemDataChange}
              name="name"
              label="Name"
            />
            <TextInput
              value={item.description}
              onChange={this.onItemDataChange}
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
              onChange={this.onItemOptionChange}
              options={[]}
              onInput={this.onOptionInput}
              name="tags"
            />
          </div>
        </div>
      </div>
    );
  };
}

export default ItemInput;
