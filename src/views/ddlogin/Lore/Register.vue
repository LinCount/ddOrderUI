<template>
    <div class="register">
        <div class="regTop">
            <span>用户注册</span>
            <a class="back"  @click="backindex()">&lt;&nbsp;返回</a>
        </div>
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
                        <b><img src="~assets/img/login/zc-2.jpg" alt=""/></b>
                        <b><img src="~assets/img/login/zc-3.jpg" alt=""/></b>
                        <b><img src="~assets/img/login/zc-3.jpg" alt=""/></b>
                    </div>
                    <a class="code" href="" required>获取验证码</a>
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
export default {
    name:"Register",
    methods:{
        backindex(){
            this.$router.replace('/indexlogin')
        }
    }
}
</script>
<style src="assets/css/lore.css" scoped>
</style>