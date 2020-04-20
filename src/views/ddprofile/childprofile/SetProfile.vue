<template>
  <div>
    <nav-bar><div slot="left" class="navhead" @click="navback()"><span class="lt">&lt;</span>设置</div></nav-bar>
    <div class="aui-user-list">
      <a
        class="aui-flex "
        style="box-shadow: 0 2px 2px rgba(100,100,100,.1);margin-top:10px;"
      >
        <div class="aui-flex-box">
          <p>账户安全</p>
        </div>
        <div class="aui-arrow">
          <span>></span>
        </div>
      </a>
      <a
        class="aui-flex "
        style="box-shadow: 0 2px 2px rgba(100,100,100,.1);margin-top:10px;"
      >
        <div class="aui-flex-box">
          <p>通用</p>
        </div>
        <div>
          <span>></span>
        </div>
      </a>
      <a
        class="aui-flex "
        style="box-shadow: 0 2px 2px rgba(100,100,100,.1);margin-top:10px;"
      >
        <div class="aui-flex-box">
          <p>欢迎评分</p>
        </div>
        <div>
          <span>></span>
        </div>
      </a>
      <a
        class="aui-flex "
        style="box-shadow: 0 2px 2px rgba(100,100,100,.1);margin-top:2px;"
      >
        <div class="aui-flex-box">
          <p>关于点点美食</p>
        </div>
        <div>
          <span>></span>
        </div>
      </a>
      <a
        class="aui-flex "
        style="box-shadow: 0 2px 2px rgba(100,100,100,.1);margin-top:2px;"
      >
        <div class="aui-flex-box">
          <p>隐私</p>
        </div>
        <div>
          <span>></span>
        </div>
      </a>
      <a
        class="aui-flex "
        style="box-shadow: 0 2px 2px rgba(100,100,100,.1);margin-top:2px;"
      >
        <div class="aui-flex-box">
          <p>意见反馈</p>
        </div>
        <div>
          <span>></span>
        </div>
      </a>
      <div class="unlogin">
        <p>退出登录</p>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "components/content/navbar/NavBar";

export default {
  name: "SetProfile",
  components: {
    NavBar
  },
  methods:{
    navback(){
      this.$router.replace('/profile')
      this.$EventBus.$emit('navback')
    }
  }
  
};
</script>
<style scoped>
a {
  line-height: 20px;
}

span {
  font-size: 20px;
  color: rgba(100, 100, 100, 0.3);
}
p {
  font-size: 16px;
}
.lt{
  color: rgba(100, 100, 100);
  font-size: 17px;
  padding-right: 5px;
}
.navhead {
  font-size: 17px;
  margin-left: 10px;
  font-weight: 400;
  line-height: 44px;
  text-align: center;
}
.unlogin {
  line-height: 60px;
  color: red;
  text-align: center;
  box-shadow: 0 2px 2px rgba(100, 100, 100, 0.1);
}
.unlogin p {
  font-size: 20px;
}
</style>
