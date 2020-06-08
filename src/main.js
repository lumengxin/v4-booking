import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 移动端适配，配合px2rem-loader使用(postcss-plugin-px2rem：stylus)
// import 'lib-flexible'
import 'assets/js/rem'
import 'components/register'

import 'stylus/reset.styl'
import 'stylus/global.styl'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
