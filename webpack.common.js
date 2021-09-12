const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    index: "./src/assets/js/main.js"
  },
  module: {
    rules: [
     
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        type: 'asset/resource'
    },
    {
      test: /\.html$/,
      use: ["html-loader"]
    }
    ]
  }
};