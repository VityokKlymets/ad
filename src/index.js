import 'babel-polyfill';
import express from "express";
import dotenv from "dotenv";
import renderer from "./utils/renderer";
import store from './client/store/store';

dotenv.config();
const app = express();
app.use(express.static("public"));

app.get("*", (req, res) => {
  const html = renderer(req,store);
  res.send(html);
});
app.listen(process.env.SERVER_PORT, () => {
  console.log(`Listen on ${process.env.SERVER_PORT}`);
});
