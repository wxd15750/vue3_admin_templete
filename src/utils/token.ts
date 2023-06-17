const TOKEN_NAME = 'token_keys'

/**
 * @description 设置token
 * @param data 用户的唯一标识token
 */
export const SET_TOKEN = (token: string) => {
  localStorage.setItem(TOKEN_NAME, token)
}

/**
 * @description 获取token
 * @returns token
 */
export const GET_TOKEN = () => {
  return localStorage.getItem(TOKEN_NAME)
}
/**
 * @description 删除token
 * @returns 返回删除成功
 */
export const REMOVE_TOKEN = () => {
  localStorage.removeItem(TOKEN_NAME)
}
