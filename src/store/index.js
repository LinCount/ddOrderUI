 import Vue from 'vue';
 import Vuex from 'vuex';

 Vue.use(Vuex);



 const store = new Vuex.Store(
     {
         state:{
             //购物车数据
             carfood:[],
            //购物车总量
            num:0,
            set:true,
            nologin:true,
            profilenews:{
                name:'czl',
                nickname:'你好呀！CZL',
            }

         },
         mutations:{
             // 修改购物车总数
            changenum(state,a) {
                state.num+=a
            },
            loginState(state){
                state.nologin=false

            },
            noLoginState(state){
                state.nologin=true

            },
            hiddenMainBar(state){
                state.set = false
            },
            showMainBar(state){
                state.set = true
            },
            addfoot(state,data) {
                state.carfood.push(data)
                console.log(state.carfood)
            }

         },
         actions:{

         },
         getters:{
             

         }
       
     }
 )

 export default store