import type { User, CodeType, UserInfo } from '@/types/user'
import { request } from '@/utils/request'

// 说明❓：封装api函数，通过request.method<指定data数据类型>
// 密码登录
export const loginByPassword = (mobile: string, password: string) =>
  request.post<User>('/login/password', { mobile, password })

// 发送验证码
export const sendMobileCode = (mobile: string, type: CodeType) =>
  request.get<{ code: string }>('/code', { params: { mobile, type } })
// export const sendMobileCode = (mobile: string, type: CodeType) => {
//   // 返回当前请求的Promise对象
//   return request.get<{ code: string }>('/code', { params: { mobile, type } })
// }

// 短信登录
export const loginByMobile = (mobile: string, code: string) =>
  request.post<User>('/login', { mobile, code })

export function userInfo() {
  return request.get<UserInfo>('/patient/myUser')
}
