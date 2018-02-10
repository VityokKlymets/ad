import React, { Component } from "react";
import PostersView from "./components/views/PostersView/PostersView";
import Head from "./head/Head";
import PosterGui from "./components/posters/PosterGui";
import PosterProvider from "./components/views/PostersView/PosterProvider";
import Post from "./components/posters/Post";
import HeadPostOne from "./components/posters/HeadPostOne";
import PosterLayout from "./components/posters/PosterLayout";
import CollectionsPoster from "./components/posters/CollectionsPoster";
class AboutPage extends Component {
  displayName = "AboutPage";
  renderFirstLinePosters = () => (
    <PostersView.Poster>
      <CollectionsPoster collections={this.props.collections}/>
    </PostersView.Poster>
  );
  renderSecondLinePosters = () => (
    <PostersView.Poster invert next="Наши Коллекции">
      <HeadPostOne />
    </PostersView.Poster>
  );
  render = () => {
    return (
      <div>
        <Head title="terc design" />
        <PostersView gui={<PosterGui />}>
          <PostersView.VerticalPosters>
            {this.renderSecondLinePosters()}
            {this.renderFirstLinePosters()}
          </PostersView.VerticalPosters>
        </PostersView>
      </div>
    );
  };
}

export default AboutPage;
