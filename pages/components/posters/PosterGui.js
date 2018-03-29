import React from "react";
import RightTopFixedMenu from "../menus/RightTopFixedMenu";
import LeftTopLogo from "../logos/LeftTopLogo";
export default ({ invert }) => {
  return (
    <div className={`${invert ? "invert" : ""}`}>
      <div className="logo">
        <LeftTopLogo />
      </div>
      <div className="mobile-menu">
        <RightTopFixedMenu />
      </div>
      <style jsx>{`
        .mobile-menu {
          position: fixed;
          right: 0;
          top: 0;
          bottom: 0;
        }
        @media (max-width: 768px) {
          .logo {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
