const merge = require('webpack-merge')
const TerserPlugin = require('terser-webpack-plugin')
const UserScriptMetaDataPlugin = require('userscript-metadata-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

const metadata = require('./metadata')
const webpackConfig = require('./webpack.config.base')

const cfg = merge({}, webpackConfig, {
  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: false, // Must be set to true if using source-maps in production
      }),
    ],
  },
  output: {
    filename: metadata.name + '.prod.user.js',
  },
  plugins: [
    new UserScriptMetaDataPlugin({
      metadata,
    }),
  ],
})

if (process.env.npm_config_report) {
  cfg.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = cfg
