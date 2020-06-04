 import Vue from 'vue';
 import Vuex from 'vuex';

 Vue.use(Vuex);



 const store = new Vuex.Store(
     {
         state:{
            set:true,
            nologin:true,
            profilenews:{
                name:'czl',
                nickname:'你好呀！CZL',
            }

         },
         mutations:{
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
            }

         },
         actions:{

         },
         getters:{
             

         }
       
     }
 )

 export default store