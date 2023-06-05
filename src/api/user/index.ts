// 接口请求函数
import request from '@/utils/request'

import type { loginFrom, loginResponseData, userResponseData } from './type'
/**
 * 统一接口管理
 */
enum API {
  LOGIN_URL = '/user/login',
  USERINFO_URL = '/user/info',
}

/**
 * @description 暴露请求函数
 * @param data 请求体数据
 * @returns
 */
export const reqLogin = (data: loginFrom) =>
  request.post<any, loginResponseData>(API.LOGIN_URL, data)

/**
 * @description 获取用户信息接口
 * @returns
 */
export const reqUserInfo = () => request.get<any, userResponseData>(API.USERINFO_URL)
