import React, { Component } from "react";
import { connect } from "react-redux";
import page from "./components/page";
import api from "./api/api";
import NavBar from "./components/navbars/TopMenuNavbar";
class item extends Component {
  displayName = "item";
  renderParams(item) {
    const tr = [];
    for (let p in item.params) {
      switch (p) {
        case "width":
          tr.push(this.renderTr("Ширина", item.params[p]));
          break;
        case "height":
          tr.push(this.renderTr("Висота", item.params[p]));
          break;
      }
    }
    return tr;
  }
  renderTr = (name, value) => (
    <tr key={name}>
      <td>{name}</td>
      <td>{value}</td>
    </tr>
  );
  render = () => {
    const { item } = this.props;
    return (
      <div className="container-fluid">
        <NavBar />
        <div className="row pt-4 justify-content-center align-items-center">
          <div className="col-md-4 col-sm-12">
            <img className="img-fluid" src={item.images[0]} alt={item.name} />
          </div>
          <div className="col-md-6 col-sm-12">
            <p>{item.description}</p>
            <table className="table table-striped">
              <tbody>{this.renderParams(item)}</tbody>
            </table>
          </div>
        </div>
        <style jsx>{`
          h1 {
            text-align: center;
          }
          p {
            padding: 10px;
            font-size: 1.1rem;
            text-shadow: 1px 1px 2px #eee;
          }
          p:first-letter {
            text-transform: uppercase;
            color: #fca65a;
            font-weight: bold;
            font-size: 2rem;
          }
          @keyframes slideToLeft {
            from {
              transform: translateX(100%);
            }
            to {
              transform: translateX(0%);
            }
          }
        `}</style>
      </div>
    );
  };
  static async getInitialProps(ctx) {
    const baseUrl = ctx.req
      ? `${ctx.req.protocol}://${ctx.req.get("Host")}`
      : "";
    const id = ctx.query.id;
    if (id)
      return api.items.get(baseUrl, id).then(item => ({
        item
      }));
    else return {};
  }
}
export default page(connect(state => state)(item));
