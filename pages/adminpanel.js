import React, { Component } from "react";
import AddCollectionForm from "./components/forms/AddCollectionForm";
import page from "./components/page";
import NavBar from "./components/navbars/TopMenuNavbar";
import api from "./api/api";
import { connect } from "react-redux";
class adminpanel extends Component {
  displayName = "adminpanel";
  submit = collection => {
    return api.collections.addCollection(collection);
  };
  render = () => {
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          <AddCollectionForm submit={this.submit} />
        </div>
      </div>
    );
  };
}

export default page(connect(state => state)(adminpanel));
