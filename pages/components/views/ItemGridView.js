import React, { Component } from "react";
import RadioButton from "../inputs/RadioButton";
import CheckBox from "../inputs/CheckBox";
import CattegoryMenu from "../menus/CattegoryMenu";
import Link from "next/link";
import LeftTopLogo from "../logos/LeftTopLogo";
import RightSideMenu from "../menus/RightSideMenu";
import {
  functionalList,
  materialList,
  typeList
} from "../../class/ItemPaginator";
class ItemGridView extends Component {
  displayName = "ItemGridView";
  state = {
    items: this.props.items || [],
    paginator: this.props.paginator
  };
  componentWillReceiveProps = props => {
    this.setState({
      paginator: props.paginator,
      items: props.items
    });
  };
  setPaginator = paginator => {
    this.setState(
      {
        paginator
      },
      this.onPaginatorChange(paginator)
    );
  };
  onTypeChange = value => {
    this.setPaginator({
      ...this.state.paginator,
      type: value
    });
  };
  onFunctionalChange = data => {
    this.setPaginator({ ...this.state.paginator, functional: data.name });
  };
  onMaterialChange = data => {
    this.setPaginator({ ...this.state.paginator, material: data.name });
  };
  onPaginatorChange = paginator => {
    this.props.onPaginatorChange(paginator);
  };
  renderSidebar = () => {
    const { functional, material, type } = this.state.paginator;
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
          {materialList.map((mat, idx) => {
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
  renderItem = (item, idx) => (
    <div key={idx} className="col-3 item">
      <Link href={{ pathname: "/item", query: { id: item._id } }}>
        <div>
          <h3>{item.name}</h3>
          <div
            className="item-img"
            style={{
              backgroundImage: `url(${item.images[0]})`
            }}
          />
        </div>
      </Link>
      <style jsx>{`
        .item-img {
          height: 200px;
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
        }
        h3 {
          font-size: 0.9em;
          border-bottom: 1px solid #ccc;
          text-align: center;
          color: #777;
          font-weight: bold;
        }
      `}</style>
    </div>
  );
  render = () => {
    const { items } = this.props;
    const { type } = this.state.paginator;
    return (
      <div className="view">
        <LeftTopLogo />
        <div className="container-fluid">
          <CattegoryMenu
            elements={typeList}
            onChose={this.onTypeChange}
            chosed={type}
          />
          <div className="row">
            <div className="col-2">{this.renderSidebar()}</div>
            <div className="col-10">
              <div className="row">
                {items.map((item, idx) => {
                  return this.renderItem(item, idx);
                })}
              </div>
            </div>
          </div>
        </div>
        <RightSideMenu />
        <style jsx>{`
          .view {
            margin-right: 80px;
          }
        `}</style>
      </div>
    );
  };
}

export default ItemGridView;
