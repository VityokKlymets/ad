import React, { Component } from "react";
class AboutAs extends Component {
  displayName = "AboutAs";
  render = () => {
    const { visible } = this.props;
    return (
      <div>
        <div className="AboutAs">
          <div className="drop-head">
            <h1 className={visible ? "droped-text" : ""}>О</h1>
            <h1 className={visible ? "droped-text" : ""}>Нас</h1>
          </div>
          <div className="text">
            <div className={`left ${visible ? "visible" : ""}`}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                repellendus tempora quam officia enim distinctio necessitatibus
                nisi facilis. Veniam, explicabo?
              </p>
              <ul>
                <li>Lorem, ipsum dolor.</li>
                <li>Blanditiis, et natus?</li>
                <li>Autem, sunt consequatur.</li>
                <li>Est, ducimus officia.</li>
                <li>Autem, odit incidunt.</li>
              </ul>
            </div>
            <div className={`right ${visible ? "visible" : ""}`}>
              <div className="avatar" />
              <small>Lorem, ipsum dolor.</small>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .avatar {
              width: 200px;
              height: 200px;
              border-radius: 50%;
              background: #ccc;
            }
            .text {
              font-size: 1.3em;
              display: flex;
              margin: 2% 10% 10% 10%;
              flex-direction: row;
              justify-content: center;
            }
            p {
              border: 0;
              border-bottom: 2px solid #444;
            }
            ul {
              margin: 0;
              padding: 0;
              list-style: square;
            }
            li {
              text-transform: uppercase;
              font-weight: 300;
              color: rgb(37, 52, 95);
              margin-left: 20px;
              font-size: 0.8em;
            }
            .left {
              display: flex;
              flex-direction: column;
              max-width: 50%;
              padding: 0 20px;
            }
            small {
              font-weight: bold;
              color: #333;
              font-size: 0.8em;
            }
            .left.visible {
              animation: slidetoRight 1s ease-in-out 1;
            }
            .right.visible {
              animation: slidetoLeft 1s ease-in-out 1;
            }
            .right {
              text-align: center;
              padding-top: 5%;
            }
            .drop-head {
              display: flex;
              justify-content: center;
              font-size: 2em;
            }
            .drop-head h1 {
              padding: 0.3em 0.2em;
              text-shadow: 0px -3px 5px rgba(0, 0, 0, 0.4);
              font-weight: 300;
            }
            .droped-text {
              animation: drop 1s linear 1;
            }
            .AboutAs {
              display: flex;
              flex-direction: column;
              position: absolute;
              left: 0;
              top: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(
                30deg,
                #e1e1e1 20%,
                #fff 20%,
                #fff 80%,
                #e1e1e1 80%
              );
            }
            @keyframes drop {
              0% {
                opacity: 0;
                transform: translateY(-100%);
              }
              100% {
                transform: translateY(0%);
                opacity: 1;
              }
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
            @keyframes slidetoLeft {
              from {
                opacity: 0;
                transform: translateX(100%);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
          `}
        </style>
      </div>
    );
  };
}

export default AboutAs;
