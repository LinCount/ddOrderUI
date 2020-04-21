<template>
  <div>

    <div id="login"></div>
    <div class="login_bg">
      <div class="regTop">
      <span>用户登录</span>
      <a class="back" @click="backindex()">&lt;&nbsp;返回</a>
    </div>
      <div id="logo">
        <img src="~assets/img/login/logo.png" alt="" />
      </div>
      <form action="">
        <div class="userName">
          <lable>账号：</lable>
          <input
            type="text"
            name="name"
            placeholder="请输入用户名"
            pattern="[0-9A-Za-z]{6,16}"
            required
          />
        </div>
        <div class="passWord">
          <lable>密码：</lable>
          <input
            type="password"
            name="password"
            placeholder="请输入密码"
            pattern="[0-9A-Za-z]{6,25}"
            required
          />
        </div>
        <div class="choose_box">
          <div>
            <input type="checkbox" checked="checked" name="checkbox" />
            <lable>记住密码</lable>
          </div>
          <a @click="forgetpassword()">忘记密码</a>
        </div>
        <button class="login_btn" type="submit" @click="tabback()">
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
export default {
  name: "Login",
  methods: {
    tabback() {
      this.$EventBus.$emit("tabback");
      this.$router.replace("/home");
    },
    backindex(){
      this.$router.replace("/indexlogin");

    },
    forgetpassword() {
      this.$router.replace("/forgetpass");
    }
  }
};
</script>
<style src="assets/css/lore.css" scoped>
</style>
