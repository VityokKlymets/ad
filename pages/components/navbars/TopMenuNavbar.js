import React, { Component } from "react";
import RightTopFixedMenu from "../menus/RightTopFixedMenu";
import Navbar from "./Navbar";
class TopMenuNavbar extends Component {
  displayName = "TopMenuNavbar";

  render = () => {
    return (
      <div>
        <div className="mobile-menu">
          <RightTopFixedMenu />
        </div>
        <div className="pc-menu">
          <Navbar />
        </div>
        <style jsx>{`
          .mobile-menu {
            position: fixed;
            right: 0;
            top: 0;
            bottom: 0;
            z-index: 1000;
          }
          .pc-menu {
            width: 100%;
          }
          @media (max-width: 768px) {
            .pc-menu {
              display: none;
            }
          }
          @media (min-width: 768px) {
            .mobile-menu {
              display: none;
            }
          }
        `}</style>
      </div>
    );
  };
}

export default TopMenuNavbar;
