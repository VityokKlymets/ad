import React, { Component } from "react";
import PostersView from "../views/PostersView/PostersView";
class AboutPage extends Component {
  displayName = "AboutPage";

  render = () => {
    return (
      <div>
        <PostersView>
          <PostersView.GUI>
            <div>
              <div className="logo">
                <span>
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M17.9,17.39C17.64,16.59 16.89,16 16,16H15V13C15,12.45 14.55,12 14,12H8V10H10C10.55,10 11,9.55 11,9V7H13C14.1,7 15,6.1 15,5V4.59C17.93,5.77 20,8.64 20,12C20,14.08 19.2,15.97 17.9,17.39M11,19.93C7.05,19.44 4,16.08 4,12C4,11.38 4.08,10.78 4.21,10.21L9,15V16C9,17.1 9.9,18 11,18M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z" />
                  </svg>
                </span>
                <div>
                  <div>terc</div>
                  <div>design</div>
                </div>
              </div>
              <div className="menu">
                <div className="menu-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
                  </svg>
                </div>
              </div>
            </div>
          </PostersView.GUI>
          <PostersView.VerticalPosters row={0} column={0}>
            <PostersView.Poster>
              <PostersView.HorizontalPosters row={0} column={0}>
                <PostersView.Poster>
                  <PostersView.Image src="/images/indoor-garden-wall-1-960x580.jpg" />
                </PostersView.Poster>
                <PostersView.Poster>
                  <PostersView.Image src="/images/cvet-forma-abstrakciya-7024.jpg" />
                </PostersView.Poster>
                <PostersView.Poster>
                  <PostersView.Image src="/images/derevr-listia-kraski-priamougolnik.jpg" />
                </PostersView.Poster>
              </PostersView.HorizontalPosters>
            </PostersView.Poster>
            <PostersView.Poster invert>
              <div className="poster-1">
                <div>
                  <img
                    src="/images/chair.jpg"
                    className="img-responsive"
                    alt="chair"
                  />
                </div>
                <div className="text">
                  <h1>Where does it come from</h1>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old.
                  </p>
                  <button>read more</button>
                </div>
              </div>
            </PostersView.Poster>
            <PostersView.Poster invert>
              <div className="poster-1">
                <div className='right'>
                  <img
                    src="/images/stunning-coffee.jpg"
                    className="img-responsive"
                    alt="chair"
                  />
                </div>
                <div className="text left">
                  <h1>White Walls and Exposed Brick</h1>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </p>
                  <button>read more</button>
                </div>
              </div>
            </PostersView.Poster>
          </PostersView.VerticalPosters>
        </PostersView>
      </div>
    );
  };
}

export default AboutPage;
