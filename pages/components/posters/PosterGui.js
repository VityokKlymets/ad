import React from "react";
import RightSideMenu from "../menus/RightSideMenu";
import LeftTopLogo from '../logos/LeftTopLogo';
export default ({ invert }) => {
  return (
    <div className={`${invert ? "invert" : ""}`}>
      <LeftTopLogo />
      <RightSideMenu />
    </div>
  );
};
