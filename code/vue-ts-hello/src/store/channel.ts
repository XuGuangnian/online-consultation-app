import { defineStore } from 'pinia'
import { ref } from 'vue'

// 2. 创建store并导出=> 命名规范：useXxxStore
// 语法：export const useCountStore(函数) = defineStore('id唯一', callback回调函数)
export const useChannelStore = defineStore('channel-store', () => {
  // == 定义pinia全局数据和改数据的方法 ==

  // 1. 当前点击的频道ID
  const channelId = ref(0)
  // 2. 修改频道ID
  const changeChannel = (id: number) => {
    channelId.value = id
  }
  return { channelId, changeChannel }
})