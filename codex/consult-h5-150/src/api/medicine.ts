import type { OrderPre, AddressItem } from '@/types/medicine'
import { request } from '@/utils/request'

// 查询药品订单预支付信息
export const getMedicalOrderPre = (prescriptionId: string) =>
  request.get<OrderPre>('/patient/medicine/order/pre', {
    params: {
      // 处方ID
      prescriptionId
    }
  })

// 获取收货地址列表
export const getAddressList = () => request.get<AddressItem[]>('/patient/order/address')

// 创建药品订单
export const createMedicalOrder = (data: { id: string; addressId: string; couponId?: string }) =>
  request.post<{ id: string }>('/patient/medicine/order', data)
