import React, { Component } from "react";
import LeftTopLogo from "../logos/LeftTopLogo";
import Link from "next/link";
class TopMenuNavbar extends Component {
  displayName = "TopMenuNavbar";

  render = () => {
    return (
      <div>
        <LeftTopLogo />
        <div className="navbar">
          <Link href="/collections">
            <a href="#">коллекции</a>
          </Link>
          <Link href="/about">
            <a href="#">о нас</a>
          </Link>
          <Link href="/contact">
            <a href="#">Контакты</a>
          </Link>
          <Link href="/store">
            <a href="#">магазин</a>
          </Link>
          <Link href="/">
            <a href="#">домой</a>
          </Link>
        </div>
        <style jsx>
          {`
            a {
              text-decoration: none;
              text-transform: uppercase;
              color: #444;
              margin: 0 20px;
            }
            a:hover {
              color: #333;
            }
            .navbar {
              display: flex;
              justify-content: center;
              border-bottom: 1px solid #ccc;
              padding: 20px 0;
              z-index: 10;
            }
          `}
        </style>
      </div>
    );
  };
}

export default TopMenuNavbar;
