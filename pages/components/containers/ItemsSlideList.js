import React, { Component } from "react";
import { canUseDOM } from "../utils/Util";
class ItemsSlideList extends Component {
  displayName = "ItemsSlideList";
  state = {
    current: 1,
    list: [
      "/static/images/chair.jpg",
      "/static/images/stunning-coffee.jpg",
      "/static/images/chair.jpg",
      "/static/images/stunning-coffee.jpg",
      "/static/images/chair.jpg",
      "/static/images/stunning-coffee.jpg",
      "/static/images/chair.jpg",
      "/static/images/stunning-coffee.jpg",
      "/static/images/chair.jpg",
      "/static/images/stunning-coffee.jpg"
    ],
    itemWidth: 33
  };
  canUseDom = canUseDOM();
  attachEvents = () => {
    window.addEventListener("keydown", this.onKeyDown, false);
  };
  removeEvents = () => {
    window.removeEventListener("keydown", this.onKeyDown, false);
  };
  componentDidMount = () => {
    if (!this.canUseDom) return;
    this.attachEvents();
  };
  componentWillUnmount = () => {
    if (!this.canUseDom) return;
    this.removeEvents();
  };
  onKeyDown = e => {
    const keyCode = e.keyCode;
    switch (keyCode) {
      case 37:
        this.slideLeft();
        break;
      case 39:
        this.slideRight();
        break;
    }
  };
  slideLeft = () => {
    const next = this.state.current - 1;
    if (next < 0) return;
    this.setState({ current: next });
  };
  slideRight = () => {
    const next = this.state.current + 1;
    if (next === this.state.list.length) return;
    this.setState({ current: next });
  };
  render = () => {
    const { current, list, itemWidth } = this.state;
    return (
      <div>
        <div className="slide-list">
          <ul
            style={{
              transform: `translateX(${-((current - 1) * itemWidth)}%)`
            }}
          >
            {list.map((listItem, idx) => {
              return (
                <li
                  className={`${current === idx ? "active" : ""}`}
                  style={{
                    left: `${idx * itemWidth}%`
                  }}
                  key={idx}
                >
                  <a>
                    <div
                      className="list-image"
                      style={{
                        backgroundImage: `url(${listItem})`
                      }}
                    />
                  </a>
                  <span>Name</span>
                </li>
              );
            })}
          </ul>
        </div>
        <style jsx>
          {`
            .slide-list {
              position: absolute;
              left: 0;
              top: 50%;
              transform :translateY(-50%);
            }
            ul {
              list-style: none;
              position: relative;
              height: 500px;
              width : 100vw;
              transition: transform 0.3s ease-in-out;
            }
            li {
              position: absolute;
              left: 0;
              top: 0;
              text-align: center;
              text-transform: uppercase;
              color: #444;
              cursor: pointer;
              width : 33%;
            }
            li span {
              display: block;
              height: 20px;
              opacity: 0;
            }
            li.active span {
              opacity: 1;
            }
            li::hover span {
              transform: rotateX(0deg);
            }
            .list-image {
              width: 100%;
              height: 400px;
              background-size: contain;
              background-position: center;
              background-repeat: no-repeat;
            }
          `}
        </style>
      </div>
    );
  };
}

export default ItemsSlideList;
