// 第一个就是需要传给axios的后台数据的类型
// export interface ChannelData {
//   /**
//    * 响应数据
//    */
//   data: Data
//   /**
//    * 响应消息
//    */
//   message: string
// }

/**
 * 响应数据
 */
export interface ChannelData {
  /**
   * 响应频道数组
   */
  channels: Channel[]
}

export interface Channel {
  /**
   * 频道id
   */
  id: number
  /**
   * 频道名字
   */
  name: string
}