import React, { Component } from "react";
import page from "./components/page";
class fonts extends Component {
  displayName = "fonts";

  render = () => {
    return (
      <div>
        <div className="fonts">
          <div>
            <div className="col">
              <div className="logo dark-blue bold shadow Arizonia">
                <span>Aria -M</span>
              </div>
            </div>
            <div className="col">
              <div className="logo hot-orange bold shadow Arizonia">
                <span>Aria -M</span>
              </div>
            </div>
            <div className="col">
              <div className="logo asphalt bold shadow Arizonia">
                <span>Aria -M</span>
              </div>
            </div>
          </div>

          <div>
            <div className="col">
              <div className="logo dark-blue bold Arizonia">
                <span>Aria -M</span>
              </div>
            </div>
            <div className="col">
              <div className="logo hot-orange bold Arizonia">
                <span>Aria -M</span>
              </div>
            </div>
            <div className="col">
              <div className="logo asphalt bold Arizonia">
                <span>Aria -M</span>
              </div>
            </div>
          </div>
          <div>
            <div className="col">
              <div className="logo dark-blue Arizonia">
                <span>Aria -M</span>
              </div>
            </div>
            <div className="col">
              <div className="logo hot-orange Arizonia">
                <span>Aria -M</span>
              </div>
            </div>
            <div className="col">
              <div className="logo asphalt Arizonia">
                <span>Aria -M</span>
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          @import url("https://fonts.googleapis.com/css?family=Arizonia");
          .fonts {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
          }
          .col {
            flex: 1;
            flex-basis: 200px;
          }
          .shadow {
            text-shadow: 5px 5px 5px #ccc;
          }
          .logo small {
            margin-right: 50px;
          }
          .logo {
            margin: 20px 0;
            padding: 10px 0;
            border-bottom: 1px solid #ccc;
            font-size: 2em;
            text-align: center;
          }
          .bold {
            font-weight: bold;
          }
          .dark-blue {
            color: #23498c;
          }
          .hot-orange {
            color: #d8692d;
          }
          .asphalt {
            color: #505050;
          }
          .Arizonia {
            font-family: "Arizonia", cursive;
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
