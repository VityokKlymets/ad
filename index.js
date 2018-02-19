const collections = require("./src/routes/collections");
const express = require("express");
const bodyParser = require("body-parser");
const next = require("next");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
mongoose.connect("mongodb://localhost/terc");
dotenv.config();
process.env.DIRNAME = __dirname;
app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json({ limit: "50mb", type: "application/json" }));
  server.use("/api/collections", collections);
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(process.env.PORT, err => {
    if (err) throw err;
    console.log(`Server ready on http://localhost:${process.env.PORT}`);
  });
});
