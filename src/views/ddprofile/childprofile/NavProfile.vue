<template>
    <div class="nav-profile">
      
      <img src="~assets/img/home/user.png">
      <div class="nav-h">
            <h3>滴滴</h3>
            <p>爱是一道光，绿到你发慌</p>
      </div>
    </div>

</template>
<script>
export default {
    name:"NavProfile",
    
}
</script>
<style scoped>
.nav-profile{
    display: flex;
    margin-top: 44px;
    padding: 15px;
}
.nav-profile img{
    position: fixed;
    top:55px;
    left: 13px;
    margin-right: 50px;
    width:60px;
    height:60px;
   

}

.nav-h {
    position: fixed;
    top: 70px;
    margin-left: 100px;
    font-size: 12px;
    left:0 ;
    flex: 1;

}

</style>