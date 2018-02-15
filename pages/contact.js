import React, { Component } from "react";
import Contact from "./components/posters/Contact";
import Head from "./head/Head";
import TopMenuNavbar from "./components/navbars/TopMenuNavbar";
class contact extends Component {
  displayName = "contact";

  render = () => {
    return (
      <div>
        <Head title="contact" />
        <TopMenuNavbar />
        <Contact />
      </div>
    );
  };
}

export default contact;
