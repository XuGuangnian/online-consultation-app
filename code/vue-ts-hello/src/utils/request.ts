import axios from 'axios'
// 1. 创建新axios实例=》request 等价于 axios
const request = axios.create({
  baseURL: 'http://geek.itheima.net/v1_0',
})

// 2. 添加拦截器
// 添加请求拦截器=》发请求之前执行
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么=》统一添加token
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器=》请求响应之后
request.interceptors.response.use(function (response) {
  // 成功：2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么=》1. 简化返回的数据  2. 统一的错误提示
  console.log('1.添加响应拦截器:', response)
  return response.data.data
}, function (error) {
  // 失败：超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么=》token失效（401），跳回登录页
  return Promise.reject(error);
});


// 3. 导出request
export { request }