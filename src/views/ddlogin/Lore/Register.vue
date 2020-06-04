<template>
    <div class="register">
    <nav-back  :theme="theme" style="background: #21a9f5;color:#ffffff" class="back"/>
        <div class="content">
            <div class="point">
                <span>注册成功后，手机号也可为登录账号。</span>
            </div>
            <form action="">
                <div class="message">
                    <input type="tel" placeholder="输入手机号" pattern="[0-9]{11}" required/>
                    <input type="password" placeholder="请输入6-25位密码" pattern="[0-9A-Za-z]{6,25}" required/>
                    <input type="password" placeholder="请再次输入密码" pattern="[0-9A-Za-z]{6,25}" required/>
                    <input type="text" placeholder="输入验证码" pattern="[0-9]{6}" required/>
                    <div class="icons">
                        <b><img src="~assets/img/login/zc-1.jpg" alt=""/></b>
                        <b style="margin-top:18px"><img src="~assets/img/login/zc-2.jpg" alt=""/></b>
                        <b style="margin-top:28px"><img src="~assets/img/login/zc-3.jpg" alt=""/></b>
                        <b style="margin-top:38px"><img src="~assets/img/login/zc-3.jpg" alt=""/></b>
                    </div>
                    <a class="code-one" href="" required>获取验证码</a>
                </div>
                <div class="agree">
                    <input type="checkbox"/><span>&nbsp;同意&nbsp;</span><a href="">《注册协议》</a>
                </div>
                <button class="submit" type="submit">注册</button>
            </form>
        </div>
    </div>
</template>
<script>
import NavBack from "components/content/navback/NavBack";
export default {
    name:"Register",
      components: {
    NavBack
  },
     data(){
     return{
     theme:{'title':'欢迎注册','backrouter':'/indexlogin'}}
   },
    methods:{
        backindex(){
            this.$router.replace('/indexlogin')
        }
    }
}
</script>
<style src="assets/css/lore.css" scoped>
    .back  >>> .login{
        font-family: 华文楷体;
    }
</style>