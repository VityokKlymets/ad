import React, { Component } from "react";
class TopMenuNavbar extends Component {
  displayName = "TopMenuNavbar";

  render = () => {
    return (
      <div>
        <navbar>
          <a href="/collections">Collections</a>
          <a href="/about">About us</a>
          <a href="/contact">Contact</a>
          <a href="/">Home</a>
        </navbar>
        <style jsx>
          {`
            a {
              text-decoration: none;
              text-transform: uppercase;
              color: #444;
              margin: 0 20px;
            }
            a:hover {
              color: #333;
            }
            navbar {
              position: fixed;
              left: 0;
              top: 0;
              width: 100vw;
              display: flex;
              justify-content: center;
              border-bottom: 1px solid #ccc;
              padding: 20px 0;
              z-index : 10;
            }
          `}
        </style>
      </div>
    );
  };
}

export default TopMenuNavbar;
