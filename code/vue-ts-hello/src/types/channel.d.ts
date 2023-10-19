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
// 1. 菜单api
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

// 2. 新闻列表api
/**
 * 响应数据
 */
export interface NewsData {
  /**
   * 请求下一页数据的时间戳，用于做加载更多效果
   */
  pre_timestamp: string;
  /**
   * 响应结果数组
   */
  results: Result[];
}

export interface Result {
  /**
   * 文章id
   */
  art_id: string;
  /**
   * 文章作者id
   */
  aut_id: string;
  /**
   * 文章作者名字
   */
  aut_name: string;
  /**
   * 文章评论数量
   */
  comm_count: number;
  /**
   * 文章封面
   */
  cover: Cover;
  /**
   * 文章是否置顶，0未置顶1置顶
   */
  is_top: number;
  /**
   * 文章发布时间
   */
  pubdate: string;
  /**
   * 文章标题
   */
  title: string;
}

/**
* 文章封面
*/
export interface Cover {
  /**
   * 文章封面图片地址数组
   */
  images?: string[];
  /**
   * 文章封面类型，0是无封面, 1是1张封面, 3是3张封面
   */
  type: number;
}
