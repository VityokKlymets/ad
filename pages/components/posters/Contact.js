import React, { Component } from "react";
class Contact extends Component {
  displayName = "Contact";

  render = () => {
    return (
        <div className="contact">
          <h1> свяжитесь с нами</h1>
          <div className="social" />
          <style jsx>{`
            div.contact {
              position: absolute;
              width: 100%;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
            }
          `}</style>
        </div>
    );
  };
}

export default Contact;
