const path = require('path')
const webpack = require('webpack')

const webpackConfig = {
  resolve: {
    extensions: ['.js', '.ts'],
  },
  optimization: {
    minimize: false,
    moduleIds: 'deterministic',
  },
  entry: './src/js/index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
  },
  externals: {
    jquery: '$',
    diff2html: 'Diff2Html',
    diff: 'Diff',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader',
      },
    ],
  },
}

module.exports = webpackConfig
