// 创建用户相关的小仓库
import { defineStore } from 'pinia'
// 创建用户小仓库
const useUserStore = defineStore('User',{
  state:()=> {
    return {}
  },
  actions:{
    // 用户登录的方法
    userLogin(){
      console.log(123);
      
    }
  },
  getters:{

  }
})

// 对外暴漏获取小仓库的方法
export default useUserStore