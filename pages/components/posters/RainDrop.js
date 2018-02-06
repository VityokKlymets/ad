import React from "react";

export default ({ dX = 0, dY = 0, dS=1, dO=1 ,dH=0,dW=25}) => {
  return (
    <div>
      <style jsx>{`
        div {
          position: absolute;
          left: ${dX}px;
          top: ${dY}px;
          transform: scale(${dS});
          opacity: ${dO};
          z-index: 4;
          display: block;
          height: ${dH}px;
          width: ${dW}px;
          margin: 20px auto;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03) -webkit-radial-gradient(center
                75%, ellipse contain, #ffffff, rgba(255, 255, 255, 0) 60%);
          box-shadow: inset 0 0px 6px rgba(0, 0, 0, 0.5),
            inset 0 -1px 6px rgba(0, 0, 0, 0.4),
            inset 0 8px 3px rgba(0, 0, 0, 0.3),
            inset 0 10px 3px rgba(255, 255, 255, 0.1),
            0 3px 6px rgba(0, 0, 0, 0.5);
          animation: move 5s linear infinite;
        }
        @keyframes move {
            from {
                top : ${dY}px;
            }
            to{
                top : 100%;
            }
        }
      `}</style>
    </div>
  );
};
