"use strict";
var webpack = require('webpack');
var path = require('path');

module.exports = {

  context: __dirname,

  entry: [
    'zone.js',
    'reflect-metadata',
    '@angular/core',
    '@angular/platform-browser-dynamic'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: "vendor.bundle.js",
    library: 'vendor'
  },


  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    }]
  },

  plugins: [
    new webpack.DllPlugin({
      name: 'vendor',
      path: 'dist/vendor-manifest.json'
    }),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: false
      },
      mangle: true,
      comments: false
    })
  ],

  resolve: {
    alias: {
      'reflect-metadata': 'reflect-metadata/Reflect.js'
    }
  }
};