<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue'
// 导入类型
import { ChannelItem, ResData } from '../../../types/data'

// 定义响应变量
const list = ref<ChannelItem[]>([])

// 获取频道数据
const getChannels = async () => {
  const res = await axios.get<ResData>('http://geek.itheima.net/v1_0/channels')
  console.log('频道数据：', res.data.data.channels)
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
