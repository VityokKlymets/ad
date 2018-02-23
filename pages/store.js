import React, { Component } from "react";
import page from "./components/page";
import { connect } from "react-redux";
import NavBar from "./components/navbars/TopMenuNavbar";
import ItemGridView from "./components/views/ItemGridView";
import api from "./api/api";
import { Paginator } from "./class/ItemPaginator";
class store extends Component {
  displayName = "store";
  state = {
    paginator: new Paginator(),
    items: this.props.items
  };
  onPaginatorChange = paginator => {
    api.items.paginate("", paginator).then(items => {
      this.setState({
        items,
        paginator
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
        />
      </div>
    );
  };
  static async getInitialProps(ctx) {
    const baseUrl = ctx.req
      ? `${ctx.req.protocol}://${ctx.req.get("Host")}`
      : "";
    const paginator = new Paginator();
    const items = await api.items.paginate(baseUrl, paginator);
    return { items };
  }
}
export default page(connect(state => state)(store));
