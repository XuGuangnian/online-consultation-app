import { ConsultType, ConsultTime } from '@/enums'

// 文章类型
export type KnowledgeType = 'like' | 'recommend' | 'fatReduction' | 'food'
// 通用泛型工具
export type PageData<T> = {
  pageTotal: number
  total: number
  rows: T
}

// 1. 健康知识列表：文章信息类型
export type Knowledge = {
  id: string
  title: string
  coverUrl: string[]
  topics: string[]
  collectionNumber: number
  commentNumber: number
  creatorName: string
  creatorAvatar: string
  creatorHospatalName: string
  likeFlag: 0 | 1
  content: string
  creatorDep: string
  creatorTitles: string
  creatorId: string
}

// 文章列表
export type KnowledgeList = Knowledge[]

// 文章列表带分页=》 api接口data指定类型
export type KnowledgePage = PageData<KnowledgeList>
// {
//   pageTotal: number
//   total: number
//   rows: KnowledgeList
// }

// 文章列表查询参数
// export type KnowledgeParams = {
//   type: KnowledgeType
//   current: number
//   pageSize: number
// }
// 2. 关注医生
// 通用的分页查询参数
export type PageParams = {
  current: number
  pageSize: number
}

// 文章列表查询参数，复用PageParams
export type KnowledgeParams = PageParams & {
  type: KnowledgeType
}

// 医生卡片
export type Doctor = {
  id: string
  name: string
  avatar: string
  hospitalName: string
  gradeName: string
  depName: string
  positionalTitles: string
  likeFlag: 0 | 1
  serviceFee: number
  consultationNum: number
  score: number
  major: string
}

// 医生列表
export type DoctorList = Doctor[]

// 医生分页=》api返回数据data类型
export type DoctorPage = PageData<DoctorList>
// {
//   pageTotal: number
//   total: number
//   rows: DoctorList
// }
// 关注的类型
export type FollowType = 'doc' | 'knowledge' | 'topic' | 'disease'

// 3. 极速问诊
// 图片列表
export type Image = {
  id: string
  url: string
}
// 问诊记录
export type Consult = {
  id: string
  type: ConsultType // 问诊类型：1找医生 2极速问诊 3开药问诊
  illnessType: 0 | 1 // 问诊级别：0普通  1三甲
  depId: string // 问诊科室id
  illnessDesc: string // 病情描述
  illnessTime: ConsultTime // 患病时间
  consultFlag: 0 | 1 // 是否问诊过：0未问诊1问诊过
  pictures: Image[] // 病例信息-图片集合
  patientId: string // 患者id
  couponId: string // 优惠卷id
}

// 问诊记录-全部可选
// Required 转换为全部必须   Partial 转换问全部可选  两个内置的泛型类型
export type PartialConsult = Partial<Consult>

// 4. 科室选择
// 科室
export type SubDep = {
  id: string
  name: string
}
// 一级科室
export type TopDep = SubDep & {
  child: SubDep[]
}
// 病情描述
export type InllnessType = Pick<
  PartialConsult,
  'illnessDesc' | 'illnessTime' | 'pictures' | 'consultFlag'
>

// 5. 预订单支付信息
// 问诊订单预支付传参
export type ConsultOrderPreParams = Pick<PartialConsult, 'type' | 'illnessType'>

// 问诊订单预支付信息
export type ConsultOrderPreData = {
  pointDeduction: number
  couponDeduction: number
  couponId: string
  payment: number
  couponId: number
  actualPayment: number
}
