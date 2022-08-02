const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  mode: "development",
  target: "web",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"),
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },

  devtool: "source-map",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3002,
    open: true,
    hot: true,
    compress: true, 
    historyApiFallback: true,
    client: {
      overlay: false,
    },
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules\/.*/,
        use: {
          loader: "babel-loader",
          options: {
            sourceType: "unambiguous",
            presets: [
              // ["@babel/preset-env", { "modules": 'cjs' }], // { "modules": 'cjs' } is the same as using  plugin-transform-modules-commonjs
              ["@babel/preset-react"]],
            plugins: [
              //transforms es6 modules (esm) into commonjs (cjs)
              [
                 "@babel/plugin-transform-modules-commonjs",
              ],
            ],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|png|gif)$/i,
        type: "asset/resource",
      },
      // to resolve mjs files
      {
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App",
      template: "./src/index.html",
    }),
    new NodePolyfillPlugin(),
  ],
};
