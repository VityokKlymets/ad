import React, { Component } from "react";
import Poster from "./Poster";
import Image from "./Image";
import GUI from "./GUI";
import VerticalPosters from "./VerticalPosters";
class PostersView extends Component {
  displayName = "PostersView";

  render = () => {
    const { children } = this.props;
    return (
      <div className="PosterView">
        <div className="view-area">
          {children.map((child, idx) => {
            return React.cloneElement(child, { key: idx });
          })}
        </div>
      </div>
    );
  };
  static VerticalPosters = VerticalPosters;
  static Poster = Poster;
  static Image = Image;
  static GUI = GUI;
}
export default PostersView;
