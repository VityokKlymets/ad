import React, { Component } from "react";
import CollectionSlideList from "./components/containers/CollectionSlideList";
import TopMenuNavbar from "./components/navbars/TopMenuNavbar";
import MainPreloader from "./components/preloaders/MainPreloader";
import Head from "./head/Head";
class menu extends Component {
  displayName = "menu";

  render = () => {
    return (
      <MainPreloader>
        <div>
          <Head />
          <TopMenuNavbar />
          <CollectionSlideList />
        </div>
      </MainPreloader>
    );
  };
}

export default menu;
