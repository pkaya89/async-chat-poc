import path from "path";
import { Configuration } from "webpack";
import * as webpack from "webpack";
import * as webpackDevServer from "webpack-dev-server";
const HtmlWebpackPlugin = require("html-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

const disableFullyQualifiedNameResolutions = {
  test: /\.m?js/,
  resolve: {
    fullySpecified: false,
  },
};

const babelLoaderConfiguration = {
  test: /\.(ts|js)x?$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: [
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript",
      ],
    },
  },
};

const config: Configuration = {
  entry: "./src/index.tsx",
  mode: "development",
  module: {
    rules: [babelLoaderConfiguration, disableFullyQualifiedNameResolutions],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App",
      filename: "index.html",
      template: "./index.html",
    }),
    new NodePolyfillPlugin()
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devtool: "source-map",
  devServer: {
    hot: true,
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    compress: true,
    port: 3003,
    client: {
      overlay: {
        warnings: false,
        errors: true,
      },
    },
  },
};

export default config;
