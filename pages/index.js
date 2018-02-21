import React, { Component } from "react";
import PostersView from "./components/views/PostersView/PostersView";
import PosterGui from "./components/posters/PosterGui";
import Post from "./components/posters/Post";
import HeadPost from "./components/posters/HeadPost";
import CollectionsPoster from "./components/posters/CollectionsPoster";
import Contact from "./components/posters/Contact";
import MainPreloader from "./components/preloaders/MainPreloader";
import AboutAs from "./components/posters/AboutAs";
import page from "./components/page";
import api from "./api/api";
import { connect } from "react-redux";
class index extends Component {
  displayName = "index";
  renderSecondLinePosters = () => (
    <PostersView.Poster next="Контакти">
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
          <PostersView gui={<PosterGui />}>
            <PostersView.VerticalPosters>
              {this.renderFirstLinePosters()}
              {this.renderSecondLinePosters()}
              {this.renderFourLinePosters()}
            </PostersView.VerticalPosters>
          </PostersView>
        </div>
      </MainPreloader>
    );
  };
  static getInitialProps({ req }) {
    const baseUrl = req ? `${req.protocol}://${req.get("Host")}` : "";
    return api.collections
      .fetchActual(baseUrl)
      .then(collections => ({ collections }));
  }
}
export default page(connect(state => state)(index));
