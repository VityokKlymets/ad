import React from "react";
import { h1Color } from "../css_constants";
export default ({ A = "", B = "" }) => {
  return (
    <div className="mb">
      <h1 className="A">{A}</h1>
      <h1 className="B">{B}</h1>
      <style jsx>{`
        .mb {
          margin: 0;
          padding: 0;
          position: relative;
          width: 100%;
          line-height: 0px;
        }
        .mb h1 {
          width: 100%;
          text-align: center;
          position: absolute;
          font-size: 3em;
          margin: 0;
          color: ${h1Color};
          text-shadow: 4px 4px 120px rgba(256, 256, 256, 1),
            -4px -4px 120px rgba(256, 256, 256, 1),
            -4px 4px 120px rgba(256, 256, 256, 1),
            4px -4px 120px rgba(256, 256, 256, 1);
        }

        @keyframes anim {
          0% {
            opacity: 0;
            -webkit-filter: blur(3px);
            filter: blur(3px);
          }
          10% {
            opacity: 0;
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 1;
            -webkit-filter: blur(1px);
            filter: blur(1px);
          }
        }
        .A {
          animation: anim 2.5s infinite alternate-reverse;
        }
        .B {
          animation: anim 2.5s infinite alternate;
        }
      `}</style>
    </div>
  );
};
