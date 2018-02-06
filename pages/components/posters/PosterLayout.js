import React from "react";
export default props => {
  return (
    <div className="free-space">
      {props.children &&
        React.cloneElement(props.children, {
          ...props,
          ...props.children.props
        })}
      <style jsx>{`
        .free-space {
          position: absolute;
          bottom: 10%;
          top: 10%;
          left: 5%;
          right: 11%;
          z-index: 2;
        }
      `}</style>
    </div>
  );
};
