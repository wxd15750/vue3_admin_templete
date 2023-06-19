import request from '@/utils/request'
import { ResponseData, UserInfoType, loginType } from './type'
import { userAPI } from '../apiAdress/userApi'

// 获取用户信息

export const reqUserInfo = () => request.get<any, UserInfoType>(userAPI.USER_INFO)

// 登录
export const reqLogin = (data: loginType) =>
  request.post<any, ResponseData>(userAPI.LOGIN_API, data)

// 退出登录
export const reqLogout = () => request.post<any, null>(userAPI.LOGOUT_API)
