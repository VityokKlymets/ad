import React from "react";

export default (props) => {
  return <div>{React.cloneElement(props.children, props)}</div>;
};
