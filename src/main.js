import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.axios = axios
axios.defaults.baseURL = "http://localhost:8080/"

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store,
  axios
}).$mount('#app')