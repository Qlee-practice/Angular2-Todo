"use strict";

var glob = require('glob-all');
var path = require('path');
var webpack = require('webpack');

var htmlFiles = glob.sync(__dirname + '/app/**/*.html');
var jsFiles = [path.join(__dirname, 'app', 'application.js')];
var cssFiles = glob.sync(__dirname + '/app/**/*.scss');
var files = htmlFiles.concat(jsFiles).concat(cssFiles);

var ExtractTextPlugin = require("extract-text-webpack-plugin");

// var extractSASS = new ExtractTextPlugin('[path][name].css');
//

module.exports = {

  context: __dirname,

  entry: files,

  output: {
    path: __dirname + "/dist",
    filename: "app.js"
  },


  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    }, {
      test: /[^index]\.html$/,
      loader: 'file-loader?name=[path][name].[ext]'
    }, {
      test: /index\.html$/,
      loader: 'file-loader?name=[name].[ext]'
    }, {
      test: /\.ts$/,
      loader: 'ts-loader'
    }, {
      test: /\.scss$/,
      loader: ['file-loader?name=[path][name].css', 'sass-loader']
    }]
  },

  plugins: [
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: require('./dist/vendor-manifest.json')
    }),
    // new ExtractTextPlugin('style.css')
  ],

  resolve: {

    modules: [
      path.join(__dirname, 'app'),
      path.join(__dirname, 'node_modules')
    ],

    alias: {
      'reflect-metadata': 'reflect-metadata/Reflect.js'
    }
  },

  devServer: {
    hot: true,
    contentBase: 'dist',

    historyApiFallback: true
  }

};