import React, { Component } from "react";
import Rain from "../effects/Rain";
import PosterLayout from "./PosterLayout";

class HeadPost extends Component {
  displayName = "HeadPost";

  render = () => {
    const textColor = "rgb(255, 255, 255)";
    const bgsrc=this.props.bgsrc;
    return (
      <div>
        <PosterLayout>
          <h1>Where can I get some</h1>
        </PosterLayout>
        <style jsx>{`
          h1 {
            font-family: 'Handlee';
            position: absolute;
            color: ${textColor};
            text-transform: uppercase;
            border: 2px solid ${textColor};
            right: 0;
            top: 0;
            padding: 0.5em 1em;
          }
          div {
            position: absolute;
            width: 100%;
            height: 100%;
            background: url(/static/images/shotlandiia-edinburg-gorod-doma-peizazh-gory-nebo-solntse.jpg)
              no-repeat;
          }
        `}</style>
      </div>
    );
  };
}
export default HeadPost;
