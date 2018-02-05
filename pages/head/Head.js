import React from 'react'
import Head from "next/head";
export default ({title}) => {
  return (
   <div>
       <Head>
          <title>{title ? title : 'terc design'}</title>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <link
            href="https://fonts.googleapis.com/css?family=Handlee"
            rel="stylesheet"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
            rel="stylesheet"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Encode+Sans+Expanded"
            rel="stylesheet"
          />
          <link href="/static/css/bootstrap-grid.min.css" rel="stylesheet" />
          <link href="/static/css/index.css" rel="stylesheet" />
          <link href="/static/css/headers.css" rel="stylesheet" />
          <link href="/static/css/inputs.css" rel="stylesheet" />
          <link href="/static/css/navbars.css" rel="stylesheet" />
          <link href="/static/css/preloaders.css" rel="stylesheet" />
          <link href="/static/css/views.css" rel="stylesheet" />
        </Head>
   </div>
  )
}