import React, { Component } from "react";
import PostersView from "./components/views/PostersView/PostersView";
import Head from "./head/Head";
import PosterGui from "./components/posters/PosterGui";
import Post from "./components/posters/Post";
import HeadPost from "./components/posters/HeadPost";
import CollectionsPoster from "./components/posters/CollectionsPoster";
import Rain from "./components/effects/Rain";
import Contact from "./components/posters/Contact";
import MainPreloader from "./components/preloaders/MainPreloader";
import CollectionsPoster3D from "./components/posters/CollectionsPoster3D";

class AboutPage extends Component {
  displayName = "AboutPage";
  renderSecondLinePosters = () => (
    <PostersView.Poster next="Текст">
      <CollectionsPoster collections={this.props.collections} />
    </PostersView.Poster>
  );
  renderFirstLinePosters = () => (
    <PostersView.Poster invert next="Наши Коллекции">
      <PostersView.HorizontalPosters>
        <PostersView.Poster >
          <HeadPost src="/static/images/germaniia-wernigerode-doma-ploshchad-fontan.jpg" />
        </PostersView.Poster>
        <PostersView.Poster>
          <HeadPost src="/static/images/derevr-listia-kraski-priamougolnik.jpg" />
        </PostersView.Poster>
        <PostersView.Poster>
          <HeadPost src="/static/images/cvet-forma-abstrakciya-7024.jpg" />
        </PostersView.Poster>
      </PostersView.HorizontalPosters>
    </PostersView.Poster>
  );
  renderThirdLinePosters = () => {
    return (
      <PostersView.Poster>
        <Contact />
      </PostersView.Poster>
    );
  };
  renderFourLinePosters = () => {
    return (
      <PostersView.Poster>
        <CollectionsPoster3D />
      </PostersView.Poster>
    );
  };
  render = () => {
    return (
      <MainPreloader>
        <div>
          <Head title="terc design" />
          <PostersView gui={<PosterGui />}>
            <PostersView.VerticalPosters>
              {this.renderFirstLinePosters()}
              {this.renderSecondLinePosters()}
              {this.renderFourLinePosters()}
              {this.renderThirdLinePosters()}
            </PostersView.VerticalPosters>
          </PostersView>
        </div>
      </MainPreloader>
    );
  };
}

export default AboutPage;
