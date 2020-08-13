import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import api from './http/api/api.js'
import Echarts from "echarts"
//封装的axios

Vue.prototype.$api = api;

Vue.prototype.$api = api;
Vue.prototype.$echarts = Echarts;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
