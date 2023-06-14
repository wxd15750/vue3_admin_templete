// 定义layout组件相关的仓库
import { defineStore } from 'pinia'

const useLayoutSettingStore = defineStore('settingStore', {
  state() {
    return {
      fold: false,
    }
  },
})
export default useLayoutSettingStore
