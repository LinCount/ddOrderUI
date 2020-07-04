<template>
  <div class="register">
    <nav-back
      :theme="theme"
      style="background: #21a9f5;color:#ffffff"
      class="back"
    />
    <div class="content">
      <div class="point">
        <span>注册成功后，手机号也可为登录账号。</span>
      </div>
      <form>
        <div class="message">
          <input
            type="tel"
            placeholder="输入手机号"
            v-model="loginForm.username"
          />
          <input
            type="password"
            placeholder="请输入6-25位密码"
            v-model="loginForm.repwd"
          />
          <input
            type="password"
            placeholder="请再次输入密码"
            v-model="loginForm.pwd"
          />
          <!-- <input
            type="text"
            placeholder="输入验证码"
          /> -->
          <div class="icons">
            <b style="margin-top:5px"
              ><img src="~assets/img/login/zc-1.jpg" alt=""
            /></b>
            <b style="margin-top:20px"
              ><img src="~assets/img/login/zc-3.jpg" alt=""
            /></b>
            <b style="margin-top:45px"
              ><img src="~assets/img/login/zc-3.jpg" alt=""
            /></b>
          </div>
          <!-- <a class="code-one" href="" required>获取验证码</a> -->
        </div>
      </form>
      <div class="agree">
        <input type="checkbox" v-model="loginForm.agree" /><span
          >&nbsp;同意&nbsp;</span
        ><a href="">《注册协议》</a>
      </div>
      <button class="submit" @click="register()">注册</button>
    </div>
  </div>
</template>
<script>
import NavBack from "components/content/navback/NavBack";

import { register } from "network/login";
export default {
  name: "Register",
  components: {
    NavBack
  },
  data() {
    return {
      theme: { title: "欢迎注册", backrouter: "/indexlogin" },
      loginForm: {
        username: "",
        pwd: "",
        repwd: "",
        agree: ""
      }
    };
  },
  created() {
    this.$store.commit("hiddenMainBar");
  },
  methods: {
    backindex() {
      this.$router.replacf("/indexlogin");
    },
    register() {
      if (this.loginForm.username === "" || this.loginForm.pwd === "") {
        this.$message({
          type: "warning",
          message: "手机号或密码不能为空"
        });
      } else if (!this.loginForm.agree) {
        this.$message({
          type: "warning",
          message: "请详细阅读并同意注册协议"
        });
      } else if (this.loginForm.pwd !== this.loginForm.repwd) {
        console.log(this.loginForm.repwd);

        this.$message({
          type: "warning",
          message: "两次输入的密码不一致"
        });
      } else {
        const username = this.loginForm.username;
        const pwd = this.loginForm.pwd;
        register(username, pwd).then(
          res => {
            // console.log(res.data.msg)

            if (res.data.msg == "注册成功") {
              this.$message({
                type: "success",
                message: "注册成功"
              });
            } else {
              this.$message({
                type: "warning",
                message: "用户名已存在"
              });
            }

            setTimeout(() => {
              this.$router.replace("/login");
            }, 1000);
          },
          err => {
            console.log(err);
          }
        );
      }
    }
  }
};
</script>
<style src="assets/css/lore.css" scoped>
.back >>> .login {
  font-family: 华文楷体;
}
</style>
