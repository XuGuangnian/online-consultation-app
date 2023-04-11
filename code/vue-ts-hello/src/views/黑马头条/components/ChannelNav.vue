<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'

// 获取菜单数据
// 第一个就是需要传给axios的后台数据的类型
export interface ChannelData {
  /**
   * 响应数据
   */
  data: Data
  /**
   * 响应消息
   */
  message: string
}

/**
 * 响应数据
 */
export interface Data {
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
const list = ref<Channel[]>([])
const getChannels = async () => {
  const res = await axios.get<ChannelData>(
    'http://geek.itheima.net/v1_0/channels'
  )
  /**
   * 说明：
   * 1. axios请求返回的res已经定义类型=》问题：后台返回的数据res.data没有定义类型
   * 2. == res.data需要开发者自己根据公司后台返回数据结构=》定义类型 ==
   * ChannelData是给res.data定义类型
   */
  console.log('菜单数据：', res.data.data.channels)
  list.value = res.data.data.channels
}

onMounted(() => {
  getChannels()
})
</script>

<template>
  <div class="channel-nav">
    <nav class="list">
      <a
        class="item"
        :class="{ active: i === 0 }"
        href="javascript:;"
        v-for="(item, i) in list"
        :key="item.id"
      >
        {{ item.name }}
      </a>
    </nav>
  </div>
</template>
