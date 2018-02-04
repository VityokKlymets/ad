import React, { Component } from "react";
class Poster extends Component{
  displayName = "Poster";
  render = () => {
   return (<div className='poster'>
    {React.cloneElement(this.props.children,...this.props.children.props)}
   </div>);
  };
}

export default Poster