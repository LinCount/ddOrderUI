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
        <a href="#">
         <img src="~assets/img/index/2222.png" @mousedown="move" class="photo1" usemap="#map" ismap="ismap">
        </a>

         <map name="map">
            <area shape="rect" coords="362,52,492,136" href="javascript:;" alt="hah" @click="newcanteen">
            <area shape="rect" coords="259,395,391,482" href="javascript:;" alt="hah" @click="oldcanteen">
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
      // console.log("1");
      let odiv = e.target;// 获取目标元素
      // console.log("鼠标位置和标签边的距离"+e.clientX);
      // console.log("鼠标位置和标签边的距离"+e.clientY);
      // console.log("距离上窗口的位置"+e.pageX);
      // console.log("标签元素的y轴位置"+e.pageY);
      // console.log("距离标签上窗口的位置"+e.offsetX);

      //x是鼠标位置和标签边的距离，clientX是鼠标点击位置到窗口边上距离、offsetLeft是标签（不算boder、padding、margin）到窗口边的距离
      let x = e.clientX - odiv.offsetLeft;
			let y = e.clientY - odiv.offsetTop;
      
      //onmousemove鼠标 移动时
      document.onmousemove = (e) => {
        //这里的clientX是新的鼠标位置了，left是从点击到移动的距离
        let left = e.clientX - x;
        let top = e.clientY - y;
        
        odiv.style.left = left + "px";
        odiv.style.top = top + "px"
      }
      //onmouseup鼠标松开时
      document.onmouseup = ()=> {
        document.onmousemove=null;
        document.onmousedown=null;
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
  overflow: hidden;

} 
.input {
  margin: 8px ;
  height: 36px;
}
.photo {
  background-color: #f6f6f6;
  height: 100%-44;
  position: absolute;
  top: 54px;
  bottom: 0px;
  left: 0px;
  overflow: hidden;
  width: 100%;
}
.photo1 {
  position: relative;
  left: 0;
  overflow-y: hidden;
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