<template>
    <div class="ddorder">
        <div class="top">
            <span style="line-height:44px;margin-left:10px;font-size:16px;font-weight:400;color:black">{{hh}}</span>
        </div>

        <div class="order" >
            <div v-for="item in order" :key="item.id" class="order1">
                <div class="head">
                    <img src="~assets/img/order/shop.png" style="height:26px">
                    <span >{{item.shop}}</span>
                    <!-- <div class="head1"><span class="head11">{{item.addres}}</span></div> -->
                    <span class="head2">{{item.state}}</span>
                </div>
                <div class="body">
                    <div v-for="items in item.product" :key="items.name">
                        <span>{{items.name}}</span>
                        <span style="float:right">X{{items.quantity}}</span>
                    </div>
                </div>
                <div class="foot">
                    <span style="float:right">总价:{{item.sum}}</span>
                    <span style="float:right;margin-right:10px">共 {{item.totalproduce}} 件</span>
                </div>
                <div class="footfoot">
                    <el-button size='small' round>查看详情</el-button>
                    <el-button type="primary" size='small' plain round>再次购买</el-button>
                </div>
                <!-- 阴影条 -->
                <div style="height:5px;background-color:#f3f3f3"> </div>
            </div>
        </div>
        <!-- <img src="~assets/img/order/1111.png" @touchdown="aa" usemap="#map"> -->
        <img src="~assets/img/order/1111.png" @touchmove="aa2">
        <!-- <img src="~assets/img/order/1111.png" @touchend="aa3"> -->
        
         <!-- <map name="map">
            <area shape="rect" coords="0,0,100,100" href="javascript:;" alt="hah" @click="aa4">
        </map> -->

        <!-- <div style="height:50px;background-color:black;" @ontouchstart="aa" ></div>
        <div style="height:50px;background-color:red;" @onmousedown="aa2" ></div> -->

    </div>
</template>

<script>
export default {
    name:"DdOrder",
    data() {
        return {
            hh:'用的ontouch+onmouse',
            color:['#8164ff','#0eb2fe','#e886b1','#e88888','#66d6b5','#87aee8'],
            //freight:运费,totalproduce:总件数,sum:总价,person:配送人编号,state:订单状态（正在配送/已完成）
            order:[
                {shop:'食为先',addres:'一饭',product:[{name:'柠檬鸡饭',quantity:2,price:12},{name:'叉烧饭',quantity:1,price:15},{name:'叉烧1饭',quantity:1,price:15}],freight:2,totalproduce:4,sum:42,time:'2020-04-04',person:'0007',state:'已完成',id:1},
                {shop:'食为先',addres:'一饭',product:[{name:'柠檬鸡饭',quantity:2,price:12},{name:'叉烧饭',quantity:1,price:15}],freight:2,totalproduce:3,sum:29,time:'2020-04-04',person:'0007',state:'已完成',id:3},
                {shop:'食为先',addres:'一饭',product:[{name:'柠檬鸡饭',quantity:2,price:12},{name:'叉烧饭',quantity:1,price:15}],freight:2,totalproduce:3,sum:29,time:'2020-04-04',person:'0007',state:'已完成',id:4},
                {shop:'食为先',addres:'一饭',product:[{name:'柠檬鸡饭',quantity:2,price:12},{name:'叉烧饭',quantity:1,price:15}],freight:2,totalproduce:3,sum:29,time:'2020-04-04',person:'0007',state:'已完成',id:5},
                {shop:'食为先',addres:'一饭',product:[{name:'柠檬鸡饭',quantity:2,price:12},{name:'叉烧饭',quantity:1,price:15}],freight:2,totalproduce:3,sum:29,time:'2020-04-04',person:'0007',state:'已完成',id:6},
                {shop:'食为先',addres:'一饭',product:[{name:'柠檬鸡饭',quantity:2,price:12},{name:'叉烧饭',quantity:1,price:15}],freight:2,totalproduce:3,sum:29,time:'2020-04-04',person:'0007',state:'已完成',id:7},
                {shop:'食为先',addres:'一饭',product:[{name:'柠檬鸡饭',quantity:2,price:12},{name:'叉烧饭',quantity:1,price:15}],freight:2,totalproduce:3,sum:29,time:'2020-04-04',person:'0007',state:'已完成',id:8},
                {shop:'食为先',addres:'一饭',product:[{name:'柠檬鸡饭',quantity:2,price:12},{name:'叉烧饭',quantity:1,price:15}],freight:2,totalproduce:3,sum:29,time:'2020-04-04',person:'0007',state:'已完成',id:9},
                {shop:'食为先',addres:'一饭',product:[{name:'柠檬鸡饭',quantity:2,price:12},{name:'叉烧饭',quantity:1,price:15}],freight:2,totalproduce:3,sum:29,time:'2020-04-04',person:'0007',state:'已完成',id:2}
            ]

        }
    },
    methods:{
        aa() {
            console.log("1");
            this.hh='按住了';
        },
        aa2() {
            console.log("1");
            this.hh='拖动了';
        },
        aa3() {
            console.log("1");
            this.hh='松开了';
        },
        aa4() {
            this.hh='按住了 +点图片了';
            console.log("1");

        }
    }
}
</script>


<style scoped>
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
    width:100%;
    background-color: #f3f3f3;
    height: 44px;
    position: fixed;
    top: 0px;
}
.head {
    width:100%;
    display: flex;
    align-items: center;
    font-size: 17px;
    font-weight: 200;
    height: 35px;
    padding: 0px 8px;
}
.head1 {
    background-color: #e886b1;
    border-radius:3px;
    margin-left: 8px;
    height: 18px;
    widows: 25px;
}
.head11 {
    line-height: 16px;
    font-size: 14px;
}
.head2 {
    margin-left:auto;
    font-weight: 500;
    margin-right: 8px;
}
.body {
     padding:0px 16px 5px 16px;
}
.foot {
    height:25px;
    padding:0px 16px 5px 16px;
}
.footfoot {
    text-align: right;
    padding:0px 13px 5px 16px;

}
</style>