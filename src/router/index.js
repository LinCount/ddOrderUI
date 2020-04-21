import Vue from 'vue'
import VueRouter from 'vue-router'
import ddarea from '../views/ddhome/ddarea'

const Home = () => import('../views/ddhome/DdHome')
const Order = () => import('../views/ddorder/DdOrder')
const Share = () => import('../views/ddshare/DdShare')
const DdProfile = () => import('../views/ddprofile/DdProfile')
const SetProfile = () => import('../views/ddprofile/childprofile/SetProfile')
const DdLogin = () =>import('../views/ddlogin/DdLogin')
const Login = () =>import('../views/ddlogin/Lore/Login')
const Register = () =>import('../views/ddlogin/Lore/Register')
const ForgetPass = () =>import('../views/ddlogin/Lore/ForgetPass')

// 1.安装插件
Vue.use(VueRouter)

// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/indexlogin'
  },
  {
    path:'/indexlogin',
    component:DdLogin
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/register',
    component:Register
  },
  {
    path:'/forgetpass',
    component:ForgetPass
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
  },
  {
    path: '/profile/set',
    component:SetProfile
  }

]
const router = new VueRouter({
  routes,
})


export default router
