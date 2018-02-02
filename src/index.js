import express from "express";
import dotenv from "dotenv";
import HomePage from "./client/components/pages/HomePage";
import React from "react";
import { renderToString } from "react-dom/server";
dotenv.config();
const app = express();
app.use(express.static("public"));

app.get("/", (req, res) => {
  const content = renderToString(<HomePage />);
  const html = `
  <!DOCTYPE html><html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Title</title>
  </head>
    <body>
      <div id="root">${content}</div>
      <script src="bundle.js"></script>
    </body>
  </html>
  `;
  res.send(html);
});
app.listen(process.env.SERVER_PORT, () => {
  console.log(`Listen on ${process.env.SERVER_PORT}`);
});
