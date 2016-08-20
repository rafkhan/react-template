'use strict';

var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var entryPoints = ['./src/index.jsx'];



module.exports = {
  entry: {
    'budrunners': entryPoints
  },

  output: {
    path: 'dist',
    filename: '[name]-bundle.js',
    pathinfo: true
  },

  resolve: {
    extensions: ['', '.jsx', '.es6', '.js', '.scss']
  },

  plugins: [new HtmlWebpackPlugin({
    template: 'src/index.html',
    inject: 'body'
  }),
  
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  })],

  devtool: 'source-map',

  module: {
    loaders: [{
      test: /\.es6$/,
      loader: 'babel',
      exclude: /node_modules/
    },
    {
      test: /\.jsx$/,
      loader: 'jsx!babel',
      exclude: /node_modules/
    },
    {
      test: /\.js$/,
      loader: 'jsx!babel',
      exclude: /node_modules/
    },
    {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
    },

    { test: /\.css$/, loader: "style-loader!css-loader" },

    { 
      test: /\.(png|jpg)$/,
      include: path.join(__dirname, 'img'),
      loader: 'url-loader'
     } // inline base64 URLs for <=10k images, direct URLs for the rest
    ]
  }
};
