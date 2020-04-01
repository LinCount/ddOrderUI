import Vue from 'vue'
import VueRouter from 'vue-router'

/*
//修复重复点击BUG，未修复
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}*/
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
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})


export default router
