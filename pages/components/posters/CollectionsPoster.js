import React, { Component, Fragment } from "react";
import PostersView from "../views/PostersView/PostersView";
import Post from "./Post";
class CollectionsPoster extends Component {
  displayName = "CollectionsPoster";
  render = () => {
    const { collections, rec } = this.props;
    return (
      <PostersView.HorizontalPosters counter rec={rec}>
        {this.props.collections.map((collection, idx) => {
          return (
            <PostersView.Poster key={idx}>
              <Post
                header={collection.name}
                image={collection.image}
                text={collection.description}
                id={collection._id}
              />
            </PostersView.Poster>
          );
        })}
      </PostersView.HorizontalPosters>
    );
  };
}

export default CollectionsPoster;
