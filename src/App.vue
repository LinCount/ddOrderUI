<template>
  <div id="app" class="wrapper">
    <router-view />
    <!--<main-tab-bar class="aa" />  -->
    <main-tab-bar v-if="this.$store.state.set"/>
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";
export default {
  name: "app",
  data() {
    return {
      set: false
    };
  },
  components: {
    MainTabBar
  },
  


};
</script>

<style>
@import "assets/css/base.css";
</style>
