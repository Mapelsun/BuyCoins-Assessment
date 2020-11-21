const path = require("path");
const Dotenv = require("dotenv-webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // entry: ["./src/js/index.js", "./src/assets/main.scss"],
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
      // {
      //   test: /\.s?css$/,
      //   use: [
      //     "style-loader",
      //     MiniCssExtractPlugin.loader,
      //     "css-loader",
      //     {
      //       loader: "postcss-loader",
      //     },
      //     "sass-loader",
      //   ],
      // },
      // {
      //   test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
      //   loader: "file-loader",
      // },
      // {
      //   test: /\.(png|jpe?g|gif|webm|mp4|svg)$/,
      //   loader: "file-loader",
      //   options: {
      //     name: "[name][contenthash:8].[ext]",
      //     outputPath: "assets/img",
      //     esModule: false,
      //   },
      // },
    ],
  },

  plugins: [
    // new CleanWebpackPlugin(),
    // new MiniCssExtractPlugin({
    //   filename: "[name].[contenthash:8].css",
    //   chunkFilename: "[name].[contenthash:8].css",
    // }),
    new htmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      favicon: "./public/images/github-favicon.svg",
    }),
    new Dotenv({
      path: "./.env",
      safe: true,
    }),
  ],

  // optimization: {
  //   moduleIds: "deterministic",
  //   runtimeChunk: "single",
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         test: /[\\/]node_modules[\\/]/,
  //         name: "vendors",
  //         priority: -10,
  //         chunks: "all",
  //       },
  //     },
  //   },
  // },

  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    historyApiFallback: true,
  },
};

