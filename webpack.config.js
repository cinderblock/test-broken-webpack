const config = require('config');
const webpack = require('webpack');


var x = config.get('devServer');

console.log('Before:', x);

// Uncomment to work...
// x = {port: 9000, host: '0.0.0.0'};

console.log('After :', x);

module.exports = {
  context: __dirname,
  entry: "./index.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  devServer: x,
  mode: 'development',
}