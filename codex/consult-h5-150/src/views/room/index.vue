<script setup lang="ts">
import RoomStatus from './components/RoomStatus.vue'
import RoomAction from './components/RoomAction.vue'
import RoomMessage from './components/RoomMessage.vue'
// 导入socket.io插件
import { io } from 'socket.io-client'
import type { Socket } from 'socket.io-client'
import { baseURL } from '@/utils/request'
import { useUserStore } from '@/stores'
import { useRoute } from 'vue-router'
import { onMounted, onUnmounted } from 'vue'

/**
 * 初始化创建ws长连接（打电话）
 * 1. 通过io函数传入后台ws连接地址和相关参数（token、orderId）
 * 2. 连接建立成功后的相关事件：
 *    1. 通过io实例的connect事件，监听连接是否成功
 *    2. 通过io实例的error事件，监听连接错误
 *    3. 通过io实例的disconnect事件，监听连接断开
 */
// 存储socket实例
let socket: Socket
const store = useUserStore()
const route = useRoute()
const initSocket = () => {
  // 1. 建立连接
  socket = io(baseURL, {
    auth: {
      token: `Bearer ${store.user.token}`
    },
    query: {
      orderId: route.query.orderId
    }
  })
  // end
  socket.on('connect', () => {
    console.log('浏览器和ws服务器建立连接成功！')
  })
  socket.on('error', () => {
    console.log('出错了！')
  })
  socket.on('disconnect', () => {
    console.log('浏览器和ws服务器断开连接！')
  })
}
onMounted(() => {
  // 组件挂载建立连接
  initSocket()
})
onUnmounted(() => {
  // 组件销毁关闭连接
  socket.close()
})
</script>

<template>
  <div class="room-page">
    <cp-nav-bar title="医生问诊室" />
    <!-- 1. 问诊状态：未接诊、咨询中、问诊结束-->
    <room-status />
    <!-- 2. 问诊聊天列表消息：咨询中的医生和患者聊天的内容（列表） -->
    <room-message />
    <!-- 3. 底部操作栏：发消息 -->
    <room-action />
  </div>
</template>
<style lang="scss" scoped>
.room-page {
  padding-top: 90px;
  padding-bottom: 60px;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: var(--cp-bg);
  .van-pull-refresh {
    width: 100%;
    min-height: calc(100vh - 150px);
  }
}
</style>
