import React from "react";
import { h1Color } from "../css_constants";
import Link from "next/link";
import HolaBtn from "../buttons/HolaBtn";
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
              <div className='btn'>
                <HolaBtn text={btnText} />
              </div>
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
          @media (max-width: 768px) {
            h1{
              font-size: 1.3em;
            }
            .free-space {
              position: static;
              padding: 0px 10px;
            }
            .btn{
              display:flex;
              justify-content: center;
            }
          }
        `}
      </style>
    </div>
  );
};
