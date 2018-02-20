import React, { Component } from "react";
import page from "./components/page";
import NavBar from "./components/navbars/TopMenuNavbar";
import CollectionSlideList from "./components/containers/CollectionSlideList";
import api from "./api/api";
import { connect } from "react-redux";
class collection extends Component {
  displayName = "collection";
  render = () => {
    return (
      <div>
        <NavBar />
        <CollectionSlideList collection={this.props.collection} />
      </div>
    );
  };
  static async getInitialProps(ctx) {
    const baseUrl = ctx.req
      ? `${ctx.req.protocol}://${ctx.req.get("Host")}`
      : "";
    const id = ctx.query.id;
    if (id)
      return api.collections.get(baseUrl, id).then(collection => ({
        collection
      }));
    else return {};
  }
}
export default page(connect(state => state)(collection));
