import React, { Component } from "react";
import Rain from "../effects/Rain";
import PosterLayout from "./PosterLayout";

class HeadPost extends Component {
  displayName = "HeadPost";

  render = () => {
    const textColor = "rgb(255, 255, 255)";
    const {visible} = this.props;
    return (
      <div>
        <PosterLayout>
        <h1 className={`${visible ? "visible" : ""}`}>Where can I get some</h1>
        </PosterLayout>
        <style jsx>{`
          h1 {
            font-family: 'Handlee';
            position: absolute;
            color: ${textColor};
            text-transform: uppercase;
            border: 2px solid ${textColor};
            right: 0;
            bottom: 20%
            padding: 0.5em 1em;
          }
          h1.visible {
            animation: fadeIn 2s ease-in-out 1;
          }
          div {
            position: absolute;
            width: 100%;
            height: 100%;
            background: url(/static/images/gorod-vancouver-canada.jpg)
              no-repeat;
          }
          @keyframes fadeIn {
            from {
              transform: translateY(100%);
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
}
export default HeadPost;
