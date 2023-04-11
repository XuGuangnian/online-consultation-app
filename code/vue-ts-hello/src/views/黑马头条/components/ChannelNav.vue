<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Channel } from '../../../types/channel'

import { getNavs } from '../../../api/channel'

// 获取菜单数据
const list = ref<Channel[]>([])
const getChannels = async () => {
  // const res = await request.get<ChannelData>(
  //   'http://geek.itheima.net/v1_0/channels'
  // )
  const res = await getNavs()
  /**
   * 说明：
   * 1. axios请求返回的res已经定义类型=》问题：后台返回的数据res.data没有定义类型
   * 2. == res.data需要开发者自己根据公司后台返回数据结构=》定义类型 ==
   * ChannelData是给res.data定义类型
   */
  console.log('2.res:', res)
  // console.log('菜单数据：', res.data.data.channels)
  // list.value = res.data.data.channels
  list.value = res.channels
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
