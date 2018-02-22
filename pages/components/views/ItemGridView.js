import React, { Component } from "react";
import RadioButton from "../inputs/RadioButton";
import CheckBox from "../inputs/CheckBox";
import CattegoryMenu from "../menus/CattegoryMenu";
class ItemGridView extends Component {
  displayName = "ItemGridView";
  state = {
    items: this.props.items || []
  };
  onRadioButtonChange = data => {
    console.log(data);
  };
  onCheckBoxChange = data => {
    console.log(data);
  };
  render = () => {
    return (
      <div>
        <CattegoryMenu />
        <div className="sidebar">
          <div className='d-flex flex-column'>
            <span>по функциональности: </span>
            <RadioButton
              onChange={this.onRadioButtonChange}
              label="Трансформеры"
              name="func"
              idx={1}
            />
            <RadioButton
              onChange={this.onRadioButtonChange}
              label="Обычный"
              name="func"
              idx={2}
            />
          </div>
          <div className='d-flex flex-column'>
            <span>Материал: </span>
            <CheckBox onChange={this.onCheckBoxChange} label="Дерево" />
          </div>
          <style jsx>{`
            .sidebar {
              width: 220px;
              padding: 20px;
              border-right: 1px solid #ccc;
            }
            .sidebar span {
              color: #aaa;
              display: inline-block;
              padding: 0 0 0.5em 1em;
              text-transform: capitalize;
              font-size: .8em;
              font-weight: bold;
            }
          `}</style>
        </div>
      </div>
    );
  };
}

export default ItemGridView;
