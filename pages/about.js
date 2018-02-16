import React, { Component } from "react";
import CollectionsPoster3D from './components/posters/CollectionsPoster3D';
import Head  from './head/Head'
class about extends Component{
  displayName = "about";

  render = () => {
   return (<div>
       <Head/>
       <CollectionsPoster3D/>
   </div>);
  };
}

export default about