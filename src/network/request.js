import axios from "axios";

export function request(config) {
  // 1.创建axios的实例
  const instance = axios.create({
  timeout: 5000
  });

  // 2.axios的拦截器
  // 2.1.请求拦截的作用
  instance.interceptors.request.use(
    config => {
      config.headers["Content-Type"] = "application/json";
      if (localStorage.token) {
        config.headers.Authorization = `token ${localStorage.token}`;
      }
      return config;
    },
    err => {
      console.log(err);
    }
  );

  // 2.2.响应拦截
  instance.interceptors.response.use(
    res => {
      console.log(res);
      return res;
    },
    err => {
      if (err.response) {
        switch (err.response.status) {
          case 401:
            // 返回 401 清除token信息并跳转到登录页面
            this.$store.commit('loginOut');
            this.$router.replace({
              path: "login",
              query: { redirect: this.$router.currentRoute.fullPath }
            });
        }
      }
    }
  );

  // 3.发送真正的网络请求
  return instance(config);
}
