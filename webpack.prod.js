const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "production", // Production mode
  devtool: "source-map", // Generate separate source maps
});
