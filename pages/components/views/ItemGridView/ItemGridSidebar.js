import React, { Component } from "react";
import RadioButton from "../../inputs/RadioButton";
import CheckBox from "../../inputs/CheckBox";
import {
  functionalList,
  materialList,
  materialDefault
} from "../../../class/ItemPaginator";
class ItemGridSidebar extends Component {
  displayName = "ItemGridSidebar";
  state = {
    paginator: this.props.paginator
  };
  componentWillReceiveProps = ({paginator}) => this.setState({paginator})
  onPaginatorChange = paginator =>{
      this.setState({paginator})
      this.props.onPaginatorChange(paginator)
  }
  onFunctionalChange = data => {
    this.onPaginatorChange({
      ...this.state.paginator,
      functional: data.name,
      page: {
        ...this.state.paginator.page,
        currentPage: 0
      }
    });
  };
  onMaterialChange = data => {
    this.onPaginatorChange({
      ...this.state.paginator,
      material: data.name,
      page: {
        ...this.state.paginator.page,
        currentPage: 0
      }
    });
  };
  render = () => {
    const { functional, material, type } = this.state.paginator;
    const mList = [materialDefault, ...materialList];
    return (
      <div className="sidebar">
        <div className="d-flex flex-column">
          <span>по функциональности: </span>
          {functionalList.map((fc, idx) => {
            return (
              <RadioButton
                onChange={this.onFunctionalChange}
                label={fc}
                checked={fc === functional}
                name={fc}
                idx={idx}
                key={idx}
              />
            );
          })}
        </div>
        <div className="d-flex flex-column">
          <span>Материал: </span>
          {mList.map((mat, idx) => {
            return (
              <CheckBox
                name={mat}
                checked={material === mat}
                idx={idx}
                key={idx}
                onChange={this.onMaterialChange}
                label={mat}
              />
            );
          })}
        </div>
        <style jsx>{`
          .sidebar {
            width: 100%;
            height: 100%;
            border-right: 1px solid #ccc;
          }
          .sidebar span {
            color: #aaa;
            display: inline-block;
            padding: 0 0 0.5em 1em;
            text-transform: capitalize;
            font-size: 0.8em;
            font-weight: bold;
          }
        `}</style>
      </div>
    );
  };
}

export default ItemGridSidebar;
