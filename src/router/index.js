import Vue from 'vue'
import VueRouter from 'vue-router'
import ddarea from '../views/ddhome/ddarea'

const Home = () => import('../views/ddhome/DdHome')
const Order = () => import('../views/ddorder/DdOrder')
const Share = () => import('../views/ddshare/DdShare')
const DdProfile = () => import('../views/ddprofile/DdProfile')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/order',
    component: Order
  },
  {
    path: '/share',
    component: Share
  },
  {
    path: '/profile',
    component: DdProfile
  },
  {
    path: '/ddarea',
    component: ddarea
  }
]
const router = new VueRouter({
  routes,
})


export default router
