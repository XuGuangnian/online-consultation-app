import { computed, ref } from 'vue'
// 1. 导入创建store的函数
import { defineStore } from 'pinia'

// 2. 创建store并导出=> 命名规范：useXxxStore
// 语法：export const useCountStore(函数) = defineStore('id唯一', callback回调函数)
export const useCountStore = defineStore('count-store', () => {
  // == 定义pinia全局数据和改数据的方法 ==
  // 1. state 全局数据 =》使用ref或reactive函数
  const count = ref(1)
  const person = ref({ name: '小红', age: 18 })

  // 2. mutations（同步） 修改全局数据的方法 => 普通方法
  const add = () => {
    count.value++
  }

  // 3. getters 基于state得到新变量（计算属性）=> computed函数
  const doubleCount = computed(() => count.value * 2)

  // 4. actions (异步) =》普通方法
  const asyncAdd = () => {
    setTimeout(() => {
      count.value = 1e3
    }, 3000);
  }

  // 对外提供全局状态数据和方法
  return { count, person, add, doubleCount, asyncAdd }
})
