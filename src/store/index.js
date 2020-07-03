import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    //购物车数据 【 {number,item:{菜名...},
    //             {number,item:{菜名...}
    //          】
    carfood: [],
    //购物车总量
    num: 0,
    //购物车总价
    user: {},
    token: null,
    sumprice: 0,
    set: true,
    nologin: true,
    userpofile: {
      username: "",
      pwd: "",
      uid:''
    }
  },
  mutations: {
    // 修改购物车总数
    changenum(state, a) {
      state.num += a;
    },
    loginState(state) {
      state.nologin = false;
    },
    noLoginState(state) {
      state.nologin = true;
    },
    //token
    loginCommit(state, data) {
      localStorage.token = data;
      state.token = data;
    },
    loginOut(state) {
      localStorage.removeItem("token");
      state.token = null;
    },
    //记录本地用户数据{
    adduser(state, user) {
      state.userpofile.username = user.username;
      state.userpofile.pwd = user.pwd;
      state.userpofile.uid = user.uid;
    },

    //控件菜单隐藏
    hiddenMainBar(state) {
      state.set = false;
    },
    showMainBar(state) {
      state.set = true;
    },
    addfood(state, data) {
      //加入购物车
      state.carfood.push(data);
      // 算购物车总价
      state.sumprice = 0;
      for (let i = 0; i < state.carfood.length; i++) {
        let a = state.carfood[i].item.price * state.carfood[i].number;
        state.sumprice += a;
      }
      // console.log(state.carfood)
      // console.log(state.sumprice)
    },
    clearcar(state) {
      state.carfood = [];
      state.num = 0;
      state.sumprice = 0;
    }
  },
  actions: {},
  getters: {}
});

export default store;
