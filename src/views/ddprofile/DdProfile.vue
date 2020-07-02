<template>
  <div>
    <nav-bar><div slot="right" class="navbar" @click="setprclick()">设置</div></nav-bar>
    <nav-profile />
    <body-profile />
    <div class="navhead">近期食物营养成分分析</div>
    <!-- <img src="~assets/img/profile/timg.jpg" alt="营养成分分析图" /> -->
    <test></test>
  </div>
</template>

<script>
import NavBar from "components/content/navbar/NavBar";

import NavProfile from "./childprofile/NavProfile";
import BodyProfile from "./childprofile/BodyProfile";
import test from '@/views/ddhome/test'

export default {
  name: "Profile",
  components: {
    NavBar,
    NavProfile,
    BodyProfile,
    test
  },
  data() {
    return {};
  },
  methods: {
    setprclick() {
      this.$router.replace("/profile/set");
      this.$store.commit("hiddenMainBar");
    }
  }
};
</script>

<style scoped>
.navbar {
  margin-right: 20px;
}
.navhead {
  position: relative;
  margin-top: 16px;
  height: 40px;
  line-height: 40px;
  background-color: #fAfAf5;
  text-align: center;
  font-size: 15px;
  opacity:1 ;
}
img {
  position: relative;
  margin-left: 2%;
  margin-top: 10px;
  width: 96%;
  overflow: hidden;
}
</style>
