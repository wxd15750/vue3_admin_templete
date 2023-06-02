// 引入项目中所有的全局组件
import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'

// 全局对象
const allGloablComponent = { SvgIcon, Pagination }

// 对外暴露插件对象
export default {
  // 此方法必须是install
  install(app: any) {
    // 注册项目全部的全局组件
    Object.keys(allGloablComponent).forEach((key) => {
      // @ts-ignore
      // 注册为全局组件
      app.component(key, allGloablComponent[key])
    })
  },
}
