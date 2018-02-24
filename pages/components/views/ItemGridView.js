import React, { Component } from "react";
import RadioButton from "../inputs/RadioButton";
import CheckBox from "../inputs/CheckBox";
import CattegoryMenu from "../menus/CattegoryMenu";
import Link from "next/link";
import Button from "../buttons/HolaBtn";
import LeftTopLogo from "../logos/LeftTopLogo";
import RightSideMenu from "../menus/RightSideMenu";
import {
  functionalList,
  materialList,
  typeList
} from "../../class/ItemPaginator";
import PaginationArrow from "../pagination/PaginationArrow";
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
  onPageChange = data => {
    this.setPaginator({
      ...this.state.paginator,
      page: {
        ...this.state.paginator.page,
        currentPage: data.index
      }
    });
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
    const mList = ["любой", ...materialList];

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
          >
            <div className="btn">
              <Button text="Подробней" invert />
            </div>
            <div className="views d-flex justify-content-end align-items-center">
              <span>{item.views}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
              </svg>
            </div>
          </div>
        </div>
      </Link>

      <style jsx>{`
        .views {
          padding: 5px 10px;
          width: 100%;
          position: absolute;
          left: 0;
          bottom: 0;
        }
        .views span {
          color: #000;
          padding-right: 5px;
        }
        .views svg {
          fill: #000;
        }
        .item-img {
          cursor: pointer;
          height: 200px;
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
          position: relative;
        }
        .btn {
          display: none;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        h3 {
          font-size: 0.9em;
          height: 2.5em;
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
    const { pagesLength, currentPage } = this.state.paginator.page;
    console.log(currentPage);
    const tList = ["все", ...typeList];
    const firstRow = items.slice(0, 4);
    const secondRow = items.slice(4, 8);
    return (
      <div className="view">
        <LeftTopLogo />
        <div className="container-fluid">
          <CattegoryMenu
            elements={tList}
            onChose={this.onTypeChange}
            chosed={type}
          />
          <div className="row">
            <div className="col-2">{this.renderSidebar()}</div>
            <div className="col-10">
              <div className="row">
                {firstRow.map((item, idx) => {
                  return this.renderItem(item, idx);
                })}
              </div>
              <div className="row">
                {secondRow.map((item, idx) => {
                  return this.renderItem(item, idx);
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="arrow">
          {pagesLength > 1 && (
            <PaginationArrow
              onChange={this.onPageChange}
              index={currentPage}
              length={pagesLength}
            />
          )}
        </div>
        <RightSideMenu />
        <style jsx>{`
          .arrow {
            position: absolute;
            width: 100%;
            right: 80px;
            bottom: 20px;
            display: flex;
            justify-content: flex-end;
          }
          .view {
            margin-right: 80px;
          }
        `}</style>
      </div>
    );
  };
}

export default ItemGridView;
