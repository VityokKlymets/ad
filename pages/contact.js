import React, { Component } from "react";
import Contact from "./components/posters/Contact";
import Head from "./head/Head";
import TopMenuNavbar from "./components/navbars/TopMenuNavbar";
import page from "./components/page";
import { connect } from "react-redux";
class contact extends Component {
  displayName = "contact";

  render = () => {
    return (
      <div>
        <TopMenuNavbar />
        <Contact />
      </div>
    );
  };
  static async getInitialProps({ req }) {
    return {};
  }
}
export default page(connect(state => state)(contact));
