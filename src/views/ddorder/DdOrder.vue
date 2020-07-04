<template>
  <div class="ddorder">
    <!-- 顶部标题栏 -->
    <div class="top" @click="bb1">
      <span
        style="line-height:44px;margin-left:10px;font-size:16px;font-weight:400;color:black"
        >{{ hh }}</span
      >
    </div>

    <!-- 右下角回到顶部 -->
    <diV class="gotop" @click="bbb" v-show="isshow">
      <img src="~assets/img/home/top.png" style="height:40px" />
    </diV>

    <!-- 顶部 -->
    <div class="order">
      <div v-for="item in order" :key="item.id" class="order1">
        <div class="head">
          <img src="~assets/img/order/shop.png" style="height:26px" />
          <span>{{ item.shop }}</span>
          <!-- <div class="head1"><span class="head11">{{item.addres}}</span></div> -->
          <span class="head2">{{ item.state }}</span>
        </div>

        <div class="body">
          <div v-for="items in item.product" :key="items.name">
            <span>{{ items.name }}</span>
            <span style="float:right">X{{ items.quantity }}</span>
          </div>
        </div>

        <div class="foot">
          <span style="float:right">总价:{{ item.sum }}</span>
          <span style="float:right;margin-right:10px"
            >共 {{ item.totalproduce }} 件</span
          >
        </div>
        <div class="footfoot">
          <el-button size="small" round>查看详情</el-button>
          <el-button type="primary" size="small" plain round
            >再次购买</el-button
          >
        </div>

        <!-- 阴影条 -->
        <div style="height:5px;background-color:#f3f3f3"></div>
      </div>
    </div>

    <!-- <img src="~assets/img/order/1111.png" @touchdown="aa" usemap="#map"> -->
    <!-- <img src="~assets/img/order/1111.png" @touchmove="aa2"> -->
    <!-- <img src="~assets/img/order/1111.png" @touchend="aa3"> -->

    <!-- <map name="map">
            <area shape="rect" coords="0,0,100,100" href="javascript:;" alt="hah" @click="aa4">
        </map> -->

    <!-- <div style="height:50px;background-color:black;" @ontouchstart="aa" ></div>
        <div style="height:50px;background-color:red;" @onmousedown="aa2" ></div> -->
  </div>
</template>

