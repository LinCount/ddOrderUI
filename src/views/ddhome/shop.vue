<template>
  <div class="shop">

      <!-- 最顶的 点返回的 -->
      <span style="font-size:18px;line-height:44px;margin-left:10px;position:fixed;top:0px;background-color:white;width:100vw">
        <i class="el-icon-arrow-left" @click="$router.go(-1)" style="font-size:18px;"></i> 
        这是商家名称
      </span> 

      <!-- 浮起来的那个商家介绍 -->
      <div class="intr">
        <el-container style="height:100%">
          <el-aside width="60%" height="100%">
            <p class="shopname" >爽滑饺子ssss王</p>
            <span class="activities" v-for="(item,i) in 2" :key="i">满215-2</span>
          </el-aside>
          <el-main style="padding:8px">
            <img src="../../../src/assets/img/home/user.png" style="height:100%">
          </el-main>
        </el-container>
      </div>

      <!-- 商家介绍的背景 -->
      <div style="position:fixed;top:44px;">
        <div style="height:60px;overflow:hidden">
          <img src="../../../src/assets/img/home/xianfen.jpg" style="width:100%">
        </div >
        <div style="height:60px;background-color:white"></div>
      </div>
      

      <el-container style="height:100vh;padding-top:164px;padding-bottom:49px">
              <!-- 左边选菜品分类的 -->
              <el-aside width="30vw" style="">
                    <div style="text-align:center;text-color:#969696;">
                      <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        style="width:28vW">
                        <!-- 把分类下标值赋给x -->
                        <el-menu-item index="2" v-for="(item,i) in data" :key="i" @click="x=i;">
                          <span slot="title">导航二{{x}}</span>
                        </el-menu-item>
                      </el-menu>
                    </div>
              </el-aside>
              

              <!-- 右边选菜品的 -->
              <el-main style="widh:60vw;padding:0px;">
                <div v-for="(item,i) in data[x].content" :key="i" style="height:120px;margin:15px 0">
                  <el-container>
                    <!-- 店铺图片 -->
                    <el-aside style="width:20vw;height:100px">
                      <img src="../../../src/assets/img/home/user.png" style="max-width:75px;width:20vw;margin:auto">
                    </el-aside>
                    <el-container >
                      <!-- 标题 -->
                      <el-header style="line-height:30px;overflow:hidden;height:30px;padding:0px 8px;">
                        <span style="font-size:14px;">这是个不错的心机排骨</span>
                      </el-header>
                      <!-- 介绍 -->
                      <el-main  style="padding:8px 8px;font-size:12px"> 
                        <p>主要原料：猪肉</p>
                        <p>月售：27份</p>
                      </el-main>
                      <el-footer style="padding:0px 8px;height:20px">
                        <!-- 价格 -->
                        <p style="font-size:14px;color:red">￥7</p>
                        <!-- 计数器 -->
                        <div class="jishuqi" >
                          <i class="el-icon-remove" @click="num--"></i>
                          <span  class="jishuqi2" >{{num | num}}</span>
                          <i class="el-icon-circle-plus"  @click="num++" style="margin-right:10px"></i>
                           <el-button type="primary" round size="mini" style="float:right;margin-right:8px;" >
                            <i class="el-icon-circle-plus"></i>选购
                           </el-button>
                        </div>
                       
                      </el-footer>
                    </el-container>
                  </el-container>
                  
                </div>
              </el-main>


      </el-container>
  </div>
</template>

<script>
export default {
    name:'shop',
    data() {
        return {
          // 计数器
            num:0,
          // 菜品分类左边的下标
            x:0,
            data:[
              {class:'热销',content:[{"id":123,name:'香菇排骨',price:23,number:12,cailiao:'猪肉'},{"id":124,name:'麻辣香锅',price:23,number:12,cailiao:'鸡肉'},{"id":124,name:'麻辣香锅',price:23,number:12,cailiao:'鸡肉'},{"id":124,name:'麻辣香锅',price:23,number:12,cailiao:'鸡肉'},{"id":124,name:'麻辣香锅',price:23,number:12,cailiao:'鸡肉'},{"id":124,name:'麻辣香锅',price:23,number:12,cailiao:'鸡肉'},{"id":124,name:'麻辣香锅',price:23,number:12,cailiao:'鸡肉'},{"id":124,name:'麻辣香锅',price:23,number:12,cailiao:'鸡肉'},{"id":124,name:'麻辣香锅',price:23,number:12,cailiao:'鸡肉'},{"id":124,name:'麻辣香锅',price:23,number:12,cailiao:'鸡肉'}]},
              {class:'热销',content:[{"id":123,name:'香菇排骨',price:23,number:12,cailiao:'猪肉'}]},
              {class:'热销',content:[{"id":123,name:'香菇排骨',price:23,number:12,cailiao:'猪肉'}]},
              {class:'热销',content:[{"id":123,name:'香菇排骨',price:23,number:12,cailiao:'猪肉'}]},
              {class:'热销',content:[{"id":123,name:'香菇排骨',price:23,number:12,cailiao:'猪肉'},{"id":124,name:'麻辣香锅',price:23,number:12,cailiao:'鸡肉'}]},
            ]
        };
   },
   filters:{
     num(val) {
       if (val<1) {
         return 1
       }
       if( val>99) {
         return 99
       }
       return val
     }
   },
   methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>
.el-tabs__header {
    width:50px
    
}
.intr {
  position:fixed;
  top:60px;
  background-color:white;
  height:88px;
  width:80%;
  margin:0px 10%;
  border-radius:5px;
  z-index:500;
  box-shadow: 0 0 5px 1px #999
}
.activities {
    font-size:13px;
    border: 1px solid #fcab03;
    color:#fcab03;
    border-radius:3px;
    margin:2px 8px;
    width: 2.5rem;
    text-align: center;
}
.shopname {
  font-size:20px;
  font-weight:10;
  margin:5px 0px 5px 8px;
  overflow:hidden;
  max-width:90%;
  line-height:20px;
  height:20px
}
.jishuqi {

  margin:3px 0;
  display:flex;
  align-items:center;
  justify-content:right  
}
.jishuqi2 {
  border-radius:4px;
  border:1px solid #999;
  padding:0 3px;
  margin:0 3px;
}
</style>
