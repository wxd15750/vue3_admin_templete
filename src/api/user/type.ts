
// 定义接口类型
// 登录的接口类型
export interface loginType{
  password: string
  username: string
}
export interface ResponseData{
  code: number
  message: string
  data:DataType
}
interface DataType{
  token:string
}

// 用户信息相关的接口
export interface UserInfoType {
  code: number
  message:string
  data:UserDataType
}
interface UserDataType{
  routes:string[]
  buttons:string[]
  roles:string[]
  name:string
  avatar:string
}