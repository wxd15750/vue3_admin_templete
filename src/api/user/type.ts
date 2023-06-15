// 登录接口需要携带的参数
export interface loginFormType {
  username: string
  password: string
}
// 登录接口返回的数据类型
interface dataType {
  token?: string
  message?: string
}
export interface loginResponseData {
  code: number
  data: dataType
}
// 服务器返回用户信息相关的接口
interface userType {
  checkUser: userInfoType
}
interface userInfoType {
  userId: number
  avatar: string
  username: string
  password: string
  desc: string
  roles: string[]
  buttons: string[]
  routes: string[]
  token: string
}
export interface userResponseData {
  code: number
  data: userType
}
