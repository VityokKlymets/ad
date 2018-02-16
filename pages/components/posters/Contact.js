import React, { Component } from "react";
class Contact extends Component {
  displayName = "Contact";

  render = () => {
    return (
      <div className="contact">
        <h1>Contact with us</h1>
        <div className="social">
          <div className="soc">
            <svg width="24" height="24" viewBox="0 0 24 24">
              <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5C20.55,15.5 21,15.95 21,16.5V20C21,20.55 20.55,21 20,21C10.61,21 3,13.39 3,4C3,3.45 3.45,3 4,3H7.5C8.05,3 8.5,3.45 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
            </svg>
            <span>+380 000 123 454</span>
          </div>
          <div className="soc">
            <svg version="1.1" width="24" height="24" viewBox="0 0 24 24">
              <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,18V6C22,4.89 21.1,4 20,4Z" />
            </svg>
            <span>terc_design@gmail.com</span>
          </div>
          <div className="soc">
            <svg version="1.1" width="24" height="24" viewBox="0 0 24 24">
              <path d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6C10,3.79 11.79,2 14,2H17Z" />
            </svg>
            <span>facebook</span>
          </div>
        </div>
        <style jsx>{`
          div.contact {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          h1 {
            margin: auto 0;
            align-self: center;
            color: #333;
            text-transform: uppercase;
          }
          .social {
            border-top: 1px solid #ccc;
            display: flex;
            padding: 20px 0;
            color: #333;
            justify-content: center;
          }
          svg {
            fill: #444;
            padding: 0 5px;
          }
          .soc {
            padding: 0 5px;
            display: flex;
            align-items: center;
          }
        `}</style>
      </div>
    );
  };
}

export default Contact;
