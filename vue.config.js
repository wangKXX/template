const webpack = require("webpack");
const isDev = process.env.NODE_ENV === "development";
const TerserPlugin = require("terser-webpack-plugin");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");
const HappyPack = require("happypack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require("path");

module.exports = {
  css: {
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: process.env.branch === "master",
              drop_debugger: process.env.branch === "master"
            }
          }
        })
      ]
    },
    module: {
      rules: [
        {
          test: /\\.js$/,
          use: [
            "cache-loader",
            {
              loader: "happypack/loader?id=babel",
              options: {
                presets: ["env"],
                plugins: ["istanbul"]
              }
            }
          ],
          exclude: /node_modules/
        },
        {
          test: /\.vue$/,
          use: ["vue-template-es-next"],
          exclude: /node_modules/
        }
      ]
    },
    resolveLoader: {
      modules: ["node_modules", "./loader"]
    },
    plugins: [
      process.env.use_analyzer ? new BundleAnalyzerPlugin() : () => {},
      new HardSourceWebpackPlugin(),
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV),
          branch: JSON.stringify(process.env.branch)
        }
      }),
      new HappyPack({
        id: "babel",
        loaders: ["babel-loader"]
      })
    ]
  },
};
