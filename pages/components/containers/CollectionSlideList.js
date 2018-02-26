import React, { Component } from "react";
import { canUseDOM } from "../utils/Util";
import ItemPreview from "./ItemPreview";
import Arrow from "../pagination/PaginationArrow";
import PaginationArrow from "../pagination/PaginationArrow";
class CollectionSlideList extends Component {
  displayName = "CollectionSlideList";
  state = {
    current: 1,
    collection: this.props.collection || {
      items: []
    }
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
  onArrowClick = data => this.setState({ current: data.index });
  slideLeft = () => {
    const next = this.state.current - 1;
    if (next < 0) return;
    this.setState({ current: next });
  };
  slideRight = () => {
    const next = this.state.current + 1;
    if (next === this.state.collection.items.length) return;
    this.setState({ current: next });
  };

  render = () => {
    const { current, list, collection } = this.state;
    const items = this.state.collection.items;
    return (
      <div>
        <div
          style={{
            transform: `translate(-${(current - 1) *
              (100 / items.length)}%,-50%)`
          }}
          className="slide-list"
        >
          {items.map(
            (item, idx) =>
              item && (
                <div key={idx} className="image">
                  <ItemPreview
                    item={item}
                    current={current}
                    idx={idx}
                  />
                </div>
              )
          )}
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
            .arrow {
              position: fixed;
              left: 50%;
              transform: translateX(-50%);
              bottom: 10px;
            }
            .image {
              display: inline-block;
            }
            .slide-list {
              transition: transform 0.5s ease-in-out;
              position: fixed;
              left: 0;
              top: 50%;
              transform: translate(0%, -50%);
              display: flex;
            }
          `}
        </style>
      </div>
    );
  };
}

export default CollectionSlideList;
