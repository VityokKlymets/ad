import React from "react";
import MagicBlurText from "../effects/MagicBlurText";

export default () => {
  return (
    <div className="hpost">
      <div className="welcome">
        <MagicBlurText A="terc" B="design" />
      </div>
      <style jsx>{`
        .hpost {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          right: 0;
        }
      `}</style>
    </div>
  );
};
