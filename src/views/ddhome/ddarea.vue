<template>
    <div class="ddarea" @click="close">
        <div class="top">
            <div style="display:flex;align-items:center">
                <img src="~assets/img/home/fanhui.png" @click="$router.go(-1)" style="height:26px;margin-left:10px;">
                <span style="line-height:44px;font-size:16px;font-weight:400;color:black">{{thearea}}</span>
            </div>
        </div>

        
        
        <div class="title">
            <span class="title1" @click="changeisall" id="choosefont1">全部 ▼</span>
            <span class="title1" @click="changeiskind" id="choosefont2">种类 ▼</span>
            <span class="title1" @click="changeisplace" id="choosefont3">楼层 ▼</span>
        </div>

        <!-- 第一个筛选 -->
        <div class="choose" v-show="isall" id="choose1">
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
        <div class="choose" v-show="iskind"  id="choose2">
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
        <div class="choose" v-show="isplace"  id="choose3">
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


    </div>
</template>

<script>
// import $ from 'jquery'

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
        mounted() {

        },
        methods: {
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
        close(e) {
            let cl1=document.getElementById("choose1");
            let cl2=document.getElementById("choose2");
            let cl3=document.getElementById("choose3");
            let clfont1=document.getElementById("choosefont1");
            let clfont2=document.getElementById("choosefont2");
            let clfont3=document.getElementById("choosefont3");
            //如果点的是开关，继续判断
            if(clfont1.contains(e.target) || clfont2.contains(e.target) || clfont3.contains(e.target)) {                     

                 //判断开
            console.log("1");

                return

            } 
            //如果点的是选项，结束该函数
            if(cl1.contains(e.target) || cl2.contains(e.target) || cl3.contains(e.target)) {
                console.log("2");
                return
            }
            //如果点的空白区域，关闭选项
            //点的空白区域，那么就是！false 与 ！false
            //虽然没用到cl3 clfont2等等，但是一样能正确运行，因为在第一个if时候已经运行并且return了
            if(!clfont1.contains(e.target) && !cl1.contains(e.target)) {
                console.log("3");

                this.isplace=false;
                this.isall=false;
                this.iskind=false;
            }
                



        }
        
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