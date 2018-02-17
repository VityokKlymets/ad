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
}
export default page(connect(state=>state)(about));