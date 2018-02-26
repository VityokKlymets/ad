import React, { Component } from "react";
import LeftTopLogo from "../../logos/LeftTopLogo";
import Spinner from "../../spinners/Spinner";
import RightSideMenu from "../../menus/RightSideMenu";
import PaginationArrow from "../../pagination/PaginationArrow";
import ItemGridCatChoser from "./ItemGridCatChoser";
import ItemGridSidebar from "./ItemGridSidebar";
import ItemGridItem from "./ItemGridItem";
class ItemGridView extends Component {
  displayName = "ItemGridView";
  state = {
    items: this.props.items || [],
    paginator: this.props.paginator,
    loading: !!this.props.loading
  };
  componentWillReceiveProps = props => {
    this.setState({
      paginator: props.paginator,
      items: props.items,
      loading: props.loading
    });
  };
  onPageChange = data => {
    this.onPaginatorChange({
      ...this.state.paginator,
      page: {
        ...this.state.paginator.page,
        currentPage: data.index
      }
    });
  };
  onPaginatorChange = paginator => {
    this.setState({
      paginator
    })
    this.props.onPaginatorChange(paginator);
  };

  render = () => {
    const { items } = this.props;
    const { type } = this.state.paginator;
    const { pagesLength, currentPage } = this.state.paginator.page;

    const firstRow = items.slice(0, 4);
    const secondRow = items.slice(4, 8);
    return (
      <div className="view">
        <LeftTopLogo />
        <div className="container-fluid">
          <ItemGridCatChoser
            paginator={this.state.paginator}
            onPaginatorChange={this.onPaginatorChange}
          />

          <div className="row">
            <div className="col-2">
              <ItemGridSidebar
                paginator={this.state.paginator}
                onPaginatorChange={this.onPaginatorChange}
              />
            </div>
            <div className="col-10">
              <Spinner size="medium" type="light" loading={this.state.loading}>
                <div>
                  <div className="row">
                    {firstRow.map((item, idx) => (
                      <ItemGridItem item={item} key={idx} />
                    ))}
                  </div>
                  <div className="row">
                    {secondRow.map((item, idx) => (
                      <ItemGridItem item={item} key={idx} />
                    ))}
                  </div>
                </div>
              </Spinner>
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
