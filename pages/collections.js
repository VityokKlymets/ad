import React, { Component } from "react";
import TopMenuNavbar from "./components/navbars/TopMenuNavbar";
import MainPreloader from "./components/preloaders/MainPreloader";
import page from "./components/page";
import api from "./api/api";
import HolaBtn from "./components/buttons/HolaBtn";
import Link from "next/link";
import { connect } from "react-redux";
class collections extends Component {
  displayName = "menu";
  renderCollections = () => {
    return this.props.collections.map((collection, idx) => {
      return (
        <div key={idx}>
          <div className="row">
            <div className="col-12">
              <h3>{collection.name}</h3>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-sm-12 col-md-8">
              <div
                style={{
                  backgroundImage: `url(${collection.image})`
                }}
                className="image"
              />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-12">
              <p>{collection.description}</p>
            </div>
            <div className="col-sm-12 col-md-3">
              <Link
                href={{
                  pathname: "/collection",
                  query: { id: collection._id }
                }}
              >
                <div className="btn">
                  <HolaBtn text="перейти" />
                </div>
              </Link>
            </div>
          </div>
          <style jsx>{`
            p {
              padding: 20px 0;
              font-size: 1.3em;
              color: #444;
            }
            .image {
              background-repeat: no-repeat;
              background-size: contain;
              width: 100%;
              height: 500px;
            }
            h3 {
              color: #1a3059;
              text-transform: uppercase;
              padding-left: 1em;
            }   
            @media (max-width: 768px) {
              p{
                font-size: 1.1em;
              }
              .image{
                height: 300px;
              }
            }
          `}</style>
        </div>
      );
    });
  };
  render = () => {
    return (
      <MainPreloader>
        <div>
          <TopMenuNavbar />

          <div className="container pt-3 pb-3">
            {this.renderCollections()}
          </div>
          <style jsx>{`
            h1 {
              text-transform: capitalize;
              color: #ccc;
              text-align: left;
              padding: 10px 0;
              border-bottom: 1px solid #ccc;
            }
          `}</style>
        </div>
      </MainPreloader>
    );
  };
  static getInitialProps({ req }) {
    const baseUrl = req ? `${req.protocol}://${req.get("Host")}` : "";
    return api.collections
      .fetchActual(baseUrl)
      .then(collections => ({ collections }));
  }
}
export default page(connect(state => state)(collections));
