// 引入axios
import axios, { AxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'
import { GET_TOKEN } from './token'
// 引入用户相关的store
// import useUserStore from '@/store/modules/user'

// 功能失败的错误原因
export const authErrMessage: any = {
  10031: '登录失效，需要重新登录',
  10032: '您太久没登录，请重新登录~',
  10033: '账户未绑定角色，请联系管理员绑定角色',
  10034: '该用户未注册，请联系管理员注册用户',
  10035: 'code 无法获取对应第三方平台用户',
  10036: '该账户未关联员工，请联系管理员做关联',
  10037: '账号已无效',
  10038: '账号未找到',
}

// 请求失败的错误原因
export const networkErrMessage: any = {
  400: '错误的请求',
  401: '未授权，请重新登录,TOKEN过期',
  403: '拒绝访问',
  404: '未找到该资源，请求地址错误',
  405: '请求方法未允许',
  408: '请求超时',
  500: '服务器端出错',
  502: '网络错误',
  503: '服务不可用',
  504: '网络超时',
  505: 'http版本不支持该请求',
}

// 所有请求列表容器
const requestListMap = new Map()

/**
 * 每一个请求生成一个唯一的key
 * @param config 请求配置对象
 * @returns 唯一的key
 */
function getRequestKey(config: AxiosRequestConfig) {
  const { url, method, params = {}, data = {} } = config
  return [url, method, JSON.stringify(params), JSON.stringify(data)].join('&')
}

const CancelToken = axios.CancelToken

/**
 * 添加请求key
 * @param config
 */
function addRequestKey(config: AxiosRequestConfig) {
  const requestKey = getRequestKey(config)
  config.cancelToken = new CancelToken((cancel) => {
    if (!requestListMap.has(requestKey)) {
      requestListMap.set(requestKey, {
        cancel,
        pathname: window.location.pathname,
      })
    }
  })
}

/**
 * 删除请求key
 * @param config
 */
function removeRequestKey(config: AxiosRequestConfig) {
  const requestKey = getRequestKey(config)
  if (requestListMap.has(requestKey)) {
    const { cancel } = requestListMap.get(requestKey)
    cancel()
    requestListMap.delete(requestKey)
  }
}

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
  const token = GET_TOKEN()
  // console.log(token)

  // const useStore = useUserStore()
  if (token !== null) {
    config.headers.token = token
  }
  removeRequestKey(config) // 删除key
  addRequestKey(config) // 添加key
  // 返回配置对象
  return config
})

// 第三步：给request实例添加响应拦截器
request.interceptors.response.use(
  (response) => {
    // 成功的回调
    removeRequestKey(response.config) // 删除key
    const code = response.data.code
    if (code === 20000) {
      // 简化数据
      return response.data
    } else {
      let errMessage = authErrMessage[code]
      if (errMessage) {
        // 功能出错，需要特殊处理，比如要退出登录等
        // useUserStore().logout();
      } else {
        errMessage = response.data.message
      }
      ElMessage.error(errMessage)
      return Promise.reject(errMessage)
    }
  },
  (error) => {
    error.config && removeRequestKey(error.config) // 删除key
    let errMessage = '未知错误，请联系管理员解决'
    if (error.response) {
      // error.response有值，说明服务器有响应，响应结果是错误的，要根据响应状态码error.response.status来提示错误
      errMessage = networkErrMessage[error.response.status]
    } else {
      // error.response没有值，说明服务器没有响应，请求在客户端就失败了，要根据浏览器提示的错误信息来处理
      if (error.message.indexOf('timeout') > -1) {
        // 请求超时
        errMessage = '当前网络环境不稳定，请切换4/5G网络或WIFI网络试试'
      } else if (error.message.indexOf('Network') > -1) {
        // 断网了
        errMessage = '没有检测到网络，请打开网络链接试试'
      } else if (error.message.indexOf('canceled') > -1) {
        errMessage = '请求取消了'
      }
    }
    ElMessage.error(errMessage)
    return Promise.reject(errMessage)
    /*
    // 失败的回调：处理http网络错误
    // 定义一个变量，存储网络错误信息
    //   let message = ''
    //   // http状态码
    //   const status = error.response.code
    //   switch (status) {
    //     case 401:
    //       message = 'TOKEN过期'
    //       break
    //     case 403:
    //       message = '无权访问'
    //       break
    //     case 404:
    //       message = '请求地址错误'
    //       break
    //     case 500:
    //       message = '服务器出现问题'
    //       break
    //     default:
    //       message = '网络出现错误'
    //       break
    //   }
    //   // 提示错误信息
    //   ElMessage({
    //     type: 'error',
    //     message,
    //   })
    //   return Promise.reject(error)
    */
  },
)

// 对外暴露
export { requestListMap }
export default request
