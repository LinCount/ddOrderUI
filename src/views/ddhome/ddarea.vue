<template>
    <div class="ddarea">
        <el-container style="height:600px">

            <el-header height="44px" style="padding:0px">
                    <span style="font-size:18px;line-height:44px;margin-left:10px">
                        <i class="el-icon-arrow-left" @click="$router.go(-1)" style="font-size:18px;"></i> 
                        {{thearea}}
                    </span>
            </el-header>
                
            <el-main style="padding:8px">
                <div class="ads">
                    <el-carousel trigger="click" height="80px" width="100vw" :interval='9000'>
                        <el-carousel-item v-for="(item,i) in item" :key="i">
                            <img :src="item">
                        </el-carousel-item>
                    </el-carousel>
                </div>

                <div class="choose">
                    <el-col :span="7" style="text-align:center">
                        <el-dropdown trigger="click">
                            <span class="el-dropdown-link" style="font-size:17px;line-height:35px">
                                全部 <i class="el-icon-arrow-down el-icon--right" style="font-size:17px;line-height:35px"></i>
                            </span>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item icon="el-icon-plus">全部</el-dropdown-item>
                                <el-dropdown-item icon="el-icon-circle-plus">秒杀</el-dropdown-item>
                                <el-dropdown-item icon="el-icon-circle-plus-outline">活动</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                    
                    <el-col :span="7" style="text-align:center">
                        <el-dropdown trigger="click">
                                <span class="el-dropdown-link" style="font-size:17px;line-height:35px">
                                    种类 <i class="el-icon-arrow-down el-icon--right" style="font-size:17px;line-height:35px;line-height:35px"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item icon="el-icon-plus">汤/面</el-dropdown-item>
                                    <el-dropdown-item icon="el-icon-circle-plus">小炒</el-dropdown-item>
                                    <el-dropdown-item icon="el-icon-circle-plus-outline">减脂</el-dropdown-item>
                                </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>

                    <el-col :span="7" style="text-align:center">
                        <el-dropdown trigger="click">
                                <span class="el-dropdown-link" style="font-size:17px;line-height:35px">
                                    楼层 <i class="el-icon-arrow-down el-icon--right" style="font-size:17px;line-height:35px"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item icon="el-icon-plus">一楼</el-dropdown-item>
                                    <el-dropdown-item icon="el-icon-circle-plus">二楼</el-dropdown-item>
                                    <el-dropdown-item icon="el-icon-circle-plus-outline">三楼</el-dropdown-item>
                                </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>

                    <el-col :span="3" style="text-align:center">
                        <i class="el-icon-picture-outline" style="font-size:20px;line-height:35px"></i>
                    </el-col>
                </div>

                <div class="product">
                    <div v-for="item in data" :key="item.id" style="overflow:hidden" @click="$router.push('/shop')">
                        <el-container style="height: 120px; border: 1px solid #eee">
                            <el-aside width="120px">
                                <img src="../../../src/assets/img/home/user.png" style="height:110px;width:110px;margin-top:5px">
                            </el-aside>
                            <el-container>
                                
                                <el-header style="text-align:center;height:35px">
                                    <span style="line-height:35px;overflow:hidden">这是一家比较美味的杨国富</span>
                                </el-header>
                                <el-main style="padding:5px 12px;height:85px">
                                    <el-row :span="8">
                                        <p >
                                            <span style="margin-right:1rem;font-size:14px">💗4.2</span>
                                            <span style="margin-right:1rem;font-size:14px">月售648</span>
                                            <span style="margin-right:1rem;font-size:14px">起送￥13</span>
                                        </p>
                                    </el-row>
                                    <el-row :span="8">
                                        <P style="margin-top:3px">
                                            <span v-for="item in 2" :key="item" class="label" >汤/面</span> 
                                        </P>
                                    </el-row>
                                    <el-row :span="8">
                                        <P style="margin-top:3px">
                                            <span v-for="item in 3" :key="item" class="activities" >满200减15</span> 
                                        </P>
                                    </el-row>
                                    
                                    
                                </el-main>
                            </el-container>
                        </el-container>
                        
                    </div>
                </div>
                
            </el-main>
        </el-container>
    </div>
</template>

<script>
// import $ from 'jquery'

export default {
    name:'ddarea',
    data() {
        return {
            item:[
                require('../../../src/assets/img/home/fanhui.png'),
                require('../../../src/assets/img/home/top.png'),
               require(' ../../../src/assets/img/home/user.png'),
            ],
            data:[1,1,1,1,1,1],
            thearea:'新饭',
        }
    },
    created() {
           this.thearea=this.$route.query.thearea;
    },
    methods:{
        
    }
}
</script>

<style scoped>
.header {
    background-color: antiquewhite;
    height:44px;
}
/* 下拉菜单  */
  .el-dropdown-link {
    cursor: pointer;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
/* 轮播图 */
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
.choose {
    margin: 5px 0px;
    height:35px
}
.ads {
    height:70px;
    overflow: hidden;
}
.label {
    /* float:right; */
    font-size:14px;
    border: 1px solid #ff6858;
    color:#ff6858;
    border-radius:3px;
    margin:2px 3px;
    width: 2.5rem;
    text-align: center;
}
.activities {
    /* float:right; */
    font-size:13px;
    border: 1px solid #fcab03;
    color:#fcab03;
    border-radius:3px;
    margin:2px 3px;
    width: 2.5rem;
    text-align: center;
}

</style>
