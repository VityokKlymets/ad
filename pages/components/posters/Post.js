import React from "react";
const textColor = "rgb(37, 52, 95)";
export default ({ header, text, reverse, image, btnText = "show more" }) => {
  return (
    <div className="post">
      {image && (
        <div
          className="post-img"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}
      <div className="text">
        {header && <h1>{header}</h1>}
        {text && <p>{text}</p>}
        {<button>{btnText}</button>}
      </div>
      <style jsx>{`
        .post {
          background: #fff;
          justify-content: center;
          align-items: center;
          display: flex;
          height: 100%;
          font-size: 1.4em;
          color: ${textColor};
        }
        .text {
          height: 100%;
        }
        h1,p{
            padding-bottom : 20px;
        }
        button {
          font-size: 1.3em;
          background: #fff;
          outline: none;
          text-transform: uppercase;
          cursor: pointer;
          padding: 0.5em 2em;
          display: block;
          color: rgb(37, 52, 95);
          border: 2px solid rgb(37, 52, 95);
          align-self: flex-end;
        }
        button:hover {
          background: rgb(37, 52, 95);
          color: #fff;
          border-color: #fff;
        }
        p {
          text-transform: capitalize;
        }
        p::first-letter {
          padding-left: 1em;
        }
        .post-img {
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
          min-width: 50%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};
