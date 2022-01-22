const aliasConfig = require('./alias')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const paths = require('./paths')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: [paths.src + '/index.ts'],
  },
  module: {
    rules: [
      // JavaScript: Use Babel to transpile JavaScript files
      { test: /\.tsx?$/, use: 'ts-loader', exclude: /node_modules/ },

      // Images: Copy image files to build folder
      { test: /\.(?:ico|gif|png|jpg|jpeg)$/i, type: 'asset/resource' },

      // Fonts and SVGs: Inline files
      { test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, type: 'asset/inline' },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: paths.src + '/index.template.html',
      filename: 'index.html',
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: paths.dist,
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
}
