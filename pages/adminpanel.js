import React, { Component } from "react";
import AddCollectionForm from "./components/forms/AddCollectionForm";
import AddItemForm from "./components/forms/AddItemForm";
import page from "./components/page";
import NavBar from "./components/navbars/TopMenuNavbar";
import api from "./api/api";
import { connect } from "react-redux";
import Tabs from "./components/containers/Tabs";
import CollectionEditor from "./components/forms/CollectionEditor";
import ItemEditor from "./components/forms/ItemEditor";
class adminpanel extends Component {
  displayName = "adminpanel";
  submit = collection => {
    return api.collections.addCollection(collection);
  };
  addItemSubmit = item =>{
    return api.items.addItem(item);
  }
  render = () => {
    return (
      <div>
        <NavBar />
        <div className="container-fluid">
        <div className='pt-4'>
          <Tabs>
            <AddCollectionForm submit={this.submit} tabName='Add Collection'/>
            <AddItemForm submit={this.addItemSubmit} tabName='Add Item'/>
            <CollectionEditor tabName='Edit collection'/>
            <ItemEditor tabName='Edit Item'/>
          </Tabs>
          </div>
        </div>
      </div>
    );
  };
  static async getInitialProps({ req }) {
    return {};
  }
}

export default page(connect(state => state)(adminpanel));
