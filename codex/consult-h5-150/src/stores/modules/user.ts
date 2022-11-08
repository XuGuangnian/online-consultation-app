import { defineStore } from 'pinia'
import { ref } from 'vue'
// type 指明导入的是ts的类型
import type { User } from '@/types/user'

/**
 * 用户store：存储登录用户相关数据
 */
export const useUserStore = defineStore(
  'cp-user',
  () => {
    // 全局变量1：登录用户
    // 空对象的变量通过 as断言指定类型
    const user = ref({} as User)

    // 方法：
    // 1. 存储用户信息=> 登录成功
    const setUser = (userData: User) => {
      user.value = userData
    }
    // 2. 删除用户信息=》退出登录
    const delUser = () => {
      user.value = {} as User
    }

    // 返回变量和方法
    return {
      user,
      setUser,
      delUser
    }
  },
  {
    persist: true // 开启数据持久化
  }
)
