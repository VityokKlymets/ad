import React, { Component } from "react";
import TextInput from "../inputs/TextInput";
import OptionInput from "../inputs/OptionInput";
import FileInput from "../inputs/FileInput";
import ParamsInput from "../inputs/ParamsInput";
import Item from "../../class/Item";
import Select from "../inputs/Select";
import {
  functionalList,
  typeList,
  materialList
} from "../../class/ItemPaginator";
class ItemInput extends Component {
  displayName = "ItemInput";
  state = {
    item: this.props.item || new Item(),
    errors: this.props.errors || {}
  };
  onChange = item => {
    this.props.onChange(item);
  };
  setItem = item => {
    this.setState({
      item
    });
    this.onChange(item);
  };
  onItemImageChange = data =>
    this.setItem({ ...this.state.item, images: data });
  onItemParamsChange = data => {
    this.setItem({ ...this.state.item, params: { ...data } });
  };
  onItemDataChange = e =>
    this.setItem({ ...this.state.item, [e.target.name]: e.target.value });
  onSelectChange = data => {
    this.setItem({
      ...this.state.item,
      [data.name]: data.value
    });
  };
  render = () => {
    const { item, errors } = this.state;
    console.log(item);
    const { idx = 0 } = this.props;
    return (
      <div>
        <h3>{item.name}</h3>
        <div className="row">
          <div className="col">
            <FileInput
              onChange={this.onItemImageChange}
              name={"file-loader-" + idx.toString()}
            />
            <ParamsInput
              params={item.params}
              onChange={this.onItemParamsChange}
            />
          </div>
          <div className="col">
            <TextInput
              value={item.name}
              onChange={this.onItemDataChange}
              name="name"
              label="Name"
              error={errors.name}
            />
            <TextInput
              value={item.description}
              onChange={this.onItemDataChange}
              name="description"
              label="Description"
              textarea
              error={errors.description}
            />
            <Select
              list={materialList}
              value={item.material}
              name="material"
              label="choose material"
              onChange={this.onSelectChange}
            />
            <Select
              list={functionalList}
              value={item.functional}
              name="functional"
              label="choose functional"
              onChange={this.onSelectChange}
            />
            <Select
              list={typeList}
              value={item.type}
              name="type"
              label="choose category"
              onChange={this.onSelectChange}
            />
          </div>
        </div>
      </div>
    );
  };
}

export default ItemInput;
