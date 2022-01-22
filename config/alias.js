const path = require('path')

module.exports = {
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src/'),
      '@constants': path.resolve(__dirname, '../src/constants/'),
      '@types': path.resolve(__dirname, '../src/types/'),
    },
  },
}
