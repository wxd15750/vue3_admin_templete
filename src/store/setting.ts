// 定义layout组件相关的仓库
import { defineStore } from 'pinia'

const useLayoutSettingStore = defineStore('settingStore', {
  state() {
    return {
      fold: false, //用户控制菜单折叠还是收起
      refsh: false, // 仓库这个属性用于控制刷新效果
    }
  },
})
export default useLayoutSettingStore
