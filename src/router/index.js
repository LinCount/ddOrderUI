import Vue from 'vue';
import VueRouter from "vue-router";
import ddarea from "../views/ddhome/ddarea";
import test from "../views/ddhome/test";
import shop from "../views/ddhome/shop";
// import shopcar from '../views/ddhome/shopcar'

const Home = () => import("../views/ddhome/DdHome");

const Order = () => import("../views/ddorder/DdOrder");

const Share = () => import("../views/ddshare/DdShare");
const Apply = () => import("../views/ddshare/childshare/Apply");
const Nutrition = () => import("../views/ddshare/childshare/Nutrition");
const Random = () => import("../views/ddshare/childshare/Random");

const DdProfile = () => import("../views/ddprofile/DdProfile");
const SetProfile = () => import("../views/ddprofile/childprofile/SetProfile");

const DdLogin = () => import("../views/ddlogin/DdLogin");
const Login = () => import("../views/ddlogin/Lore/Login");
const Register = () => import("../views/ddlogin/Lore/Register");
const ForgetPass = () => import("../views/ddlogin/Lore/ForgetPass");

// 1.安装插件
Vue.use(VueRouter);

// 2.创建router
const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/indexlogin",
    component: DdLogin
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/register",
    component: Register
  },
  {
    path: "/forgetpass",
    component: ForgetPass
  },

  {
    path: "/home",
    component: Home,
  },
  {
    path: "/order",
    component: Order,

  },
  {
    path: "/share",
    component: Share,

  },
  {
    path: "/share/apply",
    name:'apply',
    component: Apply,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/share/nutrition",
    name:'nutrition',
    component: Nutrition,
    meta: {
      requiresAuth: true
    }
  },

  {
    path: "/share/random",
    component: Random,
    name:'random',
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/profile",
    name:"profile",
    component: DdProfile
  },
  {
    path: "/ddarea",
    component: ddarea
  },
  {
    path: "/profile/set",
    component: SetProfile
  },
  {
    path: "/shop/:id",
    component: shop
  },
  {
    path: "/test",
    component: test
  }
  // {
  //   path: '/shopcar',
  //   component:shopcar
  // },
];

const router = new VueRouter({
  routes
});

router.beforeEach((to, from, next) => {
  
  const token =localStorage.token
  if (to.meta.requiresAuth) {
    if (!token) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router;
