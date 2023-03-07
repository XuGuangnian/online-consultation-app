/**
 * 登录和个人中心、家庭档案api接口
 */
import type { User, CodeType, UserInfo, PatientList, Patient } from '@/types/user'
import { request } from '@/utils/request'

/**
 * 密码登录
 * @param formData
 * @returns
 */
export const loginByPassword = (formData: { mobile: string; password: string }): Promise<User> => {
  return request.post('/login/password', formData)
}
// export const loginByPassword = (formData: { mobile: string; password: string }) => {
//   return request.post<any, User>('/login/password', formData)
// }

/**
 *
 * @param mobile 手机
 * @param type 验证码类型： 'login' 登录 | 'register' 注册
 * @returns
 */
export const sendMobileCode = (mobile: string, type: CodeType) =>
  request.get<any, { code: string }>('/code', { params: { mobile, type } })

// 短信登录
export const loginByMobile = (mobile: string, code: string) =>
  request.post<any, User>('/login', { mobile, code })

// 获取个人信息
export const getUserInfo = () => request.get<any, UserInfo>('/patient/myUser')

// 获患者信息列表
export const getPatientList = () => request.get<any, PatientList>('/patient/mylist')

// 添加患者信息
export const addPatient = (patient: Patient) => request.post('/patient/add', patient)
// 编辑患者信息
export const editPatient = (patient: Patient) => request.put('/patient/update', patient)
// 删除患者信息
export const delPatient = (id: string) => request.delete(`/patient/del/${id}`)
// 查询患者详情
export const getPatientDetail = (id: string) => request.get<any, Patient>(`/patient/info/${id}`)
