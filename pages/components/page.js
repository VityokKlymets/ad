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
            <Page {...this.props}/>
          </Provider>
        </div>
      );
    }
    static async getInitialProps(ctx) {
      const childProps = await Page.getInitialProps(ctx);
      return childProps;
    }
  };
};
export default page;
