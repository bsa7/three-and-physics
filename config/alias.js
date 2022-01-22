const paths = require('./paths')

module.exports = {
  resolve: {
    alias: {
      '@': paths.src,
      '@constants': paths.src + '/constants/',
      '@types': paths.src + '/types/',
    },
  },
}
