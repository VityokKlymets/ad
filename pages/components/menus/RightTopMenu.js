import React, { Component } from "react";
import Link from "next/link";
class RightTopMenu extends Component {
  displayName = "RightTopMenu";

  render = () => {
    return (
      <div>
        <nav className="nav">
          <input type="checkbox" className="nav__cb" id="menu-cb" />
          <div className="nav__content">
            <ul className="nav__items">
              <li className="nav__item">
                <Link href="/collections">
                  <span className="nav__item-text">коллекции</span>
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/about">
                  <span className="nav__item-text">о нас</span>
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/contact">
                  <span className="nav__item-text">контакты</span>
                </Link>
              </li>
              <li className="nav__item">
                <Link href="/store">
                  <span className="nav__item-text">магазин</span>
                </Link>
              </li>
            </ul>
          </div>
          <label className="nav__btn" htmlFor="menu-cb" />
        </nav>
        <style jsx>
          {`
            .nav {
              overflow: hidden;
              position: fixed;
              right: 10px;
              top: 10px;
              width: auto;
              height: 50px;
              display: flex;
              align-items: center;

              background: #fff;
              border-radius: 5px;
              box-shadow: 0 10px 35px rgba(0, 0, 0, 0.2);
            }

            .nav__cb {
              z-index: -1000;
              position: absolute;
              left: 0;
              top: 0;
              opacity: 0;
              pointer-events: none;
            }

            .nav__content {
              position: relative;
              height: 100%;
              width: 50px;
              transition: width 1s cubic-bezier(0.49, -0.3, 0.68, 1.23);
            }

            .nav__cb:checked ~ .nav__content {
              transition: width 1s cubic-bezier(0.48, 0.43, 0.29, 1.3);
              width: 410px;
            }

            .nav__items {
              position: relative;
              height: 100%;
              list-style-type: none;
              display: flex;
              justify-content: space-around;
              padding-right: 50px;
              align-items: center;
              font-size: 0;
            }

            .nav__item {
              display: inline-block;
              vertical-align: top;
              text-align: center;
              color: #1a3059;
              font-size: 14px;
              font-family: Helvetica, Arial, sans-serif;
              font-weight: bold;
              perspective: 1000px;
              transition: color 0.3s;
              cursor: pointer;
            }

            .nav__item:hover {
              color: #1539cf;
            }

            .nav__item-text {
              display: block;
              height: 100%;
              transform: rotateY(-70deg);
              opacity: 0;
              transition: transform 0.7s cubic-bezier(0.48, 0.43, 0.7, 2.5),
                opacity 0.7s;
            }

            .nav__cb:checked ~ .nav__content .nav__item-text {
              transform: rotateY(0);
              opacity: 1;
              transition: transform 0.7s cubic-bezier(0.48, 0.43, 0.7, 2.5),
                opacity 0.2s;
            }

            .nav__item:nth-child(1) .nav__item-text {
              transition-delay: 0.3s;
            }

            .nav__cb:checked
              ~ .nav__content
              .nav__item:nth-child(1)
              .nav__item-text {
              transition-delay: 0s;
            }

            .nav__item:nth-child(2) .nav__item-text {
              transition-delay: 0.2s;
            }

            .nav__cb:checked
              ~ .nav__content
              .nav__item:nth-child(2)
              .nav__item-text {
              transition-delay: 0.1s;
            }

            .nav__item:nth-child(3) .nav__item-text {
              transition-delay: 0.1s;
            }

            .nav__cb:checked
              ~ .nav__content
              .nav__item:nth-child(3)
              .nav__item-text {
              transition-delay: 0.2s;
            }

            .nav__item:nth-child(4) .nav__item-text {
              transition-delay: 0s;
            }

            .nav__cb:checked
              ~ .nav__content
              .nav__item:nth-child(4)
              .nav__item-text {
              transition-delay: 0.3s;
            }

            .nav__btn {
              position: absolute;
              display: flex;
              justify-content: center;
              height: 100%;
              width: 50px;
              flex-direction: column;
              padding: 5px;
              align-items: center;
              right: 0;
              top: 0;
              cursor: pointer;
            }

            .nav__btn:before,
            .nav__btn:after {
              content: "";
              display: block;
              width: 28px;
              height: 4px;
              border-radius: 2px;
              background: #1a3059;
              transform-origin: 50% 50%;
              transition: transform 1s cubic-bezier(0.48, 0.43, 0.29, 1.3),
                background-color 0.3s;
            }

            .nav__btn:before {
              margin-bottom: 10px;
            }

            .nav__btn:hover:before,
            .nav__btn:hover:after {
              background: #1539cf;
            }

            .nav__cb:checked ~ .nav__btn:before {
              transform: translateY(7px) rotate(-225deg);
            }

            .nav__cb:checked ~ .nav__btn:after {
              transform: translateY(-7px) rotate(225deg);
            }
          `}
        </style>
      </div>
    );
  };
}

export default RightTopMenu;
