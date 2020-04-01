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
       <img src="~assets/img/tabbar/money.jpg" @mousedown="move" class="photo1">
    </div>
    
  </div>
</template>
<script>
export default {
  name:"DdHome",
  data() {
    return {
      input:'',
      //屏幕高度
      windowh:''
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
    }
  },
  created () {
    // 获取屏幕高度
    // var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    // var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    console.log(window.innerWidth );
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
  display: flex;
  flex-direction: column;
  justify-content: center;
} 
.input {
  margin: 8px;
  flex: 0;

}
.photo {
  background-color: antiquewhite;
  height: 500px;
  margin: 8px;
  overflow: hidden;
}
.photo1 {
  position: relative;
  left: 0;
}
</style>