import request from '@/utils/request'
import { ResponseData, UserInfoType, loginType } from './type'

// 接口地址
enum userAPI {
  USER_INFO = '/admin/acl/index/info',
  LOGIN_API = '/admin/acl/index/login',
  LOGOUT_API = '/admin/acl/index/logout',
}

// 获取用户信息

export const reqUserInfo = () => request.get<any, UserInfoType>(userAPI.USER_INFO)

// 登录
export const reqLogin = (data: loginType) =>
  request.post<any, ResponseData>(userAPI.LOGIN_API, data)

// 退出登录
export const reqLogout = () => request.post<any, null>(userAPI.LOGOUT_API)
