const path = require('path');

module.exports = {
  entry: ['./js/data.js', './js/util.js', './js/main.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname),
    iife: true,
  },
  devtool: false,
};
