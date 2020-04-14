<template>
    <div class="ddarea">
        <div class="top">
            <div style="display:flex;align-items:center">
                <img src="~assets/img/home/fanhui.png" @click="$router.go(-1)" style="height:26px;margin-left:10px;">
                <span style="line-height:44px;font-size:16px;font-weight:400;color:black">{{thearea}}</span>
            </div>
            
        </div>
        
        <div class="title">
            <span class="title1" @click="changeisall">全部 ▼</span>
            <span class="title1" @click="changeiskind">种类 ▼</span>
            <span class="title1" @click="changeisplace">楼层 ▼</span>
        </div>

        <!-- 第一个筛选 -->
        <div class="choose" v-show="isall">
            <div class="all" style="background-color: white;width:50px;position:relation;flex:1;text-align:center">
                <div  style="width:50%;margin:auto;box-shadow: 0px  0px 1px 1px rgba(100,100,100,.2);border-radius: 5px;">
                    <p v-for="item in all" :key="item" style="margin:0px 10px;line-height:30px">
                        {{item}}
                    </p>
                </div>
                
            </div>
            <div class="all" style="background-color: white;width:50px;position:relation;flex:1;text-align:center">
                <div>
                    <!-- <p v-for="item in all" :key="item" style="">
                        {{item}}
                    </p> -->
                </div>
            </div>
            <div class="all" style="background-color: white;width:50px;position:relation;flex:1;text-align:center">
                <div>
                    <!-- <p v-for="item in all" :key="item">
                        {{item}}
                    </p> -->
                </div>
            </div>
        </div>

        <!-- 第二个筛选 -->
        <div class="choose" v-show="iskind">
            <div class="all" style="background-color: white;width:50px;position:relation;flex:1;text-align:center">
                <div  style="background-color: white;">
                    <!-- <p v-for="item in all" :key="item">
                        {{item}}
                    </p> -->
                </div>
                
            </div>
            <div class="all" style="background-color: white;width:50px;position:relation;flex:1;text-align:center">
                <div  style="width:50%;margin:auto;box-shadow: 0px  0px 1px 1px rgba(100,100,100,.2);border-radius: 5px;">
                    <p v-for="item in kind" :key="item" style="margin:0px 10px;line-height:30px">
                        {{item}}
                    </p>
                </div>
            </div>
            <div class="all" style="background-color: white;width:50px;position:relation;flex:1;text-align:center">
                <div>
                    <!-- <p v-for="item in all" :key="item">
                        {{item}}
                    </p> -->
                </div>
            </div>
        </div>

        <!-- 第三个筛选 -->
        <div class="choose" v-show="isplace">
            <div class="all" style="background-color: white;width:50px;position:relation;flex:1;text-align:center">
                <div  style="background-color: white;">
                    <!-- <p v-for="item in all" :key="item">
                        {{item}}
                    </p> -->
                </div>
                
            </div>
            <div class="all" style="background-color: white;width:50px;position:relation;flex:1;text-align:center">
                <div>
                    <!-- <p v-for="item in all" :key="item" style="">
                        {{item}}
                    </p> -->
                </div>
            </div>
            <div class="all" style="background-color: white;width:50px;position:relation;flex:1;text-align:center">
                <div  style="width:50%;margin:auto;box-shadow: 0px  0px 1px 1px rgba(100,100,100,.2);border-radius: 5px;">
                    <p v-for="item in place" :key="item" style="margin:0px 10px;line-height:30px">
                        {{item}}
                    </p>
                </div>
            </div>
        </div>
        
        <button class="xxx" @click="aa">11</button>
        <button class="xxx1">11</button>
    </div>
</template>

<script>
import $ from 'jquery'

export default {
    name:'ddarea',
    data() {
        return {
            activeName: 'second',
            thearea:'新饭',
            isall:false,
            all:['全部','特价','活动'],
            iskind:false,
            kind:['汤/面','小炒'],
            isplace:false,
            place:['一楼','二楼','三楼']
        };
        },
        created() {
        //    console.log(this.$route.query.thearea);
           this.thearea=this.$route.query.thearea;

       

        
        },
        methods: {
        aa() {
            console.log("1");
             //    执行JQ
            $(document).ready(function(){
                    $(".xxx1").hide();
            })
            console.log("2");

        },
        changeisall() {
            this.isall=!this.isall;
            this.iskind=false;
            this.isplace=false;
        },
        changeiskind() {
            this.iskind=!this.iskind;
            this.isall=false;
            this.isplace=false;
        },
        changeisplace() {
            this.isplace=!this.isplace;
            this.isall=false;
            this.iskind=false;
        },
    }
}
</script>

<style scoped>

.top {
    width:100%;
    /* background-color: #f3f3f3; */
    height: 44px;
    position: fixed;
    top: 0px;
    justify-content: center;
    
}
.title {
    margin-top:44px;
    display: flex;
    justify-content: center;
    font-size: 16px;
    border-bottom: 2px solid  #f3f3f3;;
}
.title1 {
    flex:1;
    text-align:center;
    color: black;
    line-height: 35px;
}
.choose {
    display: flex;
    justify-content: center;
}
</style>