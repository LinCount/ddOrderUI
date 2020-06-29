<template>
  <div class="shopcar">
    <el-card class="box-card" style="height:100%;" body-style="padding:10px" shadow="never" >
        <!-- 头部 -->
        <div slot="header" class="clearfix">
            <span>已选商品 <span style="font-size:13px;color:#bababa">共{{num}}件</span></span>
            <el-button style="float: right; padding: 3px 0" type="text"   >
                <i class="el-icon-delete"  style="color:#d91a04;"></i>
                <span style="color:#d91a04;">清空</span>
            </el-button>
        </div>
        <!-- 主体 -->
        <div >
            
            <div v-for="(item,i) in carfood" :key="i"  style="height:20vw">
                <el-container>
                    <el-aside width="18vw">
                        <img src="../../../src/assets/img/home/user.png" style="width:100%">
                    </el-aside>
                    <el-main style="padding:3px">
                            <p style="height:10vw;margin-top:5px;">{{item.item.name}}</p>
                            <span style="color:red">￥{{item.item.price}}</span>
                            <span style="float:right">X{{item.number}}</span>
                    </el-main>
                </el-container>
            </div>
        </div>
        <div class="bottom" >
            <span style="line-height:40px;font-weight:600">总计 {{sumprice}} 元</span>
            <el-button @click="pay(sumprice)" type="primary" plain style="float:right" size='small'>下单</el-button>
        </div>
    </el-card>
  </div>
</template>

<script>
import store from '@/store/index'
import {mapState} from 'vuex'

export default {
    name:'shopcar',
    data() {
        return {
            sum:0
        }
    },
    store,
    computed:mapState(['carfood','num','sumprice']),
    methods:{
        //提示支付成功，把所有订单传后端保存，清空购物车
        pay(sumprice) {
            //构造数据
            let data={userid:'',shopid:'',shopname:'',number:'',item:[]}
            data.shopid = this.$route.params.id
            data.number=this.num
            for(let i=0;i<this.carfood.length;i++) {
                data.item[i]=this.carfood[i].item
            }
            console.log(data)
            // console.log(this.carfood)



            this.$alert(`成功支付${sumprice}元，祝您用餐愉快`, '支付成功', {
            confirmButtonText: '确定',
            });

        this.$store.commit('clearcar')
      }
    }

}
</script>

<style scoped>
.shopcar {
    height:40px;
    width: 40px;
}
.el-card__header {
    padding: 10px;
}
.bottom {
    height:40px;
    background-color:white;
    position:fixed;
    bottom:82px;
    border-radius:3px;
    width:65%
}
</style>