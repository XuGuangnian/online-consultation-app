import { request } from '../utils/request'
import type { ChannelData, NewsData } from '../types/channel'
/**
 * 获取菜单数据
 * @returns 
 */
export const getNavs = () => {
  // 1. 拦截器默认返回response=> 第一个范型参数指定
  // return request.get<ChannelData>(
  //   '/channels'
  // )
  // 2. 拦截器返回自定义response.data.data=》第二个范型参数指定
  // 说明：any相当于js的null,什么也不传
  return request.get<any, ChannelData>(
    '/channels'
  )
}
/**
 * 获取新闻列表
 * @param params { channel_id: 菜单ID; timestamp: 时间戳 }
 * @returns 
 */
export const getNews = (params: { channel_id: number; timestamp: number }) => request.get<any, NewsData>('/articles', {
  params
})
