const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css"
});

module.exports = {
  context: path.join(process.cwd(), 'src'),
  devtool: 'source-map',
  entry: {
    app: './index.js'
  },
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: '[name].[hash].js',
    publicPath: '/',
    sourceMapFilename: '[name].map'
  },
  resolve: {
    extensions: ['.js'],
    modules: [path.join(process.cwd(), 'src'), 'node_modules']
  },
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['lodash','transform-decorators-legacy'],
            presets: ['env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: "css-loader",
              options: {
                sourceMap: true
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              }
            }
          ],
          fallback: "style-loader"
        })
      }]
  },
  plugins: [
    new LodashModuleReplacementPlugin(),
    new CleanWebpackPlugin(['dist'], { root: process.cwd() }),
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor"
    }),
    new HtmlWebpackPlugin({
      template: 'index.html'
    }),
    extractSass
  ]
};