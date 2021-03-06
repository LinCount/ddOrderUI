import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.axios = axios
axios.defaults.baseURL = "/api"
// axios.defaults.baseURL = "http://112.74.58.188:8080/"
//3000实验端口
// axios.defaults.baseURL = "http://localhost:3000/"

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store,
  axios
}).$mount('#app')

