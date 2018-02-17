import React, { Component } from "react";
import CollectionSlideList from "./components/containers/CollectionSlideList";
import TopMenuNavbar from "./components/navbars/TopMenuNavbar";
import MainPreloader from "./components/preloaders/MainPreloader";
import page from './components/page';
import { connect } from 'react-redux';
class collections extends Component {
  displayName = "menu";

  render = () => {
    return (
      <MainPreloader>
        <div>
          <TopMenuNavbar />
          <CollectionSlideList />
        </div>
      </MainPreloader>
    );
  };
}
export default page(connect(state=>state)(collections));