<template>
  <div class="login_bg">
    <nav-back :theme="theme" style="color: black;" />
    <div id="logo">
      <img src="~assets/img/login/logo.png" alt="" />
    </div>
    <a class="login_btn" @click="tologin()">立&nbsp;即&nbsp;登&nbsp;录</a>
    <a class="login_btn" @click="toregister()">还没账号？立即注册</a>
    <div class="other_login">
      <div class="other"></div>
      <span>其他方式登录</span>
      <div class="other"></div>
    </div>
    <div class="other_choose">
      <a href="">
        <img src="~assets/img/login/qq.png" alt="" />
      </a>
      <a href="">
        <img src="~assets/img/login/wx.png" alt="" />
      </a>
      <a href="">
        <img src="~assets/img/login/wb.png" alt="" />
      </a>
    </div>
  </div>
</template>
<script>
import NavBack from "components/content/navback/NavBack";
export default {
  name: "DdLogin",
  components:{
    NavBack
  },
  data(){
    return{
      theme: { title: "", backrouter: "/profile" },
    }
  },
  methods: {
    tologin() {
      this.$router.replace("/login");
    },
    toregister() {
      this.$router.replace("/register");
    }
  }
};
</script>
<style src="assets/css/lore.css" scoped></style>
