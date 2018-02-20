import React, { Component } from "react";
import AddCollectionForm from "./components/forms/AddCollectionForm";
import page from "./components/page";
import NavBar from "./components/navbars/TopMenuNavbar";
import api from "./api/api";
import { connect } from "react-redux";
import Tabs from "./components/containers/Tabs";

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
          <Tabs>
            <AddCollectionForm submit={this.submit} tabName='Add Collection'/>
            <AddCollectionForm submit={this.submit} tabName='Add Item'/>
          </Tabs>
        </div>
      </div>
    );
  };
  static async getInitialProps({ req }) {
    return {};
  }
}

export default page(connect(state => state)(adminpanel));
