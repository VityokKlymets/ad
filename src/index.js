import express from "express";
import dotenv from "dotenv";
import HomePage from "./components/pages/HomePage";
import React from 'react';
import { renderToString } from "react-dom/server";
dotenv.config();
const app = express();
app.get("/", (req, res) => {
  res.send(renderToString(<HomePage />));
});
app.listen(process.env.SERVER_PORT, () => {
  console.log(`Listen on ${process.env.SERVER_PORT}`);
});