<script>
import { orderdata } from "network/order";
export default {
  name: "DdOrder",
  data() {
    return {
      isshow: false,
      hh: "订单",
      color: ["#8164ff", "#0eb2fe", "#e886b1", "#e88888", "#66d6b5", "#87aee8"],
      //freight:运费,totalproduce:总件数,sum:总价,person:配送人编号,state:订单状态（正在配送/已完成）
      order: [
        {
          shop: "食为先",
          addres: "一饭",
          product: [
            { name: "柠檬鸡饭", quantity: 2, price: 12 },
            { name: "叉烧饭", quantity: 1, price: 15 },
            { name: "叉烧1饭", quantity: 1, price: 15 }
          ],
          freight: 2,
          totalproduce: 4,
          sum: 42,
          time: "2020-04-04",
          person: "0007",
          state: "已完成",
          id: 1
        },
        {
          shop: "食为先",
          addres: "一饭",
          product: [
            { name: "柠檬鸡饭", quantity: 2, price: 12 },
            { name: "叉烧饭", quantity: 1, price: 15 }
          ],
          freight: 2,
          totalproduce: 3,
          sum: 29,
          time: "2020-04-04",
          person: "0007",
          state: "已完成",
          id: 3
        },
        {
          shop: "食为先",
          addres: "一饭",
          product: [
            { name: "柠檬鸡饭", quantity: 2, price: 12 },
            { name: "叉烧饭", quantity: 1, price: 15 }
          ],
          freight: 2,
          totalproduce: 3,
          sum: 29,
          time: "2020-04-04",
          person: "0007",
          state: "已完成",
          id: 4
        },
        {
          shop: "食为先",
          addres: "一饭",
          product: [
            { name: "柠檬鸡饭", quantity: 2, price: 12 },
            { name: "叉烧饭", quantity: 1, price: 15 }
          ],
          freight: 2,
          totalproduce: 3,
          sum: 29,
          time: "2020-04-04",
          person: "0007",
          state: "已完成",
          id: 5
        },
        {
          shop: "食为先",
          addres: "一饭",
          product: [
            { name: "柠檬鸡饭", quantity: 2, price: 12 },
            { name: "叉烧饭", quantity: 1, price: 15 }
          ],
          freight: 2,
          totalproduce: 3,
          sum: 29,
          time: "2020-04-04",
          person: "0007",
          state: "已完成",
          id: 6
        },
        {
          shop: "食为先",
          addres: "一饭",
          product: [
            { name: "柠檬鸡饭", quantity: 2, price: 12 },
            { name: "叉烧饭", quantity: 1, price: 15 }
          ],
          freight: 2,
          totalproduce: 3,
          sum: 29,
          time: "2020-04-04",
          person: "0007",
          state: "已完成",
          id: 7
        },
        {
          shop: "食为先",
          addres: "一饭",
          product: [
            { name: "柠檬鸡饭", quantity: 2, price: 12 },
            { name: "叉烧饭", quantity: 1, price: 15 }
          ],
          freight: 2,
          totalproduce: 3,
          sum: 29,
          time: "2020-04-04",
          person: "0007",
          state: "已完成",
          id: 8
        },
        {
          shop: "食为先",
          addres: "一饭",
          product: [
            { name: "柠檬鸡饭", quantity: 2, price: 12 },
            { name: "叉烧饭", quantity: 1, price: 15 }
          ],
          freight: 2,
          totalproduce: 3,
          sum: 29,
          time: "2020-04-04",
          person: "0007",
          state: "已完成",
          id: 9
        },
        {
          shop: "食为先",
          addres: "一饭",
          product: [
            { name: "柠檬鸡饭", quantity: 2, price: 12 },
            { name: "叉烧饭", quantity: 1, price: 15 }
          ],
          freight: 2,
          totalproduce: 3,
          sum: 29,
          time: "2020-04-04",
          person: "0007",
          state: "已完成",
          id: 2
        }
      ]
    };
  },
  created() {
      this.createOrder()
  },
  mounted() {
    document.addEventListener("touchmove", this.bb1);
  },
  methods: {
    bb1() {
      // this.hh=document.documentElement.scrollTop;    //这是浏览器的滚动条到顶部距离
      // this.hh=document.body.scrollTop;    //这是移动端的滚动条到顶部距离
      //pc端的配置
      // if(document.documentElement.scrollTop < 100) {
      //     this.isshow=false
      // } else {
      //     this.isshow=true
      // }
      // 移动端配置
      if (document.body.scrollTop < 100) {
        this.isshow = false;
      } else {
        this.isshow = true;
      }
    },
    bbb() {
      // console.log(document.documentElement.scrollTop);
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    },
    move() {
      console.log(document.documentElement.scrollTop);

      //如果滚动条在顶部，则隐藏gotop
    },
    //创建订单
    createOrder() {
      orderdata(1121).then(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
    }
  }
};
</script>

<style scoped>
.gotop {
  height: 35px;
  position: fixed;
  bottom: 83px;
  right: 25px;
}
.ddorder {
  overflow: noscroll;
  /* 抵掉上固定定位 */
  margin-top: 44px;
  /* 抵掉下固定定位 */
  margin-bottom: 49px;
}
.order1 {
  margin: 5px 0px 0px 0px;
  width: 100%;
  overflow: noscroll;
}
.top {
  width: 100%;
  background-color: #f3f3f3;
  height: 44px;
  position: fixed;
  top: 0px;
}
.head {
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 17px;
  font-weight: 200;
  height: 35px;
  padding: 0px 8px;
}
.head1 {
  background-color: #e886b1;
  border-radius: 3px;
  margin-left: 8px;
  height: 18px;
  widows: 25px;
}
.head11 {
  line-height: 16px;
  font-size: 14px;
}
.head2 {
  margin-left: auto;
  font-weight: 500;
  margin-right: 8px;
}
.body {
  padding: 0px 16px 5px 16px;
  font-size: 14px;
}
.foot {
  height: 25px;
  padding: 0px 16px 5px 16px;
}
.footfoot {
  text-align: right;
  padding: 0px 13px 5px 16px;
}
</style>
