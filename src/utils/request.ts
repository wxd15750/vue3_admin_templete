// 引入axios
import axios from 'axios'
import { ElMessage } from 'element-plus'
// import { GET_TOKEN } from './token'
// 引入用户相关的store
import useUserStore from '@/store/modules/user'

// 第一步：利用axios对象的create方法，去创建axios实例（其他的配置:基础路径、超时时间）

const request = axios.create({
  // 基础路径
  // baseURL: 'https://zzdj.zunzhongdj.cn/',
  baseURL: import.meta.env.VITE_APP_BASE_API,
  // 设置超时时间
  timeout: 5000,
})

// 第二步：给request实例添加请求拦截器
request.interceptors.request.use((config) => {
  // 设置token请求头
  // const token = GET_TOKEN()
  const useStore = useUserStore()
  if (useStore.token) {
    config.headers.token = useStore.token
  }
  // 返回配置对象
  return config
})

// 第三步：给request实例添加响应拦截器
request.interceptors.response.use(
  (response) => {
    // 成功的回调
    // 简化数据
    return response
  },
  (error) => {
    // 失败的回调：处理http网络错误
    // 定义一个变量，存储网络错误信息
    let message = ''
    // http状态码
    const status = error.response.status
    switch (status) {
      case 401:
        message = 'TOKEN过期'
        break
      case 403:
        message = '无权访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器出现问题'
        break
      default:
        message = '网络出现错误'
        break
    }
    // 提示错误信息
    ElMessage({
      type: 'error',
      message,
    })
    return Promise.reject(error)
  },
)

// 对外暴露
export default request
