import React, { Component } from "react";
import { canUseDOM } from "../utils/Util";
import ItemPreview from "./ItemPreview";
import Arrow from "../pagination/PaginationArrow";
import PaginationArrow from "../pagination/PaginationArrow";
class CollectionSlideList extends Component {
  displayName = "CollectionSlideList";
  state = {
    current: 0,
    collection: this.props.collection || {
      items: []
    },
    viewWidth: 400,
    offsetLeft: 0
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
    if (window.innerWidth < this.state.viewWidth) {
      this.setState({
        viewWidth: window.innerWidth - 10
      });
    }
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
  setCurrent = current => {
    this.setState({
      current:
        current < 0
          ? 0
          : !(current < this.state.collection.items.length)
            ? this.state.collection.items.length - 1
            : current
    });
  };
  onArrowClick = data => this.setState({ current: data.index });

  touchStart = false;
  onTouchStart = e => {
    this.touchStart = true;
    let touch = e.changedTouches[0];
    this.startX = touch.pageX;
  };
  onTouchMove = e => {
    if (e.touches.length != 1 || !this.touchStart) {
      return;
    }
    let touch = e.changedTouches[0],
      deltaX = touch.pageX - this.startX,
      amount = 40;
    this.setState({
      offsetLeft: deltaX
    });
    if (Math.abs(deltaX) > amount) {
      if (deltaX < 0) {
        this.slideRight();
      } else {
        this.slideLeft();
      }
      this.touchStart = false;
    }
  };
  onTouchEnd = e => {
    this.touchStart = false;
    this.setState({
      offsetLeft: 0
    });
  };
  slideRight = () => {
    const next = this.state.current + 1;
    if (next === this.state.collection.items.length) return;
    this.setCurrent(next);
  };
  slideLeft = () => {
    const next = this.state.current - 1;
    if (next < 0) return;
    this.setCurrent(next);
  };
  renderSlides = () => {
    const { current, viewWidth, offsetLeft } = this.state;
    const items = this.state.collection.items;
    return (
      <div
        ref="slider"
        style={{
          left: `${current * -viewWidth + offsetLeft}px`
        }}
        className="slide-list"
      >
        {items.map(
          (item, idx) =>
            item && (
              <div
                key={idx}
                className={`image ${current === idx ? "active" : ""}`}
                style={{
                  width: `${viewWidth}px`
                }}
              >
                <ItemPreview item={item} current={current} idx={idx} />
              </div>
            )
        )}
        <style jsx>{`
          .image {
            display: inline-block;
            transform: scale(0.7);
            opacity: 0.6;
            transition: all 0.5s linear;
          }
          .image.active {
            transform: scale(1);
            opacity: 1;
          }
          .slide-list {
            transition: left 0.3s linear;
            position: absolute;
            left: 0;
            top: 0;
            display: flex;
          }
        `}</style>
      </div>
    );
  };
  render = () => {
    const { current, list, collection, viewWidth } = this.state;
    const items = this.state.collection.items;
    return (
      <div>
        <div
          onTouchStart={this.onTouchStart}
          onTouchMove={this.onTouchMove}
          onTouchEnd={this.onTouchEnd}
          ref="view"
          className="view"
          style={{ width: `${viewWidth}px` }}
        >
          {this.renderSlides()}
        </div>

        <div className="arrow">
          <PaginationArrow
            onChange={this.onArrowClick}
            index={current}
            length={items.length}
          />
        </div>
        <style jsx>
          {`
            .view {
              position: fixed;
              z-index: 1;
              left: 50%;
              top: 120px;
              transform: translateX(-50%);
            }
            .arrow {
              position: fixed;
              z-index: 1;
              left: 50%;
              transform: translateX(-50%);
              bottom: 10px;
            }
            @media (max-width: 768px) {
              .view {
                left: 50%;
                top: 10%;
              }
            }
          `}
        </style>
      </div>
    );
  };
}

export default CollectionSlideList;
