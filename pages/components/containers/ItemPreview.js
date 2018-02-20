import React, { Component } from "react";
import Link from "next/link";
class ItemPreview extends Component {
  displayName = "ItemPreview";
  componentWillReceiveProps = nextProps => {
    this.setState({
      current: nextProps.current
    });
  };
  render = () => {
    const { item, current, idx } = this.props;
    const id = item._id;
    return (
      <div>
        <Link href={{ pathname: "/item", query: { id } }}>
          <figure className={`${current === idx ? "active" : ""}`}>
            <div
              className="image"
              style={{
                backgroundImage: `url(${item.images[0]})`
              }}
            />
            <figcaption>{item.name}</figcaption>
          </figure>
        </Link>
        <style jsx>{`
          figure {
            cursor: pointer;
            text-align: center;
            padding: 20px;
          }
          .image {
            display: inline-block;
            width: 400px;
            height: 300px;
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
          }
          figure.active figcaption {
            opacity: 1;
          }
          figcaption {
            text-transform: uppercase;
            color: #444;
            text-shadow: 1px 1px 3px #ccc;
            opacity: 0;
            transition: opacity 0.5s linear;
          }
        `}</style>
      </div>
    );
  };
}

export default ItemPreview;
