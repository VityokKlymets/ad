import React, { Component } from "react";
import Link from "next/link";
class RightTopFixedMenu extends Component {
  displayName = "RightTopFixedMenu";
  state = {
    toggle: false
  };
  toggle = () => {
    this.setState({
      toggle: !this.state.toggle
    });
  };
  render = () => {
    const { toggle } = this.state;
    return (
      <div className={`menu ${toggle ? "toggle" : ""}`}>
        <ul>
          <div onClick={() => this.toggle()} className="hamg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 48 48"
            >
              <path d="M6 18h28v-4H6v4zm0 8h28v-4H6v4zm0 8h28v-4H6v4zm32 0h4v-4h-4v4zm0-20v4h4v-4h-4zm0 12h4v-4h-4v4z" />
            </svg>
          </div>
          <nav>
            <li>
              <Link href="/collections">
                <span>коллекции</span>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <span>о нас</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span>контакты</span>
              </Link>
            </li>
            <li>
              <Link href="/store">
                <span>магазин</span>
              </Link>
            </li>
          </nav>
        </ul>
        <style jsx>{`
          .menu {
            height: 100%;
          }
          nav {
            box-shadow: 7px 0px 5px #081533 inset;
            display: flex;
            flex-direction: column;
            background: linear-gradient(60deg, #203666, #081533);
            width: 0;
            transition: width .3s ease-in-out;
            height: 100%;
          }
          ul {
            display: flex;
            margin: 0;
            padding: 0;
            height: 100%;
          }
          .hamg {
            height: 50px;
            transition: height .1s linear;
            background: #203666;
          }
          .hamg svg {
            fill: #fff;
            height: 50px;
            cursor: pointer;
          }
          li {
            cursor: pointer;
            padding: 5px 0;
            color: #fff;
            font-weight: bold;
            width: 100%;
            text-align: center;
            list-style: none;
            border-bottom: 1px solid #172951;
          }
          .menu.toggle nav {
            width: 200px;
          }
        `}</style>
      </div>
    );
  };
}

export default RightTopFixedMenu;
