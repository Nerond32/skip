const webpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");
const merge = require("webpack-merge")

const commonConfig = require("./webpack/webpack.common.js");
const devConfig = require("./webpack/webpack.dev.js")
const config = merge.smart(commonConfig, devConfig)
const options = {
  contentBase: "./dist",
  hot: true,
  host: "localhost"
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(5000, "localhost", () => {
  console.log("dev server listening on port 5000");
});
