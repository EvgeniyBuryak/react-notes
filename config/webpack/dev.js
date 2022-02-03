const paths = require('../paths')

const webpack = require('webpack');
const { merge } =   require('webpack-merge');

const base = require('./base');

module.exports = merge(base, {
    mode: 'development',
    devtool: 'eval-cheap-source-map', // remove all source maps
    //webpack 5 comes with devServer which loads in development mode
    devServer: {
      // compress: true,
      contentBase: paths.dist,
      // historyApiFallback: true,
      hot: true, // refresh the page after the changed
      open: true,
      port: 3000,
      // clientLogLevel: 'silent'
    },
    plugins: [
      // apply changes only on hot reload
      // new webpack.HotModuleReplacementPlugin()
    ]
  })