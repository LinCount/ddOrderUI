<template>
  <div>
    <div class="aui-user-list">
      <a
        class="aui-flex "
        style="box-shadow: 0 10px 0 rgba(100,100,100,.1); line-height: 30px;"
      >
        <div class="aui-cou-img">
          <img
            src="~assets/img/profile/nav-001.png"
            alt=""
            style="margin-top:10px"
          />
        </div>
        <div class="aui-flex-box">
          <p>美食论坛</p>
        </div>
        <div class="aui-arrow">
          <span>>></span>
        </div>
      </a>
      <a
        @click="goApply"
        class="aui-flex "
        style="box-shadow: 0 10px 0 rgba(100,100,100,.1);margin-top:10px;"
      >
        <div class="aui-cou-img">
          <img src="~assets/img/profile/nav-002.png" alt="" />
        </div>
        <div class="aui-flex-box">
          <p>申请成为顺丰配送员</p>
        </div>
        <div>
          <span>>></span>
        </div>
      </a>
      <a
        @click="goNutrition"
        class="aui-flex "
        style="box-shadow: 0 2px 2px rgba(100,100,100,.1);margin-top:10px;"
      >
        <div class="aui-cou-img">
          <img src="~assets/img/profile/nav-003.png" alt="" />
        </div>
        <div class="aui-flex-box">
          <p>营养点餐</p>
        </div>
        <div>
          <span>>></span>
        </div>
      </a>
      <a
       @click="goRandom"
        class="aui-flex "
        style="box-shadow: 0 2px 2px rgba(100,100,100,.1);margin-top:2px;"
      >
        <div class="aui-cou-img">
          <img src="~assets/img/profile/nav-003.png" alt="" />
        </div>
        <div class="aui-flex-box">
          <p>随机点餐</p>
        </div>
        <div>
          <span>>></span>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: "ShareBody",
  methods: {
    goApply() {
      this.$router.replace("/share/apply");
      this.$store.commit("hiddenMainBar");
    },
    goNutrition() {
      this.$router.replace("/share/nutrition");
      this.$store.commit("hiddenMainBar");
    },
    goRandom() {
      this.$router.replace("/share/random");
      this.$store.commit("hiddenMainBar");

    }
  }
};
</script>
<style scoped></style>
