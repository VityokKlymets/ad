import React, { Component } from "react";
class MainPreloader extends Component {
  displayName = "MainPreloader";
  state = {
    loading: false
  };
  getImages = () => {
    // console.log(window);
    // const result = document.querySelectorAll("img");
    // console.log(result);
  };
  render = () => {
    const { children } = this.props;
    const { loading } = this.state;
    this.getImages();
    return (
      <div>
        {loading && <div className="MainPreloader" />}
        {React.cloneElement(children, { ...children.props })}
      </div>
    );
  };
}

export default MainPreloader;
