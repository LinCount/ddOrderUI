<template>
  <nav-bar
    ><div slot="left" class="navback">
      <img
        src="~assets/img/home/fanhui.png"
        @click="backindex(theme.backrouter)"
      />
    </div>
    <div slot="center" class="login">{{ theme.title }}</div></nav-bar
  >
</template>
<script>
import NavBar from "components/content/navbar/NavBar";

export default {
  name: "Back",
  props: {
    theme: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  components: {
    NavBar
  },
  methods: {
    backindex(backrouter) {
      // this.$router.go(-1);

      this.$router.replace(backrouter);
      if (backrouter === "/share"|| backrouter ==="/profile" ) {
        this.$store.commit("showMainBar");
      }
    }
  }
};
</script>
<style scoped>
img {
  height: 25px;
  margin-left: 10px;
  margin-top: 10px;
}
.login {
  text-align: center;
  margin-right: 35px;
  font-size: 18px;
  font-weight: 400;
}
</style>
