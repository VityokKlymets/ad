import React, { Component } from "react";
import PostersView from "./components/views/PostersView/PostersView";
import Head from "./head/Head";
import PosterGui from "./components/posters/PosterGui";
import PosterProvider from "./components/views/PostersView/PosterProvider";
import PosterLayout from "./components/posters/PosterLayout";
import Post from "./components/posters/Post";
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
            <PostersView.Poster>
              <PostersView.HorizontalPosters>
                <PostersView.Poster>
                  <PosterLayout>
                    <Post
                      header="Where does it come from?"
                      image="/static/images/chair.jpg"
                      text="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words"
                    />
                  </PosterLayout>
                </PostersView.Poster>
                <PostersView.Poster>
                  <PosterLayout>
                    <Post
                      header="Why do we use it?"
                      image="/static/images/stunning-coffee.jpg"
                      text="readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and"
                    />
                  </PosterLayout>
                </PostersView.Poster>
              </PostersView.HorizontalPosters>
            </PostersView.Poster>
          </PostersView.VerticalPosters>
        </PostersView>
      </div>
    );
  };
}
export default AboutPage;
