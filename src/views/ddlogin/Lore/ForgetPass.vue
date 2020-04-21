<template>
        <div class="register">
        <div class="regTop">
            <span>忘记密码</span>
            <a class="back" @click="indeback()">&lt;&nbsp;返回</a>
        </div>
        <div class="content">
            <form action="">
                <div class="message">
                    <input type="tel" placeholder="输入手机号" pattern="[0-9]{11}" required/>
                    <input type="text" placeholder="输入验证码" pattern="[0-9]{6}" required/>
                    <input type="password" placeholder="请输入新密码" pattern="[0-9A-Za-z]{6,25}" required/>
                    <input type="password" placeholder="请再次输入密码" pattern="[0-9A-Za-z]{6,25}" required/>
                    <div class="icons">
                        <b><img src="~assets/img/login/zc-1.jpg" alt=""/></b>
                        <b><img src="~assets/img/login/zc-2.jpg" alt=""/></b>
                        <b><img src="~assets/img/login/zc-3.jpg" alt=""/></b>
                        <b><img src="~assets/img/login/zc-3.jpg" alt=""/></b>
                    </div>
                    <a class="code" href="">获取验证码</a>
                </div>
                <button class="submit" type="submit">立即注册</button>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name:"ForgetPass",
    methods:{
        indeback(){
            this.$router.replace('/login')
        }
    }
}
</script>
<style src="assets/css/lore.css" scoped>
       .message{
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
        .message .icons b{
            top: 14.5%;
            left: 11%;
        }
        .message .icons b:nth-child(2){
            top: 37%;
            left: 10%;
        }
        .message .icons b:nth-child(3){
            top: 60%;
        }
        .message .icons b:nth-child(4){
            top: 82%;
        }
        .code{
            top: 33.475%;
            right: 7.5%;
            background: #21a9f5;
            color: #ffffff;
            padding: 3.635% 5%;
        }
</style>