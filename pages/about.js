import React, { Component } from "react";
import CollectionsPoster3D from './components/posters/CollectionsPoster3D';
import page from './components/page'
import { connect } from 'react-redux';
class about extends Component{
  displayName = "about";

  render = () => {
   return (<div>
       <CollectionsPoster3D/>
   </div>);
  };
  static async getInitialProps({ req }) {
    return {}
   }
}
export default page(connect(state=>state)(about));