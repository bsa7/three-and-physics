const webpackConfig = require('./webpack.config')

config = {
  ...webpackConfig,
  devtool: 'inline-source-map',
  mode: 'development',
}

module.exports = config
