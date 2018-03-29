import React, { Component } from "react";
import Link from "next/link";
import LeftTopLogo from "../logos/LeftTopLogo";
class Navbar extends Component{
  displayName = "Navbar";

  render = () => {
   return ( <div className="nav-wrap">
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
              padding: 20px 0;
            }
            .nav-wrap {
              width: 100%;
              border-bottom: 1px solid #ccc;
            }
          `}
        </style>
 </div>);
  };
}

export default Navbar