import React, { Component, Fragment } from "react";
import PostersView from "../views/PostersView/PostersView";
import Post from "./Post";
class CollectionsPoster extends Component {
  displayName = "CollectionsPoster";

  render = () => {
    const {collections} = this.props;
    return (
      <PostersView.HorizontalPosters {...this.props}>
        <PostersView.Poster invert>
          <Post
            header="Where does it come from?"
            image="/static/images/chair.jpg"
            text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words"
          />
        </PostersView.Poster>
        <PostersView.Poster invert>
          <Post
            header="Why do we use it?"
            image="/static/images/stunning-coffee.jpg"
            text="readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and"
          />
        </PostersView.Poster>
        
      </PostersView.HorizontalPosters>
    );
  };
  static async getInitialProps() {
    return {
      collections: []
    };
  }
}

export default CollectionsPoster;
