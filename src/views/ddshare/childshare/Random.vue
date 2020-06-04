<template>
  <div class="nutrition">
    <div>
      <nav-back :theme="{ title: '随机点餐', backrouter: '/share' }" />
      <div class="span-head">
        <span>匹配成功!</span>
        <!-- <img src="~assets/img/profile/news.svg" alt=""> -->
      </div>
      <div class="nut-head">
        <img src="~assets/img/profile/bus.jpg" alt="商家图片" />
        <div class="one-show">
          <span class="span-nav"
            >华莱士炸鸡汉堡 <img src="~assets/img/profile/step.svg"
          /></span>

          <div class="one" v-for="(item, index) in food" :key="index">
            <span>{{ item.name }}</span>
            <span>×{{ item.num }}</span>
            <span>{{ item.price }}</span>
          </div>
          <div class="button-one">
            <div class="more">+</div>
            <div class="button">马上下单</div>
          </div>
        </div>
      </div>
      <div class="nut-head">
        <img src="~assets/img/profile/bus.jpg" alt="商家图片" />
        <div class="one-show">
          <span class="span-nav"
            >华莱士炸鸡汉堡 <img src="~assets/img/profile/step.svg"
          /></span>

          <div class="one" v-for="(item, index) in food" :key="index">
            <span>{{ item.name }}</span>
            <span>×{{ item.num }}</span>
            <span>{{ item.price }}</span>
          </div>
          <div class="button-one">
            <div class="more">+</div>
            <div class="button">马上下单</div>
          </div>
        </div>
      </div>
        <div class="nut-head">
          <img src="~assets/img/profile/bus.jpg" alt="商家图片" />
          <div class="one-show">
            <span class="span-nav"
              >华莱士炸鸡汉堡 <img src="~assets/img/profile/step.svg"
            /></span>

            <div class="one" v-for="(item, index) in food" :key="index">
              <span>{{ item.name }}</span>
              <span>×{{ item.num }}</span>
              <span>{{ item.price }}</span>
            </div>
            <div class="button-one">
              <div class="more">+</div>
              <div class="button">马上下单</div>
            </div>
          </div>
        </div>
              <div class="nut-head">
        <img src="~assets/img/profile/bus.jpg" alt="商家图片" />
        <div class="one-show">
          <span class="span-nav"
            >华莱士炸鸡汉堡 <img src="~assets/img/profile/step.svg"
          /></span>

          <div class="one" v-for="(item, index) in food" :key="index">
            <span>{{ item.name }}</span>
            <span>×{{ item.num }}</span>
            <span>{{ item.price }}</span>
          </div>
          <div class="button-one">
            <div class="more">+</div>
            <div class="button">马上下单</div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>
<script>
import NavBack from "components/content/navback/NavBack";

export default {
  name: "Random",
  components: {
    NavBack
  },
  data() {
    return {
      food: [
        { name: "牛肉汉堡包", num: "1", price: "￥12" },
        { name: "脆皮半鸡", num: "1", price: "￥18" },
        { name: "中可乐", num: "1", price: "￥4" }
      ]
    };
  }
};
</script>
<style scoped>
.nutrition {
  background-color: #f5f5f5;
  overflow: scroll;
}

.span-head span {
  display: inline;
  color: #3498db;
}
.span-head img {
  position: fixed;
  display: inline-block;
  right: 20px;
  top: 50px;
  height: 25px;
  width: 25px;
  text-align: center;
}
.span-head {
  margin-top: 10px;
  text-align: center;
}
.nut-head {
  display: flex;
  position: relative;
  border: 1px solid rgba(100, 100, 100, 0.2);
  margin: 0 5px 0 5px;
  margin-top: 18px;
  background-color: #fff;
}
.nut-head img {
  height: 140px;
  width: 110px;
  overflow: hidden;
  border-radius: 5px;
  margin: 5px;
}
span {
  display: block;
  margin-bottom: 5px;
}
.one {
  display: flex;
}

.one span {
  display: block;
  flex: 1;
  font-size: 12px;
}
.one span:nth-child(1) {
  text-align: left;
}
.one span:nth-child(2) {
  text-align: right;
}
.one span:nth-child(3) {
  text-align: center;
}
.one-show {
  margin: 5px;
  width: 100%;
}
.span-nav {
  font-weight: bold;
  line-height: 30px;
  text-align: left;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.span-nav img {
  position: relative;
  margin: 0;
  height: 15px;
  width: 15px;
  opacity: 0.5;
  vertical-align: middle;
  margin-bottom: 2px;
  margin-left: 10px;
}
.button-one {
  position: relative;
  margin-top: 10px;
  text-align: right;
  padding: 5px;
  margin-right: 10px;
  border-top: 1px solid rgba(100, 100, 100, 0.1);
}
.button-one div {
  position: relative;
  display: inline-block;
  border: 1px solid #3498db;
  color: #3498db;
}

.button {
  border-radius: 4px;
  padding: 5px 10px;
  text-align: center;
  font-size: 13px;
  height: 25px;
}
.more {
  margin-right: 15px;
  width: 25px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  border-radius: 12.5px;
}
.nut-body {
  background-color: #ffffff;
  border: 1px solid rgba(100, 100, 100, 0.1);
}
.info {
  font: 14px "微软雅黑";
  margin: 2px 5px;
  height: 30px;
  line-height: 30px;
  font-weight: bold;
  text-align: left;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.flex-one {
  display: flex;
}
</style>
