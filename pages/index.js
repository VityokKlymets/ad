import React, { Component } from "react";
import PostersView from "./components/views/PostersView/PostersView";
import Head from "./head/Head";
import PosterGui from "./components/posters/PosterGui";
import PosterProvider from "./components/views/PostersView/PosterProvider";
import Post from "./components/posters/Post";
import HeadPostOne from "./components/posters/HeadPostOne";
import HeadPostTwo from "./components/posters/HeadPostTwo";
import HeadPostThree from "./components/posters/HeadPostThree";
import PosterLayout from "./components/posters/PosterLayout";
class AboutPage extends Component {
  displayName = "AboutPage";
  renderFirstLinePosters = () => (
    <PostersView.Poster>
      <PostersView.HorizontalPosters>
        <PostersView.Poster>
          <Post
            header="Where does it come from?"
            image="/static/images/chair.jpg"
            text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words"
          />
        </PostersView.Poster>
        <PostersView.Poster>
          <Post
            header="Why do we use it?"
            image="/static/images/stunning-coffee.jpg"
            text="readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and"
          />
        </PostersView.Poster>
      </PostersView.HorizontalPosters>
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
