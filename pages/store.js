import React, { Component } from "react";
import page from "./components/page";
import { connect } from "react-redux";
import NavBar from "./components/navbars/TopMenuNavbar";
import ItemGridView from "./components/views/ItemGridView/ItemGridView";
import api from "./api/api";
import { Paginator } from "./class/ItemPaginator";
class store extends Component {
  displayName = "store";
  state = {
    paginator: this.props.paginator,
    items: this.props.items,
    loading: false
  };
  onPaginatorChange = paginator => {
    this.setState({
      loading: true
    });
    api.items.paginate("", paginator).then(res => {
      this.setState({
        items: res.items,
        paginator: res.paginator,
        loading: false
      });
    });
  };
  render = () => {
    return (
      <div>
        <ItemGridView
          onPaginatorChange={this.onPaginatorChange}
          items={this.state.items}
          paginator={this.state.paginator}
          loading={this.state.loading}
        />
      </div>
    );
  };
  static async getInitialProps(ctx) {
    const baseUrl = ctx.req
      ? `${ctx.req.protocol}://${ctx.req.get("Host")}`
      : "";
    const reqPagin = new Paginator();
    const responce = await api.items.paginate(baseUrl, reqPagin);

    const items = responce.items;
    const paginator = responce.paginator;
    return { items, paginator };
  }
}
export default page(connect(state => state)(store));
