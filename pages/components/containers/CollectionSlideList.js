import React, { Component } from "react";
import { canUseDOM } from "../utils/Util";
import ItemPreview from "./ItemPreview";
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
    const { current, list, collection } = this.state;
    const items = this.state.collection.items;
    return (
      <div>
        <div className="slide-list">
          {items.map(
            (item, idx) =>
              item && (
                <ItemPreview
                  key={idx}
                  item={item}
                  current={current}
                  idx={idx}
                />
              )
          )}
        </div>
        <style jsx>
          {`
            .slide-list {
              position: absolute;
              left: 0;
              top: 50%;
              transform: translateY(-50%);
            }
          `}
        </style>
      </div>
    );
  };
}

export default CollectionSlideList;
