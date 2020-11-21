const path = require("path");
const Dotenv = require("dotenv-webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/app.js",
  output: {
    filename: "[name].[contenthash:8].js",
    path: path.resolve(__dirname, "public/scripts"),
    chunkFilename: "[name].[contenthash:8].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  plugins: [
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      favicon: "./public/images/github-favicon.svg",
    }),
    new Dotenv({
      path: "./.env",
      safe: true,
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    historyApiFallback: true,
  },
};

