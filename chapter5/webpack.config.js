const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    js: './src/main.js'
  },
  output: {
    path: './public',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  devServer: {
    contentBase: './public',
    inline: true,
    port: 8080,
    historyApiFallback: true,
    stats: {
      version: false,
      hash: false,
      chunkModules: false,
    },
  },
  plugins: [
    new ExtractTextPlugin('bundle.css'),
  ],
  postcss: [
    require('postcss-easy-import')({ glob: true }),
  ],
  devtool: 'source-map',
};
