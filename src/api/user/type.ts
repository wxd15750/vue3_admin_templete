// 登录接口携带参数返回值类型
export interface loginFrom {
  username: string
  password: string
}

// token类型
interface dataType {
  token: string
}

// 登录接口返回数据类型
export interface loginResponseData {
  code: number
  data: dataType
}

// 定义服务器返回用户信息相关的数据类型
interface userInfoTypoe {
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
interface userType {
  checkUser: userInfoTypoe
}

export interface userResponseData {
  code: number
  data: userType
}
