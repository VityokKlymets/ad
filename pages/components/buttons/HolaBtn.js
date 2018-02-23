import React from "react";
const borderColor = "#1a3059";
export default ({ text = "Click", invert = false, className = "" }) => {
  return (
    <button className={`hola-btn ${invert ? "invert" : ""} ${className}`}>
      <div className="mask" />
      <span>{text}</span>
      <style jsx>{`
        .hola-btn {
          position: relative;
          display: block;
          background: none center center no-repeat;
          background-size: cover;
          border: 2px solid #444;
          text-transform: uppercase;
          letter-spacing: 0.3rem;
          padding: 20px 15px;
          text-align: center;
          max-width: 270px;
          min-width: 200px;
          cursor: pointer;
          overflow: hidden;
          transition: border 1s cubic-bezier(0.19, 1, 0.22, 1),
            color 0.6s cubic-bezier(0.19, 1, 0.22, 1),
            background 5s cubic-bezier(0.19, 1, 0.22, 1);
        }
        .hola-btn span {
          color: #969696;
          text-decoration: none;
        }
        .hola-btn .mask {
          background: ${borderColor};
          position: absolute;
          display: block;
          width: 200px;
          height: 100px;
          transform: translate3d(-120%, -50px, 0) rotate3d(0, 0, 1, 45deg);
          transition: all 1.1s cubic-bezier(0.19, 1, 0.22, 1);
        }
        .hola-btn .shift {
          transition: all 1.1s cubic-bezier(0.19, 1, 0.22, 1);
        }
        .hola-btn:hover {
          border-color: ${borderColor};
        }
        .hola-btn:hover span {
          color: #000;
        }
        .hola-btn:hover .mask {
          opacity: 0.5;
          -webkit-transform: translate3d(120%, -100px, 0)
            rotate3d(0, 0, 1, 90deg);
          transform: translate3d(120%, -100px, 0) rotate3d(0, 0, 1, 90deg);
        }
        .hola-btn:hover .shift {
          padding-left: 5px;
        }
        .hola-btn.invert {
          border-color: #2bff00;
        }
        .hola-btn.invert span {
          color: #2bff00;
        }
        .hola-btn.invert .mask {
          background: #fff;
        }
        .hola-btn.invert:hover {
          border-color: #fff;
        }
        .hola-btn.invert:hover span {
          color: #fff;
        }
      `}</style>
    </button>
  );
};
