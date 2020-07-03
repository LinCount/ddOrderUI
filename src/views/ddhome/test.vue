<template>
    <div>
        <!-- <p>-{{userpofile.uid}}-</p> -->
        <!-- <div id="main1" style="widht:400px;height:400px"></div> -->
        <div id="main2" style="widht:400px;height:400px"></div>
    </div>
</template>

<script>
import store from '@/store/index'
import {mapState} from 'vuex'

require("echarts/lib/chart/pie");
// require('echarts/lib/chart/bar')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
// require('echarts/lib/component/datazoom')
require('echarts/lib/component/legend')

export default {
    data() {
        return {

        }
    },
    store,
    computed:mapState(['userpofile']),
    methods: {
      crateEchartbpie() {
          this.axios.get(`/order/echartsData?userid=${this.userpofile.uid}`)
          .then(res=> {
              console.log(res)
          })

          let echarts = require('echarts/lib/echarts')

          let mychart=echarts.init(document.getElementById("main2"));

          let option = {
            title: {
                // text: '类型分布',
                left: 'center'
            },
            //提示信息，指着时候的提示信息
            // 折线（区域）图、柱状（条形）图、K线图 : {a}（系列名称），{b}（类目值），{c}（数值）, {d}（无）
            // 散点图（气泡）图 : {a}（系列名称），{b}（数据名称），{c}（数值数组）, {d}（无）
            // 地图 : {a}（系列名称），{b}（区域名称），{c}（合并数值）, {d}（无）
            // 饼图、仪表盘、漏斗图: {a}（系列名称），{b}（数据项名称），{c}（数值）, {d}（百分比）
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
                // formatter: '提示信息'
            },
            // 图例的位置、数据
            legend: {
                //scroll是可翻页的图例
                // type: 'scroll',
                //图例朝向horizontal 横的
                orient: 'vertical',
                right: 10,
                top: 50,
                bottom: 20,
                data: ['快餐','早餐','烧烤','汤/面','小炒','小吃'],
                //筛选展示指定部分数据，布尔值
                // selected: data.selected
            },
            series: [
                {
                    name: '类型',
                    type: 'pie',
                    //设置半径值
                    radius: '50%',
                    //设置饼图位置
                    center: ['40%', '50%'],
                    data: [
                        {name:'汤/面',value:'4'},
                        {name:'快餐',value:'14'},
                        {name:'早餐',value:'7'},
                        {name:'烧烤',value:'8'},
                        {name:'小炒',value:'2'}
                    ],
                    emphasis: {
                        //控制阴影的
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        };

        mychart.setOption(option);


      }
    },
    mounted () {
        this.crateEchartbpie()
    }
}
</script>

<style>

</style>