const body = require("body-parser");
const co = require("co");
const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const PORT = 3000;

co(function*() {
  yield app.prepare();
  const server = express();
  server.use(body.json());
  server.use((req, res, next) => {
    next();
  });
  server.get("*", (req, res) => {
    return handle(req, res);
  });
  server.listen(PORT);
  console.log(`Listening on ${PORT}`);
}).catch(error => console.error(error.stack));