const webpack = require("webpack");
module.exports = function override(config, env) {
  config.resolve.fallback = {
    url: require("url"),
    fs: require("fs"),
    assert: require("assert"),
    crypto: require("crypto-browserify"),
    http: require("stream-http"),
    https: require("https-browserify"),
    os: require("os-browserify/browser"),
    buffer: require("buffer"),
    stream: require("stream-browserify"),
  };
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  );

  return config;
};
