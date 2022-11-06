export type List = {
  id: number
  name: string
  done: boolean
}[]

export type Data = {
  name: string
  age?: number
}
// 案例类型
// 后台返回数据类型
export type ChannelItem = {
  id: number
  name: string
}
export type ResData = {
  data: {
    channels: ChannelItem[]
  }
  message: string
}