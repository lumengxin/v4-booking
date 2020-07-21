'use strict'

module.exports = {
  publicPath: '/v19/v4-booking',
  outputDir: 'dist/v19/v4-booking',
  assetsDir: 'static',
  devServer: {
    open: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components',
        views: '@/views',
        stylus: '@/assets/stylus',
        assets: '@/assets'
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-plugin-px2rem')({
            // 换算基数
            rootValue: 100,
            // 正则排除文件夹，默认false.想要将ui框架换算，可以开启
            exclude: /(node_modul)/,
            // 是否在媒体查询中转化px
            mediaQuery: false
          })
        ]
      }
    }
  }
}
