import React from "react";
import Link from "next/link";
export default () => {
  return (
    <nav className="navbar navbar-top">
      <ul>
        <li>
          <Link href="/about">
            <a>about</a>
          </Link>
        </li>
        <li>
          <a href="#">our projects</a>
        </li>
        <li>
          <a href="#">news</a>
        </li>
        <li>
          <a href="#">videos</a>
        </li>
      </ul>
    </nav>
  );
};
