import request from '@/utils/request'
import type { loginFormType, loginResponseData, userResponseData } from './type'
/**
 *  枚举接口
 *  enum API{
 *    LOGIN_URL='/user/login',
 *    USERINFO_URL = '/user/info'
 *  }
 * 暴露接口请求函数
 * export

 * */
// enum API{
//   LOGIN_URL='/user/login',
//   USERINFO_URL = '/user/info'
// }

// export const reqLogin = (data:loginFormType) => request.post<any,loginResponseData>(API.LOGIN_URL,data)
// export const reqUserInfo = () => request.get<any,userResponseData>(API.USERINFO_URL)

// 暴露接口请求函数
export default {
  reqLogin(data: loginFormType) {
    return request.post<any, loginResponseData>('/user/login', data)
  },
}
