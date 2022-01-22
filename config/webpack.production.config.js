const webpackConfig = require('./webpack.config')

config = {
  ...webpackConfig,
  mode: 'production',
}

module.exports = config
