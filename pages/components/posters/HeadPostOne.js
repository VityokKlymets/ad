import React, { Component } from "react";
import Rain from "../effects/Rain";
import PosterLayout from "./PosterLayout";

class HeadPost extends Component {
  displayName = "HeadPost";

  render = () => {
    const textColor = "rgb(255, 255, 255)";
    const { visible } = this.props;
    return (
      <div>
        <h1 className={`${visible ? "visible" : ""}`}>terc design</h1>
        <style jsx>{`
          h1 {
            font-family: serif;
            color: ${textColor};
            text-transform: capitalize;
            font-weight: bold;
            font-size : 2em;
          }
          h1.visible {
            animation: fadeIn 2s ease-in-out 1;
          }
          div {
            position: absolute;
            width: 100%;
            height: 100%;
            background: url(/static/images/germaniia-wernigerode-doma-ploshchad-fontan.jpg)
              no-repeat;
            background-size: cover;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          @keyframes fadeIn {
            from {
              transform: translateY(-100%);
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
