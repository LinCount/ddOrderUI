<template>
  <div class="nav-profile">
    <img src="~assets/img/home/user.png" />
    <div class="nav-h-no-login" v-if='this.$store.state.nologin'>
      <h3 @click="login()">请登录</h3>     
    </div>
    <div v-else class="nav-h" >
      <h3>{{ this.$store.state.userpofile.uid}}</h3>
      <!-- <p>{{ this.$store.state. userpofile.pwd }}</p> -->
    </div>
  </div>
</template>
<script>
export default {
  name: "NavProfile",
  methods:{
      login(){
          this.$router.push('/indexlogin')
          this.$store.commit('hiddenMainBar') 
      }
  }
};
</script>
<style scoped>
.nav-profile {
  display: flex;
  margin-top: 44px;
  padding: 10px;
  
}
.nav-profile img {
  margin-top: 11px;
  margin-left: 13px;
  margin-right: 20px;
  width: 60px;
  height: 60px;
}
.nav-h-no-login{

  margin-top: 31px;

  font-size: 12px;
  flex: 1;
  font-size: 20px;

}
.nav-h {

  margin-top: 26px;
  font-size: 15px;
  flex: 1;
}
</style>
