import React, { Component } from "react";
import PostersView from "./components/views/PostersView/PostersView";
import Head from "./head/Head";
import PosterGui from "./components/posters/PosterGui";
import PosterProvider from "./components/views/PostersView/PosterProvider";
class AboutPage extends Component {
  displayName = "AboutPage";

  render = () => {
    return (
      <div>
        <Head title="terc design" />
        <PostersView gui={<PosterGui />}>
          <PostersView.VerticalPosters>
            <PostersView.Poster
              bgsrc="/static/images/maja-wronska-frankfurt-1500-wide_1024x1024.jpg"
              invert
            />
            <PostersView.Poster />
          </PostersView.VerticalPosters>
        </PostersView>
      </div>
    );
  };
}
export default AboutPage;
