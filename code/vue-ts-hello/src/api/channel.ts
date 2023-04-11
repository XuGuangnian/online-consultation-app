import { request } from '../utils/request'
import type { ChannelData } from '../types/channel'
/**
 * 获取菜单数据
 * @returns 
 */
export const getNavs = () => {
  return request.get<ChannelData>(
    'http://geek.itheima.net/v1_0/channels'
  )
}