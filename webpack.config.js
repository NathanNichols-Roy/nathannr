var debug = process.env.NODE_ENV !== "production";
var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: debug ? 'inline-source-map' : null,
  entry: './js/main.js',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015'],
          plugins: ['transform-class-properties']
        }
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'src'),
    filename: 'main.min.js'
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mange: false, sourcemap: false})
  ],
  resolve: {
    modulesDirectories: ['node_modules', 'js'],
    extensions: ['', '.js']
  }
};
