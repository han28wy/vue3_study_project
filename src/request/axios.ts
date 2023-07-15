import axios from 'axios';
 
const baseURL = import.meta.env.VITE_BASEURL;
const request = axios.create({
  baseURL,
  timeout: 20000, // 请求超时 20s
});
 
// 前置拦截器（发起请求之前的拦截）
request.interceptors.request.use(
  (config) => {
    // config.headers['token'] = 'token';
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
 
// 后置拦截器（获取到响应时的拦截）
request.interceptors.response.use(
  (response) => {
    /**
     * 根据你的项目实际情况来对 response 和 error 做处理
     * 这里对 response 和 error 不做任何处理，直接返回
     */
    const { data } = response;
    const { code } = response.data;
    return response.data;
 
    // if (code === 200) {
    //   return response.data;
    // } else {
    //   return Promise.reject(response.data);
    // }
  },
  (error) => {
    if (error.response && error.response.data) {
      const code = error.response.status;
      const msg = error.response.data.message;
      // ElMessage.error(`Code: ${code}, Message: ${msg}`);
      console.error(`[Axios Error]`, error.response);
    } else {
      // ElMessage.error(`${error}`);
    }
    return Promise.reject(error);
  },
);
 
export default request;