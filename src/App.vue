<template>
  <div id="app" class="wrapper">
    <router-view />
    <!--<main-tab-bar class="aa" />  -->
    <main-tab-bar v-show="set" />
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabbar/MainTabBar";
export default {
  name: "app",
  data() {
    return {
      set: true
    };
  },
  components: {
    MainTabBar
  },
  mounted() {
    this.$EventBus.$on(
      "setprclick",
      function() {
        this.set = false;
      }.bind(this)
    );
    this.$EventBus.$on(
      "navback",
      function() {
        this.set = true;
      }.bind(this)
    );

  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
