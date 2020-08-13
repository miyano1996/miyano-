import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'//elm

//eelement组件影
// import ElementUI from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
//封装的axios方法
import api from './http/api/api.js';
Vue.prototype.$api = api;

Vue.config.productionTip = false

new Vue({
  router,
  store,
  // el:'#app',
  render: h => h(App)
}).$mount('#app')
