const { defineConfig } = require('@vue/cli-service');
const { baseName, proxyUrl, title  } = require('./base.config.js');

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
    chainWebpack: config => {
      config.plugin('html').tap(args => {
        args[0].title = title;
  
        return args;
      })
    },
    devServer: {
      host: "0.0.0.0",
      port: 8080,
      proxy: {
        ["^/" + baseName]: {
          // 后台接口域名 联调更改此处IP即可
          target: proxyUrl,
          pathRewrite: {
            ["^/" + baseName]: "",
          },
        }
      }
    }
})