import React from "react";
import { h1Color } from "../css_constants";
import Link from "next/link";
const textColor = "#6d6d6d";
export default ({
  id,
  header,
  text,
  image,
  btnText = "Перейти",
  visible = false
}) => {
  return (
    <div>
      <div className="free-space">
        <div className="row pl-5">{header && <h1>{header}</h1>}</div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <img className="img-fluid " src={image} />
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="text">{text && <p>{text}</p>}</div>
            <Link href={{ pathname: "/collection", query: { id } }}>
              <button className="hola-btn mt-5">
                <div className="mask" />
                <span>{btnText}</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <style jsx global>
        {`
          .free-space {
            position: absolute;
            bottom: 100px;
            top: 60px;
            left: 50px;
            right: 80px;
          }
          .text {
            font-family: serif;
            color: ${textColor};
            font-size: 1em;
          }
          h1 {
            text-align: center;
            color: ${h1Color};
            text-transform: uppercase;
          }
          p {
            padding: 0;
          }
          p::first-letter {
            padding-left: 20px;
          }
          .post-img:before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            background: #000;
            opacity: 0.3;
          }

          .hola-btn {
            position: relative;
            display: block;
            background: none center center no-repeat;
            background-size: cover;
            border: 2px solid #444;
            text-transform: uppercase;
            letter-spacing: 0.3rem;
            padding: 20px 15px;
            text-align: center;
            max-width: 270px;
            min-width: 200px;
            cursor: pointer;
            overflow: hidden;
            -webkit-transition: border 1s cubic-bezier(0.19, 1, 0.22, 1),
              color 0.6s cubic-bezier(0.19, 1, 0.22, 1);
            transition: border 1s cubic-bezier(0.19, 1, 0.22, 1),
              color 0.6s cubic-bezier(0.19, 1, 0.22, 1),
              background 5s cubic-bezier(0.19, 1, 0.22, 1);
          }

          .hola-btn span {
            color: #969696;
            text-decoration: none;
          }
          .hola-btn .mask {
            position: absolute;
            display: block;
            width: 200px;
            height: 100px;
            -webkit-transform: translate3d(-120%, -50px, 0)
              rotate3d(0, 0, 1, 45deg);
            transform: translate3d(-120%, -50px, 0) rotate3d(0, 0, 1, 45deg);
            -webkit-transition: all 1.1s cubic-bezier(0.19, 1, 0.22, 1);
            transition: all 1.1s cubic-bezier(0.19, 1, 0.22, 1);
          }

          .hola-btn .shift {
            -webkit-transition: all 1.1s cubic-bezier(0.19, 1, 0.22, 1);
            transition: all 1.1s cubic-bezier(0.19, 1, 0.22, 1);
          }

          .hola-btn:hover {
            border-color: ${h1Color};
          }

          .hola-btn:hover span {
            color: #000;
          }

          .hola-btn:hover .mask {
            background: ${h1Color};
            opacity: 0.5;
            -webkit-transform: translate3d(120%, -100px, 0)
              rotate3d(0, 0, 1, 90deg);
            transform: translate3d(120%, -100px, 0) rotate3d(0, 0, 1, 90deg);
          }

          .hola-btn:hover .shift {
            padding-left: 5px;
          }
        `}
      </style>
    </div>
  );
};
