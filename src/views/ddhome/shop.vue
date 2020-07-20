<template>
  <div class="shop">


    <!-- 购物车图标 -->
      <el-badge :value="num" class="change1"  :hidden="num | badgenum" >
        <img src="../../../src/assets/img/home/gouwuche.png" class="change" @click="showcar=!showcar">
      </el-badge>

    <!-- 购物车组件 -->
    <shopcar v-show="showcar" class="shopcar" ></shopcar>

    <!-- 遮罩层 -->
    <div  v-show="showcar" class="zhezhaoc" @click="showcar=!showcar"> </div>

      <!-- 最顶的 点返回的 -->
      <span class="topshopname" >
        <i class="el-icon-arrow-left" @click="$router.go(-1)" style="font-size:18px;"></i> 
        这是商家名称
      </span> 

      <!-- 浮起来的那个商家介绍 -->
      <div class="intr">
        <el-container style="height:100%">
          <el-aside width="60%" height="100%">
            <p class="shopname" >西关名点</p>
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
              <el-aside width="30vw" >
                    <div style="text-align:center;text-color:#969696;">
                      <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        @open="handleOpen"
                        @close="handleClose"
                        style="width:28vW">
                        <!-- 把分类下标值赋给x -->
                        <el-menu-item index="2" v-for="(item,i) in data1" :key="i" @click="x=i;">
                          <span slot="title">{{item.type}}{{x}}</span>
                        </el-menu-item>
                      </el-menu>
                    </div>
              </el-aside>
              

              <!-- 右边选菜品的 -->
              <el-main style="widh:60vw;padding:0px;">
                <div v-for="(item,i) in data1[x].content" :key="i" style="height:120px;margin:15px 0">
                  <el-container>
                    <!-- 店铺图片 -->
                    <el-aside style="width:20vw;height:100px">
                      <img src="../../../src/assets/img/home/user.png" style="max-width:75px;width:20vw;margin:auto">
                    </el-aside>
                    <el-container >
                      <!-- 标题 -->
                      <el-header style="line-height:30px;overflow:hidden;height:30px;padding:0px 8px;">
                        <span style="font-size:14px;">{{item.name}}</span>
                      </el-header>
                      <!-- 介绍 -->
                      <el-main  style="padding:8px 8px;font-size:12px"> 
                        <p>主要原料：{{item.cailiao}}</p>
                        <p>月售：{{item.number}}份</p>
                      </el-main>
                      <el-footer style="padding:0px 8px;height:20px">
                        <!-- 价格 -->
                        <p style="font-size:14px;color:red">￥{{item.price}}</p>
                        <!-- 计数器 -->
                        <div class="jishuqi" >
                          <i class="el-icon-remove" @click="remove(i)"></i>
                          <span  class="jishuqi2" >{{arry[x][i]}}</span>
                          <!-- <el-input style="height:27px" v-model="arry[x][i]"></el-input> -->
                          <i class="el-icon-circle-plus"  @click="add(i,item)" style="margin-right:10px"></i>
                           <el-button type="primary" round size="mini"  @click="addcar(i,item)"  style="float:right;margin-right:8px;" >
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
import shopcar from '../ddhome/shopcar.vue'
import store from '@/store/index'
import {mapState} from 'vuex'

export default {
    name:'shop',
    data() {
        return {
          // 展示购物车
          showcar:false,
          //每个商品选购数二维数组,存放选购数的
          arry:[],
          // 购物车总数
            // num:0,放vuex去了
          // 菜品分类左边的下标
            x:0,
          //菜品数据
            data1:[
              {content:''}
            ],
        };
   },
   store,
   computed:mapState(['num','carfood']),
   components:{
      shopcar
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
     },
     badgenum(val) {
       if(val==0) {
         return true
       } else {
         return false
       }
     }
   },
   methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      add(i) {
        // this.arry[this.x][i]++
        this.$set(this.arry[this.x],i,++this.arry[this.x][i])
        // console.log(this.arry[this.x][i])
      },
      remove(i) {
        // this.arry[this.x][i]++
        this.$set(this.arry[this.x],i,--this.arry[this.x][i])
        // console.log(this.arry[this.x][i])
      },
        
      addcar(i,item) {
        // 修改购物车总数
        //a:该菜品件数
        let a = this.arry[this.x][i]
        this.$store.commit('changenum',a)
        //商品信息发给购物车
        let data={number:a,item:item}
        console.log(data)

        this.$store.commit('addfood',data)
        // state.carfood[i].item.price*state.carfood[i].number
        // console.log(this.carfood)
        // console.log("1")
      }
   },
   created() {
    //  let id=this.$route.params.id
     let id=12351
     this.axios.get(`/product/getProduct?id=${id}`)
     .then(res=>{
       this.data1=res.data.data
      //  console.log(this.data1)

      //构造二维数组

      let arry1= new Array()
      for(let i=0;i<this.data1.length;i++) {
         arry1[i]=new Array()
          for( let y=0;y<this.data1[i].content.length;y++) {
            //  arry1[i][y]=1;
             this.$set(arry1[i],y,1)
          }
      }
      this.arry=arry1;
      // console.log(this.arry)
     })
    

    //  let data1=[
    //           {class:'热销',content:[{"id":123,name:'香菇排骨',price:23,number:12,cailiao:'猪肉',img:''},{"id":124,name:'麻辣香锅',price:23,number:12,cailiao:'鸡肉',img:''},{"id":124,name:'麻辣土豆',price:23,number:12,cailiao:'鸡肉'},{"id":124,name:'老坛酸菜鱼',price:23,number:12,cailiao:'鸡肉'},{"id":124,name:'黄焖鸡',price:23,number:12,cailiao:'鸡肉'},{"id":124,name:'番茄炒蛋',price:23,number:12,cailiao:'鸡肉'},{"id":124,name:'青瓜炒肉',price:23,number:12,cailiao:'鸡肉'},{"id":124,name:'麻婆豆腐',price:23,number:12,cailiao:'鸡肉'},{"id":124,name:'烤生蚝',price:23,number:12,cailiao:'鸡肉'},{"id":124,name:'酱爆鱿鱼',price:23,number:12,cailiao:'鸡肉'}]},
    //           {class:'优惠',content:[{"id":123,name:'香菇排骨',price:23,number:12,cailiao:'猪肉',img:''}]},
    //           {class:'套餐',content:[{"id":123,name:'香菇排骨',price:23,number:12,cailiao:'猪肉',img:''}]},
    //           {class:'小吃',content:[{"id":123,name:'香菇排骨',price:23,number:12,cailiao:'猪肉',img:''}]},
    //           {class:'饮料',content:[{"id":123,name:'香菇排骨',price:23,number:12,cailiao:'猪肉',img:''},{"id":124,name:'麻辣香锅',price:23,number:12,cailiao:'鸡肉',img:''}]},
    //         ]
    //   this.data=data1;


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
.topshopname {
  font-size:18px;
  line-height:44px
  ;margin-left:10px;
  position:fixed;
  top:0px;
  background-color:white;
  width:100vw
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
.change {
  height: 45px;
  position: fixed;
  bottom: 80px;
  right: 25px;
}
.change1 {
  height: 45px;
  position: fixed;
  bottom: 75px;
  right: 36px;
  z-index:601
}
.shopcar {
  z-index:600;
  position:absolute;
  width:70%;
  height:70vh;
  right:70px;
  bottom:80px;
}
.zhezhaoc {
  position:absolute;
  z-index:599;
  height:100vh;
  width:100%;
  background-color:#808080;
  opacity:0.3
}
</style>
