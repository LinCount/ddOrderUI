import {request} from "./request";

export function login(username,pwd) {
  return request({
    url: '/user/login',
    method:'POST',
    data:{
      username,
      pwd,
    }
  })
}
export function register(username,pwd) {
  return request({
    url: '/user/register',
    method:'POST',
    data:{
      username,
      pwd,
    }
  })
}

