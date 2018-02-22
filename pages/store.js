import React, { Component } from "react";
import page from "./components/page";
import { connect } from "react-redux";
import NavBar from "./components/navbars/TopMenuNavbar";
import ItemGridView from "./components/views/ItemGridView";
class store extends Component {
  displayName = "store";
  render = () => {
    return (
      <div>
        <ItemGridView />
      </div>
    );
  };
  static async getInitialProps({ req }) {
    return {};
  }
}
export default page(connect(state => state)(store));
