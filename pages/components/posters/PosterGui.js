import React from "react";
import RightTopMenu from "../menus/RightTopMenu";
import LeftTopLogo from "../logos/LeftTopLogo";
export default ({ invert }) => {
  return (
    <div className={`${invert ? "invert" : ""}`}>
      <div className="logo">
        <LeftTopLogo />
      </div>
      <RightTopMenu />
      <style jsx>{`
        @media (max-width: 768px) {
          .logo {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};
