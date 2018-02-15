import React from "react";

export default () => {
  return (
    <div className="menu">
      <a href="/collections">
        <div className="menu-icon">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
          </svg>
        </div>
      </a>
      <style jsx>{`
        .menu {
          position: absolute;
          top: 0;
          bottom: 0;
          right: 0;
          width: 6%;
          border-left: 1px solid rgb(37, 52, 95);
          display: flex;
          flex-direction: column;
          background: #fff;
          z-index: 3;
        }
        .menu .menu-icon {
          cursor: pointer;
          padding: 20px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          border-bottom: 1px solid rgb(37, 52, 95);
          background: #fff;
        }
        .menu .menu-icon:hover {
          background: rgb(37, 52, 95);
        }
        .menu .menu-icon:hover svg {
          fill: #fff;
        }
        .menu .menu-icon svg {
          width: 30px;
          height: 30px;
          fill: rgb(37, 52, 95);
        }
      `}</style>
    </div>
  );
};
