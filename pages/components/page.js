import React from "react";
import { Provider } from "react-redux";
import Head from "../head/Head";
import store from "./store/store";
const page = Page => {
  return class PageWrapper extends React.Component {
    render() {
      return (
        <div>
          <Head />
          <Provider store={store}>
            <Page />
          </Provider>
        </div>
      );
    }
    static async getInitialProps({ req }) {
      if (Page.getInitialProps) return Page.getInitialProps(req);
      else {
        return {};
      }
    }
  };
};
export default page;
