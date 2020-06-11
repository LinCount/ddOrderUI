 import Vue from 'vue';
 import Vuex from 'vuex';

 Vue.use(Vuex);



 const store = new Vuex.Store(
     {
         state:{
             //购物车数据 【 {number,item:[{菜名...}],
             //             {number,item:[{菜名...}]
             //          】
             carfood:[],
            //购物车总量
            num:0,
            //购物车总价
            sumprice:0,
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
            addfood(state,data) {
                state.carfood.push(data)
                // 算购物车总价
                state.sumprice=0
                for(let i=0;i<state.carfood.length;i++) {
                        let a=state.carfood[i].item.price*state.carfood[i].number
                        state.sumprice+=a
                }
                console.log(state.carfood)
                console.log(state.sumprice)

            }

         },
         actions:{

         },
         getters:{
             

         }
       
     }
 )

 export default store