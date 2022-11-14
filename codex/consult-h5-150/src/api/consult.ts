import type { KnowledgePage, KnowledgeParams, PageParams, DoctorPage } from '@/types/consult'
import { request } from '@/utils/request'
// 获取健康知识列表
export const getKnowledgePage = (params: KnowledgeParams) =>
  request.get<KnowledgePage>('/patient/home/knowledge', { params })
// 获取关注医生列表
export const getDoctorPage = (params: PageParams) =>
  request.get<DoctorPage>('/home/page/doc', { params })
