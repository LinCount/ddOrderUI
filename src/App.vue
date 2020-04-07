<template>
  <div id="app" class="wrapper">
    <router-view />
    <!--<main-tab-bar class="aa" />  -->
    <main-tab-bar class="aatab" />
  </div>
</template>

<script>
import MainTabBar from 'components/content/mainTabbar/MainTabBar'
export default {
  name: 'app',
  components: {
    MainTabBar
  }
}
</script>

<style>
@import "assets/css/base.css";
</style>
