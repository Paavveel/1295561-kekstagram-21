const path = require('path');

module.exports = {
  entry: ['./js/.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname),
    iife: true,
  },
  devtool: false,
};
