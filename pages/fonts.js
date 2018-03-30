import React, { Component } from "react";
import page from "./components/page";
class fonts extends Component {
  displayName = "fonts";

  render = () => {
    return (
      <div>
        <div className="fonts">
          <div className="col">
            <div className="logo Niconne">
              <span>Aria-M</span>
            </div>
            <div className="logo Pinyon">
              <span>Aria-M</span>
            </div>
            <div className="logo Arizonia">
              <span>Aria-M</span>
            </div>
            <div className="logo Parisienne">
              <span>Aria-M</span>
            </div>
            <div className="logo Monsieur">
              <span>Aria-M</span>
            </div>
          </div>
          <div className='col'>
            <div className="logo shadow Niconne">
              <span>Aria-M</span>
            </div>
            <div className="logo shadow Pinyon">
              <span>Aria-M</span>
            </div>
            <div className="logo shadow Arizonia">
              <span>Aria-M</span>
            </div>
            <div className="logo shadow Parisienne">
              <span>Aria-M</span>
            </div>
            <div className="logo shadow Monsieur">
              <span>Aria-M</span>
            </div>
          </div>
          <div className='col'>
            <div className="logo bold Niconne">
              <span>Aria-M</span>
            </div>
            <div className="logo bold Pinyon">
              <span>Aria-M</span>
            </div>
            <div className="logo bold Arizonia">
              <span>Aria-M</span>
            </div>
            <div className="logo bold Parisienne">
              <span>Aria-M</span>
            </div>
            <div className="logo bold Monsieur">
              <span>Aria-M</span>
            </div>
          </div>
        </div>
        <style jsx>{`
          @import url("https://fonts.googleapis.com/css?family=Arizonia|Monsieur+La+Doulaise|Niconne|Parisienne|Pinyon+Script");
          .fonts {
            display: flex;
            flex-wrap: wrap;
          }
          .col{
              flex:1;
              flex-basis: 200px;
          }
          .shadow{
              text-shadow: 1px 1px 4px #444;
          }
          .logo {
            margin: 20px 0;
            padding: 10px 0;
            border-bottom: 1px solid #ccc;
            font-size: 2em;
            text-align: center;
          }
          .bold{
              font-weight:bold;
          }
          .blue {
            color: #294c8e;
          }
          .Niconne {
            font-family: "Niconne", cursive;
          }
          .Pinyon {
            font-family: "Pinyon Script", cursive;
          }
          .Arizonia {
            font-family: "Arizonia", cursive;
          }
          .Parisienne {
            font-family: "Parisienne", cursive;
          }
          .Monsieur {
            font-family: "Monsieur La Doulaise", cursive;
          }
        `}</style>
      </div>
    );
  };
  static async getInitialProps(ctx) {
    const baseUrl = ctx.req
      ? `${ctx.req.protocol}://${ctx.req.get("Host")}`
      : "";
    return {};
  }
}
export default page(fonts);
