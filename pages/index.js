import React, { Component } from "react";
import PostersView from "./components/views/PostersView/PostersView";
import Head from "./head/Head";
import PosterGui from "./components/posters/PosterGui";
import Post from "./components/posters/Post";
import HeadPost from "./components/posters/HeadPost";
import CollectionsPoster from "./components/posters/CollectionsPoster";
import Contact from "./components/posters/Contact";
import MainPreloader from "./components/preloaders/MainPreloader";
import AboutAs from "./components/posters/AboutAs";
import page from "./components/page";
import { connect } from 'react-redux';
class index extends Component {
  displayName = "index";
  renderSecondLinePosters = () => (
    <PostersView.Poster next="о нас">
      <CollectionsPoster collections={this.props.collections} />
    </PostersView.Poster>
  );
  renderFirstLinePosters = () => (
    <PostersView.Poster invert next="Наши Коллекции">
      <PostersView.HorizontalPosters>
        <PostersView.Poster>
          <HeadPost src="/static/images/germaniia-wernigerode-doma-ploshchad-fontan.jpg" />
        </PostersView.Poster>
        <PostersView.Poster>
          <HeadPost src="/static/images/derevr-listia-kraski-priamougolnik.jpg" />
        </PostersView.Poster>
      </PostersView.HorizontalPosters>
    </PostersView.Poster>
  );
  renderFourLinePosters = () => {
    return (
      <PostersView.Poster>
        <Contact />
      </PostersView.Poster>
    );
  };
  renderThirdLinePosters = () => {
    return (
      <PostersView.Poster next="Свяжитесь с нами">
        <AboutAs />
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
              {this.renderThirdLinePosters()}
              {this.renderFourLinePosters()}
            </PostersView.VerticalPosters>
          </PostersView>
        </div>
      </MainPreloader>
    );
  };
}

export default page(connect(state=>state)(index));