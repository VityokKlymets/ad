const express = require("express");
const bodyParser = require("body-parser");
const next = require("next");
const dotenv = require("dotenv");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

dotenv.config();

app.prepare().then(() => {
  const server = express();

  server.use(bodyParser.json());

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(process.env.PORT, err => {
    if (err) throw err;
    console.log(`Server ready on http://localhost:${process.env.PORT}`);
  });
});
