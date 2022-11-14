/**
 * 全局可复用自定义hooks
 * 抽离技巧：
 * 1. 相同部分直接拷贝
 * 2. 不同的部分以函数参数形式传入
 */
import { followDoctor } from '@/api/consult'
import type { FollowType } from '@/types/consult'
import { ref } from 'vue'
import { Toast } from 'vant'
const useFollow = (type: FollowType = 'doc') => {
  const loading = ref(false)
  // 点击执行回调函数
  const follow = async (doc: { id: string; likeFlag: 0 | 1 }) => {
    // 防止重复点击
    loading.value = true
    try {
      await followDoctor(doc.id, type)
      doc.likeFlag = doc.likeFlag === 1 ? 0 : 1
      Toast.success(doc.likeFlag === 1 ? '关注成功' : '取关成功')
    } finally {
      // 说明1：catch是在try代码块出现错误执行
      // 说明2：finally是try代码块执行成功或失败都会执行
      // 无论 try / catch 结果如何都会执行的代码块
      // 说明：成功或失败都需要关闭
      loading.value = false
    }
  }
  // 返回页面中需要使用的数据和函数
  return { loading, follow }
}

export { useFollow }
