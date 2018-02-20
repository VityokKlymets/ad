import React from "react";
import Link from 'next/link'

const textColor = "#f4f3eb";
const headColor = "#e8e5ce";
export default ({
  id,
  header,
  text,
  image,
  btnText = "Иследовать",
  visible = false
}) => {
  return (
    <div>
      {image && (
        <div
          className="post-img"
          style={{
            backgroundImage: `url(${image})`
          }}
        />
      )}
      <div className="free-space">
        <div className="row">
          <div className="col">{header && <h1>{header}</h1>}</div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="text">{text && <p>{text}</p>}</div>
            <Link href={{ pathname: '/collection', query: { id } }}><button className="btn btn-secondary">{btnText}</button></Link>
          </div>
        </div>
      </div>
      <style jsx global>
        {`
          .free-space {
            position: absolute;
            bottom: 10%;
            top: 10%;
            left: 5%;
            right: 12%;
          }
          .text {
            font-family: serif;
            color: ${textColor};
            font-size: 1.3em;
            text-shadow: 1px 1px 2px #000;
          }
          h1 {
            text-align: center;
            color: ${headColor};
            text-shadow: 1px 2px 4px #000;
            text-transform : uppercase;
          }
          p {
            padding : 0;
          }
         
          button:hover {
            color: #fff;
            border-color: #fff;
          }
          p::first-letter {
            padding-left: 20px;
          }
          .post-img {
            position: absolute;
            background-size: cover;
            background-repeat: no-repeat;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
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
        `}
      </style>
    </div>
  );
};
