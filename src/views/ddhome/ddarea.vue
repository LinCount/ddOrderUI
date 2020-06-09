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
                                <el-dropdown-item >全部</el-dropdown-item>
                                <el-dropdown-item >秒杀</el-dropdown-item>
                                <el-dropdown-item >活动</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>
                    
                    <el-col :span="7" style="text-align:center">
                        <el-dropdown trigger="click">
                                <span class="el-dropdown-link" style="font-size:17px;line-height:35px">
                                    种类 <i class="el-icon-arrow-down el-icon--right" style="font-size:17px;line-height:35px;line-height:35px"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item  v-for="(item,i) in foodclass" :key="i">{{item}}</el-dropdown-item>
                                    <!-- <el-dropdown-item >早餐</el-dropdown-item>
                                    <el-dropdown-item >烧烤</el-dropdown-item>
                                    <el-dropdown-item >汤/面</el-dropdown-item>
                                    <el-dropdown-item >小炒</el-dropdown-item>
                                    <el-dropdown-item >小吃</el-dropdown-item> -->
                                </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>

                    <el-col :span="7" style="text-align:center">
                        <el-dropdown trigger="click">
                                <span class="el-dropdown-link" style="font-size:17px;line-height:35px">
                                    楼层 <i class="el-icon-arrow-down el-icon--right" style="font-size:17px;line-height:35px"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown">
                                    <el-dropdown-item >一楼</el-dropdown-item>
                                    <el-dropdown-item >二楼</el-dropdown-item>
                                    <el-dropdown-item >三楼</el-dropdown-item>
                                </el-dropdown-menu>
                        </el-dropdown>
                    </el-col>

                    <el-col :span="3" style="text-align:center">
                        <i class="el-icon-picture-outline" style="font-size:20px;line-height:35px"></i>
                    </el-col>
                </div>

                <div class="product">
                    <div v-for="item in data" :key="item.id" style="overflow:hidden" @click="$router.push(`/shop/${item.id}`,)">
                        <el-container style="height: 120px; border: 1px solid #eee">
                            <el-aside width="120px">
                                <img src="../../../src/assets/img/home/user.png" style="height:110px;width:110px;margin-top:5px">
                            </el-aside>
                            <el-container>
                                
                                <el-header style="text-align:center;height:35px">
                                    <span style="line-height:35px;overflow:hidden">{{item.shopname}}</span>
                                </el-header>
                                <el-main style="padding:5px 12px;height:85px">
                                    <el-row :span="8">
                                        <p >
                                            <span class="info">💗{{item.info[0]}}</span>
                                            <span class="info">月售{{item.info[1]}}</span>
                                            <span class="info">起送￥{{item.info[2]}}</span>
                                        </p>
                                    </el-row>
                                    <el-row :span="8">
                                        <P style="margin-top:3px">
                                            <span v-for="(items,i) in item.label" :key="i" class="label" >{{items}}</span> 
                                        </P>
                                    </el-row>
                                    <el-row :span="8">
                                        <P style="margin-top:3px">
                                            <span v-for="(items,i) in item.activities" :key="i" class="activities" >{{items}}</span> 
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
            data:[
                {id:1134,img:'../../../src/assets/img/home/user.png',shopname:'杨国富',info:[4.2,648,13],label:['汤/面'],activities:['满200减55','满100减22','满50减10']},
                {id:1135,img:'../../../src/assets/img/home/user.png',shopname:'食为鲜',info:[4.2,648,13],label:['汤/面'],activities:['满200减55','满100减22','满50减10']},
                {id:1136,img:'../../../src/assets/img/home/user.png',shopname:'朵儿料理',info:[4.2,648,13],label:['汤/面'],activities:['满200减55','满100减22','满50减10']},
                {id:1137,img:'../../../src/assets/img/home/user.png',shopname:'大东烧烤',info:[4.2,648,13],label:['汤/面'],activities:['满200减55','满100减22','满50减10']},
                {id:1138,img:'../../../src/assets/img/home/user.png',shopname:'这是一家比较美味的杨国富',info:[4.2,648,13],label:['汤/面'],activities:['满200减55','满100减22','满50减10']},
                {id:1139,img:'../../../src/assets/img/home/user.png',shopname:'这是一家比较美味的杨国富',info:[4.2,648,13],label:['汤/面'],activities:['满200减55','满100减22','满50减10']},
                {id:1133,img:'../../../src/assets/img/home/user.png',shopname:'这是一家比较美味的杨国富',info:[4.2,648,13],label:['汤/面'],activities:['满200减55','满100减22','满50减10']}
            ],
            foodclass:['快餐','早餐','烧烤','汤/面','小炒','小吃'],
            thearea:'新饭',
        }
    },
    created() {
           this.thearea=this.$route.query.thearea;

           this.axios.get('api/shop/getShop')
            .then(res=>{
            console.log(res)
            })

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
.info {
    margin-right:1rem;
    font-size:14px
}

</style>
