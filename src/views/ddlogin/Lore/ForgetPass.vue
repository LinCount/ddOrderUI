<template>
  <div class="register">
    <nav-back :theme="theme" style="background: #21a9f5;color:#ffffff" />
    <div class="content">
      <form action="">
        <div class="message">
          <input
            type="tel"
            v-model="forgetForm.username"
            placeholder="输入手机号"
          />
          <!-- <input type="text" placeholder="输入验证码"/> -->
          <input
            type="password"
            v-model="forgetForm.pwd"
            placeholder="请输入新密码"

          />
          <input
            type="password"
            v-model="forgetForm.repwd"
            placeholder="请再次输入密码"
          />
          <!-- <a class="code" href="">获取验证码</a> -->
          <div class="icons">
            <b style="margin-top:2%"
              ><img src="~assets/img/login/zc-1.jpg" alt=""
            /></b>
            <!-- <b style="margin-top:18px"><img src="~assets/img/login/zc-2.jpg" alt=""/></b> -->
            <b style="margin-top:6%"
              ><img src="~assets/img/login/zc-3.jpg" alt=""
            /></b>
            <b style="margin-top:12%"
              ><img src="~assets/img/login/zc-3.jpg" alt=""
            /></b>
          </div>
        </div>
        <button class="submit"  @click="forgetpassword()">确认提交</button>
      </form>
    </div>
  </div>
</template>
<script>
import NavBack from "components/content/navback/NavBack";
import { forGetPass } from "network/login";
export default {
  name: "ForgetPass",
  components: {
    NavBack
  },
  data() {
    return {
      theme: { title: "忘记密码", backrouter: "/login" },
      forgetForm: {
        username: "",
        pwd: "",
        repwd: ""
      }
    };
  },
  methods: {
    indeback() {
      this.$router.replace("/login");
    },
    forgetpassword() {
      if (this.forgetForm.username === "" || this.forgetForm.pwd === "") {
        this.$message({
          type: "warning",
          message: "手机号或密码不能为空"
        });
      } else if (this.forgetForm.pwd !== this.forgetForm.repwd) {
        this.$message({
          type: "warning",
          message: "两次输入的密码不一致"
        });
      } else {
        const username = this.forgetForm.username;
        const pwd = this.forgetForm.pwd;
        forGetPass(username, pwd).then(
          res => {
            // console.log(res.data.msg)

            if (res.data.code === 200) {
              this.$message({
                type: "success",
                message: "修改成功"
              });
            } else {
              this.$message({
                type: "warning",
                message: "修改失败，用户不存在或密码正在使用"
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
.back /deep/ .login {
  color: #ffffff;
}
.message {
  background: none;
  padding-top: 10%;
}
.message input {
  width: 83%;
  margin: 0 4%;
}
.content form input:not(:nth-child(6)) {
  border: 0;
  margin-bottom: 8%;
}
.message .icons b {
  top: 14.5%;
  left: 11%;
}
.message .icons b:nth-child(2) {
  top: 37%;
  left: 10%;
}
.message .icons b:nth-child(3) {
  top: 60%;
}
.message .icons b:nth-child(4) {
  top: 82%;
}
.code {
  top: 33.475%;
  right: 7.5%;
  background: #21a9f5;
  color: #ffffff;
  padding: 3.635% 5%;
}
</style>
