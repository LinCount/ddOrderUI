import {request} from './request'

export function orderdata(uid){
    return request(
        {
          url:'/order/historyOrder',
          method:'GET',
          params:{
              userid:uid
          }         
        }
    )
}