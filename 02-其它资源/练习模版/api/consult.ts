/**
 * 首页和极速问诊api接口
 */
import type {
  KnowledgePage,
  KnowledgeParams,
  ListParams,
  DoctorPage,
  FollowType,
  TopDep,
  Image,
  ConsultOrderPreParams,
  ConsultOrderPreData,
  PartialConsult,
  ConsultOrderItem,
  ConsultOrderData,
  ConsultOrderParams
} from '@/types/consult'
import { request } from '@/utils/request'
/**
 * 获取文章知识列表
 * @param params:{type栏目, current页码, pageSize每页条数}
 * @returns
 */
export const getKnowledgePage = (params: KnowledgeParams) =>
  request.get<any, KnowledgePage>('/patient/home/knowledge', { params })
/**
 * 获取关注医生的列表
 * @param params
 * @returns
 */
export const getDoctorPage = (params: ListParams) =>
  request.get<any, DoctorPage>('/home/page/doc', { params })
/**
 * 关注医生
 * @param id 医生ID
 * @param type 关注类型
 * @returns
 */
export const followDoctor = (id: string, type: FollowType = 'doc') =>
  request.post('/like', { id, type })
/**
 * 获取所有科室数据
 * @returns
 */
export const getAllDep = () => request.get<any, TopDep[]>('/dep/all')
/**
 * 上传病情描述图片
 * @param file 图片file对象
 * @returns
 */
export const uploadImage = (file: File) => {
  const fd = new FormData()
  fd.append('file', file)
  return request.post<any, Image>('/upload', fd)
}
/**
 * 拉取预支付订单信息
 * @param params
 * @returns
 */
export const getConsultOrderPre = (params: ConsultOrderPreParams) =>
  request.get<any, ConsultOrderPreData>('/patient/consult/order/pre', { params })
/**
 * 创建订单
 * @param data
 * @returns
 */
export const createConsultOrder = (data: PartialConsult) =>
  request.post<any, { id: string }>('/patient/consult/order', data)

/**
 * 获取支付地址  0 是微信  1 支付宝
 * @param data
 * @returns
 */
export const getConsultOrderPayUrl = (data: {
  paymentMethod: 0 | 1
  orderId: string // 订单ID
  payCallback: string // 回跳地址
}) => request.post<any, { payUrl: string }>('/patient/consult/pay', data)
/**
 * 获取问诊订单详情
 * @param orderId
 * @returns
 */
export const getConsultOrderDetail = (orderId: string) =>
  request.get<any, ConsultOrderItem>('/patient/consult/order/detail', { params: { orderId } })

// 查看处方
export const getPrescriptionPic = (id: string) =>
  request.get<any, { url: string }>(`/patient/consult/prescription/${id}`)
// 获取问诊订单记录列表
export const getConsultOrderList = (params: ConsultOrderParams) =>
  request.get<any, ConsultOrderData>('/patient/consult/order/list', { params })
// 评价问诊
export const evaluateConsultOrder = (data: {
  docId: string // 医生ID
  orderId: string // 订单ID
  score: number
  content: string
  anonymousFlag: 0 | 1
}) => request.post<any, { id: string }>('/patient/order/evaluate', data)
// 取消订单
export const cancelOrder = (id: string) => request.put(`/patient/order/cancel/${id}`)
// 删除订单
export const deleteOrder = (id: string) => request.delete(`/patient/order/${id}`)
