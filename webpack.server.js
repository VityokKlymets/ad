const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack-base");
const webpackNodeExternals = require("webpack-node-externals");

const config = {
  target: "node",
  entry: "./src/index.js",

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build")
  },
  module : {
    rules :[
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["env", "react", "stage-0"]
        }
      }
    ]
  }
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
