/**
 * 用户相关类型
 * 技巧：结合后台接口文档返回数据类型和业务需求，定义类型
 */
// 1. 登录响应数据
export interface User {
  /**
   * 用户名
   */
  account?: string
  /**
   * 头像
   */
  avatar?: string
  /**
   * 用户id
   */
  id?: string
  /**
   * 脱敏手机号，带星号的手机号
   */
  mobile?: string
  /**
   * refreshToken
   */
  refreshToken?: string
  /**
   * token
   */
  token: string
}

// 短信验证码类型
export type CodeType = 'login' | 'register'

// 知识点
/**
 * Pick泛型工具
 * 语法：type NewType = Pick<拾取的类型,拾取的属性名1 | 拾取的属性名2...>
 * 作用：从一个已经定义的对象类型中，拾取指定的属性类型作为新类型=》复用
 */
type PickUser = Pick<User, 'id' | 'mobile'>
/**
 * Omit泛型工具
 * 语法：type NewType = Omit<排除的类型,排除的属性名1 | 拾取的属性名2...>
 * 作用：从一个已经定义的对象类型中，排除指定的属性类型，把剩下的作为新类型=》复用
 */
type OmitUserTest = Omit<User, 'id' | 'token'>

// 2. 登录人信息（个人中心）
type OmitUser = Omit<User, 'token'>
export type UserInfo = OmitUser & {
  likeNumber: number
  collectionNumber: number
  score: number
  couponNumber: number
  orderInfo: {
    paidNumber: number
    receivedNumber: number
    shippedNumber: number
    finishedNumber: number
  }
}

// 3. 家庭档案-患者信息
export type Patient = {
  id?: string
  name: string
  idCard: string
  defaultFlag: 0 | 1
  gender: 0 | 1
  genderValue?: string
  age?: number
}

// 4. 家庭档案-患者信息列表
export type PatientList = Patient[]
