import React from "react";
import RightTopMenu from "../menus/RightTopMenu";
import LeftTopLogo from "../logos/LeftTopLogo";
export default ({ invert }) => {
  return (
    <div className={`${invert ? "invert" : ""}`}>
      <LeftTopLogo />
      <RightTopMenu />
    </div>
  );
};
