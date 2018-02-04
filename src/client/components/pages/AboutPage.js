import React, { Component } from "react";
import PostersView from "../views/PostersView/PostersView";
class AboutPage extends Component {
  displayName = "AboutPage";

  render = () => {
    return (
      <div>
        <PostersView>
          <PostersView.Poster>
            <PostersView.Image src="/images/indoor-garden-wall-1-960x580.jpg" />
          </PostersView.Poster>
          <PostersView.Poster>
            <PostersView.Image src="/images/The-Best-Interior-Design-Trends-for-2017.jpg" />
          </PostersView.Poster>
        </PostersView>
      </div>
    );
  };
}

export default AboutPage;
