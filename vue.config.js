'use strict'

module.exports = {
  devServer: {
    open: true
  },
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components',
        views: '@/views',
        stylus: '@/assets/stylus'
      }
    }
  }
}