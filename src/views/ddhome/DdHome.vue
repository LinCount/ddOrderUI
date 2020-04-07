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
        <!-- <a href="#">  ismap="ismap"   -->
          <!-- usemap="#map"  -->
         <img src="~assets/img/index/map.png" @touchstart="move" usemap="#map" class="photo1" >
        <!-- </a> -->

         <map name="map">
            <area shape="rect" coords="916,85,1125,214" href="javascript:;" alt="hah" @click="newcanteen">
            <area shape="rect" coords="590,489,808,622" href="javascript:;" alt="hah" @click="oldcanteen">
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
      isshowarea:false
    }
  },
  methods:{
    move(e) {
      this.input='你按住了地图';
        console.log("1你按住了地图");

      let odiv = e.target;// 获取目标元素
      // console.log("鼠标位置和标签边的距离"+e.clientX);
      // console.log("鼠标位置和标签边的距离"+e.clientY);
      // 直接使用event.clientX是不起作用的，要使用event.changedTouches[0].clientX才好
      // console.log("鼠标位置和标签边的距离"+e.changedTouches[0].clientX);
      // console.log("距离上窗口的位置"+e.pageX);
      // console.log("标签元素的y轴位置"+e.pageY);
      // console.log("距离标签上窗口的位置"+e.offsetX);

      //x是鼠标位置和标签边的距离，clientX是鼠标点击位置到窗口边上距离、offsetLeft是标签（不算boder、padding、margin）到窗口边的距离
      let x = e.changedTouches[0].clientX - odiv.offsetLeft;
			let y = e.changedTouches[0].clientY - odiv.offsetTop;
        console.log(x+"-"+y);
      
      //mousemove鼠标 移动时
      document.ontouchmove = (e) => {
        this.input='你拖动了地图';
        console.log("1你拖动了地图");
        //这里的clientX是新的鼠标位置了，left是从点击到移动的距离

        let left = e.changedTouches[0].clientX - x;
        let top = e.changedTouches[0].clientY - y;
        console.log(left+"-"+top);
        
        odiv.style.left = left + "px";
        odiv.style.top = top + "px"
      };

      //monmouseup鼠标松开时
      document.ontouchend = ()=> {
        this.input='你松开了地图';
        console.log("你松开了地图");

        document.touchmove=null;
        document.touchstart=null;
      }
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
      console.log("这是新饭");
      alert("这是新饭");
    },
    oldcanteen() {
      console.log("这是旧饭");
      alert("这是旧饭");
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
  box-shadow: 0px  0px 1px 1px rgba(100,100,100,.2);;
}
.change21 {
  line-height: 25px;
  text-align: center;
}
</style>