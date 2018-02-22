import React, { Component } from "react";
import page from "./components/page";
import { connect } from "react-redux";
import NavBar from "./components/navbars/TopMenuNavbar";
import ItemGridView from "./components/views/ItemGridView";
import api from "./api/api";
class store extends Component {
  displayName = "store";
  render = () => {
    return (
      <div>
        <ItemGridView items={this.props.items}/>
      </div>
    );
  };
  static async getInitialProps(ctx) {
    const baseUrl = ctx.req
      ? `${ctx.req.protocol}://${ctx.req.get("Host")}`
      : "";
    const paginator = {
      type: "all"
    };
    const items = await api.items.paginate(baseUrl, paginator)
    return {items};
  }
}
export default page(connect(state => state)(store));
