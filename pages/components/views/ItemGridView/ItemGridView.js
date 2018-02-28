import React, { Component } from "react";
import LeftTopLogo from "../../logos/LeftTopLogo";
import Spinner from "../../spinners/Spinner";
import RightSideMenu from "../../menus/RightSideMenu";
import PaginationArrow from "../../pagination/PaginationArrow";
import ItemGridCatChoser from "./ItemGridCatChoser";
import ItemGridSidebar from "./ItemGridSidebar";
import ItemGridItem from "./ItemGridItem";
import RightTopMenu from "../../menus/RightTopMenu";
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
    });
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
        <div className="logo">
          <LeftTopLogo />
        </div>
        <div className="container-fluid">
          <ItemGridCatChoser
            paginator={this.state.paginator}
            onPaginatorChange={this.onPaginatorChange}
          />

          <div className="row align-items-center">
            <div className="col-md-2 col-sm-12 align-self-start">
              <ItemGridSidebar
                paginator={this.state.paginator}
                onPaginatorChange={this.onPaginatorChange}
              />
            </div>
            <div className="col-md-10 col-sm-12">
              <Spinner size="medium" type="light" loading={this.state.loading}>
                <div>
                  <div className="row align-items-center">
                    {firstRow.map((item, idx) => (
                      <ItemGridItem item={item} key={idx} />
                    ))}
                  </div>
                  <div className="row align-items-center">
                    {secondRow.map((item, idx) => (
                      <ItemGridItem item={item} key={idx} />
                    ))}
                  </div>
                </div>
              </Spinner>
              <div className="arrow align-self-end">
                {pagesLength > 1 && (
                  <PaginationArrow
                    onChange={this.onPageChange}
                    index={currentPage}
                    length={pagesLength}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="menu">
          <RightSideMenu />
        </div>
        <div className="mobile-menu">
          <RightTopMenu />
        </div>
        <style jsx>{`
          .arrow {
            padding: 10px 0;
            display: flex;
            justify-content: flex-end;
          }
          .view {
            margin-right: 80px;
          }
          .mobile-menu {
            display: none;
          }
          @media (max-width: 768px) {
            .view {
              margin-right: 0px;
            }
            .logo {
              display: none;
            }
            .menu {
              display: none;
            }
            .mobile-menu {
              display: block;
            }
          }
        `}</style>
      </div>
    );
  };
}

export default ItemGridView;
