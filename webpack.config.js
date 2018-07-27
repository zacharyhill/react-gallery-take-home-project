const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
            presets: ['env', 'react', 'stage-2'],
        }
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.svg$/,
        loader: 'url-loader',
        options: {
          limit: 1000000, // inline files below 1MB
        }
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
  ],
  resolve: {
    extensions: [".webpack.js", ".web.js", ".js", ".json", ".jsx"], // resolve all defaults + .jsx extension
  }
};