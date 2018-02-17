import React, { Component } from "react";
import AddCollectionForm from "./components/forms/AddCollectionForm";
import page from "./components/page";
import NavBar from "./components/navbars/TopMenuNavbar";
import { connect } from "react-redux";
class adminpanel extends Component {
  displayName = "adminpanel";

  render = () => {
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
          <AddCollectionForm />
        </div>
      </div>
    );
  };
}

export default page(connect(state => state)(adminpanel));
