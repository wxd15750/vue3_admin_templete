// 环境的判断
let baseUrl = ''
const timer = 5000
const env = process.env.NODE_ENV
if (env === 'development') {
  baseUrl = import.meta.env.VITE_APP_BASE_API
} else if (env === 'production') {
  baseUrl = import.meta.env.VITE_APP_BASE_API
} else {
  baseUrl = import.meta.env.VITE_APP_BASE_API
}
export default {
  baseUrl,
  timer,
}
