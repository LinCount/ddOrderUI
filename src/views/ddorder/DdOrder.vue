<template>
    <div class="order">
        <h3>

        </h3>
        <div v-for="item in order" :key="item.id" class="order1">
            <div class="head">
                <span>{{item.shop}}</span>
                <span>{{item.addres}}</span>
                <span>{{item.state}}</span>
            </div>
            <div class="body">
                <div v-for="items in item.product" :key="items.name">
                    <span>{{items.name}}</span>
                    <span>X{{items.quantity}}</span>
                    <span>价格:{{items.price}}</span>
                </div>
            </div>
            <div class="foot">
                <span>共：{{item.freight}}件</span>
                <span>总价：{{item.sum}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"DdOrder",
    data() {
        return {
            //freight:运费,totalproduce:总件数,sum:总价,person:配送人编号,state:订单状态（正在配送/已完成）
            order:[
                {shop:'食为先',addres:'一饭',product:[{name:'柠檬鸡饭',quantity:2,price:12},{name:'叉烧饭',quantity:1,price:15}],freight:2,totalproduce:2,sum:29,time:'2020-04-04',person:'0007',state:'已完成',id:1},
                {shop:'食为先',addres:'一饭',product:[{name:'柠檬鸡饭',quantity:2,price:12},{name:'叉烧饭',quantity:1,price:15}],freight:2,totalproduce:2,sum:29,time:'2020-04-04',person:'0007',state:'已完成',id:2}
            ]

        }
    },
    methods:{
    }
}
</script>
<style scoped>
/* .order {

} */
.order1 {
    padding: 5px 0px;
    
}
</style>