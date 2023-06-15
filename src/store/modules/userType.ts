import type { RouteRecordRaw } from 'vue-router'
// 定义用户信息store的ts类型
export interface UserState {
  token: string | null
  menuRoutes: RouteRecordRaw[]
  username: string
  avatar: string
}
