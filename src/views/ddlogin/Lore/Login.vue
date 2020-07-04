<template>
  <div>
    <div class="login_bg">
      <nav-back :theme="theme" style="color: black;" />
      <div id="logo">
        <img src="~assets/img/login/logo.png" alt="" />
      </div>
      <form action="">
        <div class="userName">
          <span>账号：</span>
          <input
            type="text"
            name="name"
            placeholder="请输入用户名"
            v-model="loginForm.username"
          />
        </div>
        <div class="passWord">
          <span>密码：</span>
          <input
            type="password"
            name="password"
            placeholder="请输入密码"
            v-model="loginForm.pwd"
          />
        </div>
        <div class="choose_box">
          <div>
            <input type="checkbox" checked="checked" name="checkbox" />
            <span>记住密码</span>
          </div>
          <a @click="forgetpassword()">忘记密码</a>
        </div>
        <button class="login_btn" @click="tabback">
          登&nbsp;&nbsp;录
        </button>
      </form>
      <div class="other_login" style="margin-top:20px">
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
  </div>
</template>
<script>
import NavBack from "components/content/navback/NavBack";

import { login } from "network/login";

export default {
  name: "Login",
  components: {
    NavBack
  },
  created() {},
  data() {
    return {
      theme: { title: "欢迎登录", backrouter: "/indexlogin" },
      loginForm: {
        username: "",
        pwd: ""
      }
    };
  },
  methods: {
    tabback() {
      if (this.loginForm.username === "" || this.loginForm.pwd === "") {
        this.$message({
          type: "warning",
          message: "请输入用户名或密码"
        });
      } else {
        const username = this.loginForm.username;
        const pwd = this.loginForm.pwd;
        login(username, pwd).then(
          res => {
            console.log(res);
            if (res.data.data.token) {
              const uid = res.data.data.uid;
              // 存储在本地的localStograge中，可以使用cookies/local/sessionStograge
              this.$store.commit("loginCommit", res.data.data.token);
              this.$store.commit("adduser", { username, pwd, uid });
            }
            if (res.data.code === 200) {
              setTimeout(() => {
                this.$store.commit("loginState");
                this.$store.commit("showMainBar");
                this.$router.replace("/home");
              }, 1000);
            } else {
              this.$message({
                type: "warning",
                message: "用户名或密码错误"
              });
            }
          },
          err => {
            console.log(err);
          }
        );
      }
    },

    forgetpassword() {
      this.$router.replace("/forgetpass");
    }
  }
};
</script>
<style src="assets/css/lore.css" scoped></style>
