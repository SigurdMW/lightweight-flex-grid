const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    "dist": "./src/index.js",
    "docs": "./src/index.js",
  },
  output: {
    path: __dirname,
    filename: "[name]/bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{
            loader: "css-loader" // translates CSS into CommonJS
          }, {
            loader: "postcss-loader" // for autoprefixing
          }, {
            loader: "sass-loader" // compiles Sass to CSS
          }]
        })
      },
      {
        test: /\.css$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }]
      }
    ]
  },
  plugins: [
   new ExtractTextPlugin("[name]/styles.css"),
   new HtmlWebpackPlugin({
     title: 'Simple Flex Grid',
     chunks: ["dist"],
     filename: 'dist/index.html',
     template: 'static/index.html',
   }),
   new HtmlWebpackPlugin({
     title: 'Simple Flex Grid',
     chunks: ["docs"],
     filename: 'docs/index.html',
     template: 'static/index.html',
   }),
 ]
}
