<template>
  <div class="home">
    <div class="input">
      <el-input 
        placeholder="请输入内容" 
        v-model="input"
        clearable 
        size="medium"
        class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>

    <div class="photo">
        <!-- <a href="#">    usemap="#map" ismap="ismap"  解开注释，把这两者放在img标签内即可 -->
         <img src="~assets/img/index/map2.png" @touchstart="move"  class="photo1"   usemap="#map"  @touchmove="move2"   >
        <!-- </a> -->

         <map name="map">
            <area shape="rect" coords="273,110,453,227" href="javascript:;" alt="hah" @click="newcanteen">
            <area shape="rect" coords="311,516,438,664" href="javascript:;" alt="hah" @click="oldcanteen">
        </map>
    </div>
    
    <!-- <div class="change"> -->
      <img src="~assets/img/index/change.png" class="change1" @click="showarea">
      <div class="change2" v-show="isshowarea">
        <p class="change21" style="margin-top:10px" @click="changearea">饭 堂</p>
        <p class="change21" @click="changearea">饮 品</p>
        <p class="change21" style="margin-bottom:10px" @click="changearea" >创客坊</p>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>


export default {
  name:"DdHome",
  data() {
    return {
      input:'',
      //屏幕高度
      windowh:'',
      isshowarea:false,
      //x是鼠标位置和标签边的距离
      x:'',
      y:''
    }
  },
  methods:{
    move(e) {
      this.input='你按住了地图';

      let odiv = e.target;// 获取目标元素

      //x是鼠标位置和标签边的距离，clientX是鼠标点击位置到窗口边上距离、offsetLeft是标签（不算boder、padding、margin）到窗口边的距离
      this.x = e.changedTouches[0].clientX - odiv.offsetLeft;
			this.y = e.changedTouches[0].clientY - odiv.offsetTop;
        // console.log(x+"-"+y);
      
    },
    move2 (e){
       let odiv = e.target;// 获取目标元素
        this.input='你拖动了地图';
        // console.log("1你拖动了地图");
        //这里的clientX是新的鼠标位置了，left是从点击到移动的距离

        let left = e.changedTouches[0].clientX - this.x;
        let top = e.changedTouches[0].clientY - this.y;
        // console.log(left+"-"+top);
        
        // Math.abs(aaa) 方法得到绝对值
        // if(top>图片高度-标签高度)
        // {
        //   top=Math.abs(图片高度-标签高度)
        // }
        
        odiv.style.left = left + "px";
        odiv.style.top = top + "px"
    },
    //控制地图切换按钮的显示/隐藏
    showarea() {
      this.isshowarea=!this.isshowarea;
    },
    //点击地点，切换地图
    changearea() {
      console.log("2");
    },
    //点击新饭
    newcanteen() {
      this.$router.push({
        path:'/ddarea',
        query:{
          thearea:'新饭'
        }
      });
    },
    oldcanteen() {
      this.$router.push({
        path:'/ddarea',
        query:{
          thearea:'旧饭'
        }
      });
    }
  },
  created () {
    // 获取屏幕高度
    // var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    // var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    // console.log(window.innerWidth );
    this.windowh=window.innerWidth ;
  },
  beforMount() {
    // $(document).ready(function(){
    //   $('.photo').css("height","this.widowh-36-49")
    // })
  }
}
</script>

<style scoped>
.home {
  justify-content: center;
  overflow: hidden;
  background-color:#f6f6f6;

} 
.input {
  margin: 8px ;
  height: 36px;
}
.photo {
  /* left: 0px; */
  /* height: 100%-44; */
  background-color: #f6f6f6;
  /* 应对上固定不随文档流，所以这里也要浮起 */
  position: absolute;
  top: 54px;
  bottom: 0px;
  overflow: hidden;
  width: 100%;
}
.photo1 {
  height:150%;
  position: relative;
  left:0;
  top:0;
}

.change1 {
  height: 45px;
  position: fixed;
  bottom: 80px;
  right: 25px;
}
.change2 {
  background-color: white;
  /* border: 1px solid #666; */
  height: 95px;
  width: 60px;
  position: fixed;
  bottom: 80px;
  right: 70px;
  border-radius:8px;
  box-shadow: 0px  0px 1px 1px rgba(100,100,100,.2);
}
.change21 {
  line-height: 25px;
  text-align: center;
}
</style>