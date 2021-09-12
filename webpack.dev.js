const path = require("path");
const common = require("./webpack.common");
const { merge } = require("webpack-merge");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(common, {
  mode: "development",
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
      new HtmlWebpackPlugin({
          filename: 'index.html',
          inject: 'head',
          template: './src/pages/index.html',
      }),
      new HtmlWebpackPlugin({
        filename: 'work.html',
        inject: 'head',
        template: './src/pages/work/work.html',
    }),
    new HtmlWebpackPlugin({
      filename: 'connect.html',
      inject: 'head',
      template: './src/pages/connect/connect.html',
  }),
      new BrowserSyncPlugin({
        host: 'localhost',
        port: 3100,
        proxy: 'http://localhost:3000',
        open: false,
        tunnel: true,
        online: true
      })
    ],
  module: {
    rules: [
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: "babel-loader",
              options: {
                presets: ['@babel/preset-env']
              }
            }
          },
        {
            test: /\.(sa|sc|c)ss$/,
            use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
        }
    ]
  },
	devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },

		port: 3000
	  }
});