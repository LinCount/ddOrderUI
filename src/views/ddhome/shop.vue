<template>
  <div class="shop">
      <div style="position:absolute;top:50px;background-color:pink;height:80px;width:80%;margin:0px 10%;border-radius:5px">1</div>

      <el-container style="height:100vh">
          <el-header height="44px" style="padding:0px;width:100vw">
              <span style="font-size:18px;line-height:44px;margin-left:10px">
                <i class="el-icon-arrow-left" @click="$router.go(-1)" style="font-size:18px;"></i> 
                这是商家名称
              </span> 
          </el-header>
            
          <el-container style="width:100vw;">
            <el-header style="height:128px;width:100vw;padding:0px">
              <div style="height:50%;overflow:hidden">
                <img src="../../../src/assets/img/home/xianfen.jpg" style="width:100%">
              </div >
              <div style="height:50%;background-color:white"></div>
            </el-header>

            <el-container >
              <!-- 左边选菜品分类的 -->
              <el-aside width="30vw" style="overflow:hidden;">
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
                <div v-for="(item,i) in data[x].content" :key="i" style="height:100px">
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
                        <p style="font-size:13px;color:red">￥7</p>
                      </el-footer>
                    </el-container>
                  </el-container>
                </div>
              </el-main>
            </el-container>

          </el-container>

      </el-container>
  </div>
</template>

<script>
export default {
    name:'shop',
    data() {
        return {
            x:0,
            data:[
              {class:'热销',content:[{"id":123,name:'香菇排骨',price:23,number:12,cailiao:'猪肉'},{"id":124,name:'麻辣香锅',price:23,number:12,cailiao:'鸡肉'}]},
              {class:'热销',content:[{"id":123,name:'香菇排骨',price:23,number:12,cailiao:'猪肉'}]},
              {class:'热销',content:[{"id":123,name:'香菇排骨',price:23,number:12,cailiao:'猪肉'}]},
              {class:'热销',content:[{"id":123,name:'香菇排骨',price:23,number:12,cailiao:'猪肉'}]},
              {class:'热销',content:[{"id":123,name:'香菇排骨',price:23,number:12,cailiao:'猪肉'},{"id":124,name:'麻辣香锅',price:23,number:12,cailiao:'鸡肉'}]},
            ]
        };
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
</style>
