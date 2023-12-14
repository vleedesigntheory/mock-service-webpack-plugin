const { defineConfig } = require('@vue/cli-service');
const { baseName, proxyUrl, title, mockName, mockUrl  } = require('./base.config.js');
const path = require('path')

// 获取端口
const filterPort = (url) => parseFloat(url.split(":").pop());

const MockServiceWebpackPlugin = require("../index");

const plugins = [],
  proxy = {
    ["^/" + baseName]: {
      // 后台接口域名 联调更改此处IP即可
      target: proxyUrl,
      pathRewrite: {
        ["^/" + baseName]: "",
      },
    }
  };


if (process.env.VUE_APP_MOCK) {
  plugins.push(
    new MockServiceWebpackPlugin({
      source: path.resolve(process.cwd(), "./src/mock"),
      port: filterPort(mockUrl),
    })
  );
  proxy["^/" + mockName] = {
    target: mockUrl,
    ws: true,
    pathRewrite: {
      ["^/" + mockName]: "",
    },
  };
}

module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: './',
    outputDir: "dist",
    lintOnSave: false,
    productionSourceMap: false,
    css: {
      loaderOptions: {
        // 向 CSS 相关的 loader 传递选项
        less: {
        
        }
      },
    },
    // webpack config
    configureWebpack: {
      plugins,
    },
    chainWebpack: config => {
      config.plugin('html').tap(args => {
        args[0].title = title;
  
        return args;
      })
    },
    devServer: {
      host: "0.0.0.0",
      port: 8080,
      proxy
    }
})