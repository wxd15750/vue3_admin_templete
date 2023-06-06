// 整个项目的大仓库
import {createPinia} from  'pinia'
// 创建大仓库
const pinia = createPinia()
// 对外暴漏，入口文件需要安装仓库
export default pinia