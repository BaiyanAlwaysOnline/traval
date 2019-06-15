// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/styles/border.css'
import '@/assets/styles/reset.css'
import fastClick from 'fastclick'

// 阻止启动生产消息，常用作指令。
Vue.config.productionTip = false

fastClick.attach(document.body)

/* eslint-disable no-new */
console.log(App)
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
