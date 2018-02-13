import React from "react";
const textColor = "#8b8c8e";
const headColor = "rgb(37, 52, 95)";
export default ({
  header,
  text,
  reverse,
  image,
  btnText = "show more",
  visible = false
}) => {
  return (
    <div className="free-space">
      <div className={`post ${visible ? "visible" : ""}`}>
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
        `}
      </style>
      <style jsx>{`
        .post {
          justify-content: center;
          align-items: center;
          display: flex;
          height: 100%;
          font-size: 1.4em;
          color: ${textColor};
        }
        .text {
          height: 100%;
          font-family: serif;
          display: flex;
          flex-direction: column;
        }
        h1 {
          text-align: center;
          color: ${headColor};
        }
        p {
          padding: 30px 0;
          border-top: 1px solid ${textColor};
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
          margin-bottom: auto;
        }
        button:hover {
          background: rgb(37, 52, 95);
          color: #fff;
          border-color: #fff;
        }
        p::first-letter {
          padding-left: 20px;
        }
        .post-img {
          background-repeat: no-repeat;
          background-size: contain;
          background-position: center;
          min-width: 50%;
          height: 100%;
        }
        .post.visible .post-img {
          animation: slidetoRight 1s ease-in-out 1;
        }
        @keyframes slidetoRight {
          from {
            opacity: 0;
            transform: translateX(-100%);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};
