const path = require('path');
const Visualizer = require('webpack-visualizer-plugin');

module.exports = {
  context: path.join(__dirname, './src'),
  entry: './index.js',
  output: {
    filename: 'json-form.js',
    path: path.resolve(__dirname, './dist')
  },
  devServer: {
    contentBase: './dist',
    hot: true
  },

  plugins: [

    new Visualizer(),

  ],
  mode: 'production'
};