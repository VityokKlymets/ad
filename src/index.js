import "babel-polyfill";
import express from "express";
import dotenv from "dotenv";
import renderer from "./utils/renderer";
import createStore from "./utils/createStore";
import Routes from "./client/Routes";
import { matchRoutes } from "react-router-config";
dotenv.config();
const app = express();
app.use(express.static("public"));

app.get("*", (req, res) => {
  const store = createStore();

  const html = renderer(req, store);
  res.send(html);
});
app.listen(process.env.SERVER_PORT, () => {
  console.log(`Listen on ${process.env.SERVER_PORT}`);
});
