# Vue 3 + TypeScript + Vite 后台管理系统

# 项目的启动命令

pnpm run dev
说明：此项目必须使用 pnpm 来安装依赖，npm 和 yarn 都是不可以的

# 项目地址

https://github.com/wxd15750/vue3_admin_templete.git

账号：admin
密码：111111

# 环境变量的判断

pnpm i --save-dev @types/node

```tsx
// 环境的判断
let baseUrl = ''
const env = process.env.NODE_ENV
if (env === 'development') {
  baseUrl = import.meta.env.VITE_APP_BASE_API
} else if (env === 'production') {
  baseUrl = import.meta.env.VITE_APP_BASE_API
} else {
  baseUrl = import.meta.env.VITE_APP_BASE_API
}
```
