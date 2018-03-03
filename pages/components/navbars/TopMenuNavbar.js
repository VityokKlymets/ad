import React, { Component } from "react";
import LeftTopLogo from "../logos/LeftTopLogo";
import Link from "next/link";
import RightTopMenu from "../menus/RightTopMenu";
class TopMenuNavbar extends Component {
  displayName = "TopMenuNavbar";

  render = () => {
    return (
      <div className='w-100'>
        <div className="mobile-menu">
          <RightTopMenu />
        </div>
        <div className="nav-wrap">
          <div className="logo">
            <LeftTopLogo />
          </div>
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
              width: 100%;
              justify-content: center;
              z-index: 10;
              padding: 20px 0;
            }
            .nav-wrap {
              width: 100%;
              border-bottom: 1px solid #ccc;
            }
            .mobile-menu {
              display: none;
            }
            @media (max-width: 768px) {
              .nav-wrap {
                display: none;
              }
              .mobile-menu {
                display: block;
              }
            }
          `}
        </style>
      </div>
    );
  };
}

export default TopMenuNavbar;
