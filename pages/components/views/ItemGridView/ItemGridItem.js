import React, { Component } from "react";
import Link from 'next/link'
class ItemGridItem extends Component {
  displayName = "ItemGridItem";

  render = () => {
    const item = this.props.item;
    return (
      item && (
        <div className="col-md-3 col-sm-12 item">
          <Link href={{ pathname: "/item", query: { id: item._id } }}>
            <div>
              <h3>{item.name}</h3>
              <div
                className="item-img"
                style={{
                  backgroundImage: `url(${item.images[0]})`
                }}
              >
                <div className="price">
                  <span>{item.params.price} грн.</span>
                </div>
                <div className="views d-flex justify-content-end align-items-center">
                  <span>{item.views}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>

          <style jsx>{`
            .views {
              padding: 5px 10px;
              width: 100%;
              position: absolute;
              left: 0;
              bottom: 0;
            }
            .views span {
              color: #000;
              padding-right: 5px;
            }
            .views svg {
              fill: #000;
            }
            .item-img {
              cursor: pointer;
              height: 200px;
              background-repeat: no-repeat;
              background-size: contain;
              background-position: center;
              position: relative;
            }
            .price {
              position: absolute;
              border-radius: 5px;
              width: 100px;
              right: 0%;
              top: -10px;
              background: #2a9112;
              font-weight: bold;
              text-align: center;
            }
            .price span {
              color: #fff;
              padding: 0.4em 0.6em;
            }
            h3 {
              font-size: 0.9em;
              height: 3em;
              text-align: center;
              color: #777;
              font-weight: bold;
            }
            @media (max-width: 768px) {
              .item-img {
                height: 300px;
              }
            }
          `}</style>
        </div>
      )
    );
  };
}

export default ItemGridItem;
