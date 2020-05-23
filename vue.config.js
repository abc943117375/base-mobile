const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
  return path.join(__dirname, dir)
}
// 启动的开发端口号,可以根据自己的需求设置
const port = process.env.port || process.env.npm_config_port || 8888 // dev port

const name = defaultSettings.title

module.exports = {
  // 打包到哪个文件夹
  publicPath: '/xwx-web/',
  // 打包后的文件夹名
  outputDir: 'dist',
  // 打包后的静态资源文件夹
  assetsDir: './static/',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: false,
    overlay: { // 当出现编译器错误或警告时，在浏览器中显示全屏覆盖层。默认禁用。
      warnings: false, // 不显示警告
      errors: true  // 显示错误
    },
    // proxy: {
    //   [process.env.VUE_APP_BASE_API]: {
    //     target: `http://127.0.0.1:${port}/mock`, // 目标代理地址
    //     changeOrigin: true,
    //     pathRewrite: {
    //       ['^' + process.env.VUE_APP_BASE_API]: ''
    //     }
    //   }
    // }
  },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
  // 懒加载js文件
  chainWebpack: config => {
    config.plugins.delete("prefetch")
  }
}