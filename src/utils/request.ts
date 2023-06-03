// 引入axios
import axios from 'axios'

// 第一步：利用axios对象的create方法，去创建axios实例（其他的配置:基础路径、超时时间）

export const requeset = axios.create({
  // 基础路径
  baseURL:import.meta.env.VITE_APP_BASE_API,
  // 设置超时时间
  timeout:5000
})