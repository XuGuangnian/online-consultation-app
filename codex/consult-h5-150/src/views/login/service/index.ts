import { Toast, type FormInstance } from 'vant'
import { ref, onUnmounted } from 'vue'
import { sendMobileCode } from '@/api/user'

export function useSendCode(mobile: string) {
  const code = ref('') // 验证码
  const time = ref(0) // 倒计时时间
  const form = ref<FormInstance>() // 获取表单实例
  let timeId: number // 倒计时定时器ID
  const send = async () => {
    // 已经倒计时time的值大于0，60s内不能重复发送验证码
    if (time.value > 0) return
    try {
      // 输入手机号时，对手机号进行校验
      await form.value?.validate('mobile')
      const res = await sendMobileCode(mobile, 'login')
      Toast.success('发送成功') // Toast.success 只能传一个参数
      console.log(res.data.code)
      // 填入验证码
      code.value = res.data.code
      // 倒计时开始
      time.value = 60
      timeId = window.setInterval(() => {
        time.value--
        if (time.value <= 0) window.clearInterval(timeId)
      }, 1000)
    } catch (error) {
      console.log(error)
    }
  }
  onUnmounted(() => {
    // 避免内存泄露
    window.clearInterval(timeId)
  })
  // 返回：提供给页面使用
  return { code, time, form, send }
}
