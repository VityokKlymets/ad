import React, { Component } from "react";
import CollectionSlideList from "./components/containers/CollectionSlideList";
class menu extends Component {
  displayName = "menu";

  render = () => {
    return (
      <div>
        <div className="menu">
          <navbar>
            <a href="/collections">Collections</a>
            <a href="/about">About us</a>
            <a href="/contact">Contact</a>
            <a href="/">Home</a>
          </navbar>
          <CollectionSlideList />
        </div>
        <style jsx>
          {`
            a {
              text-decoration: none;
              text-transform: uppercase;
              color: #444;
              margin : 0 20px;
            }
            a:hover {
              color: #333;
            }
            navbar {
              display: flex;
              justify-content:center;
              border-bottom : 1px solid #ccc;
              padding : 20px 0;
            }
          `}
        </style>
      </div>
    );
  };
}

export default menu;
