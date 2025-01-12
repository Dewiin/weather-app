const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  mode: "development", // Development mode
  devtool: "inline-source-map", // Detailed source maps for debugging
  devServer: {
    static: "./dist", // Serve files from "dist" directory
    open: true, // Automatically open the browser
    hot: true, // Enable Hot Module Replacement
  },
});
