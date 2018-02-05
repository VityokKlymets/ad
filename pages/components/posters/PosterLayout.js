import React from "react";
import css from "./styles/posterlayout";
export default props => {
  return (
    <div className="free-space">
      {props.children &&
        React.cloneElement(props.children, {
          ...props,
          ...props.children.props
        })}
      <style jsx>{css}</style>
    </div>
  );
};
