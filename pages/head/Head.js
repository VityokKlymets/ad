import React from "react";
import Head from "next/head";
export default ({ title }) => {
  return (
    <div>
      <Head>
        <title>{title ? title : "terc design"}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link
          href="https://fonts.googleapis.com/css?family=Handlee"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Encode+Sans+Expanded"
          rel="stylesheet"
        />
        <link href="/static/css/index.css" rel="stylesheet" />
        <link href="/static/css/views.css" rel="stylesheet" />
        <script src="/static/js/three.min.js" />
        <script src="/static/js/OrbitControls.js" />
        <script src="/static/js/ColladaLoader.js" />
      </Head>
    </div>
  );
};
