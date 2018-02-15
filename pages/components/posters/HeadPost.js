import React from "react";
const textColor = "#fff";
export default ({ src, visible }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${src})`
      }}
    >
      <div className={`caption ${visible ? "visible" : ""}`}>
        <h1>terc design</h1>
        <span>we always do it better</span>
      </div>
      <style jsx>{`
        .caption {
          color: ${textColor};
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .caption.visible {
          animation: fadeIn 2s ease-in-out 1;
        }
        .caption span {
          font-weight: bold;
        }
        h1 {
          font-family: serif;
          text-transform: capitalize;
          font-weight: bold;
          font-size: 2em;
          color: ${textColor};
        }
        div {
          position: absolute;
          width: 100%;
          height: 100%;
          background-repeat: no-repeat;
          background-size: cover;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        @keyframes fadeIn {
          from {
            transform: translateY(-5%);
            opacity: 0;
          }
          to {
            transform: translateY(0%);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};
