<template>
  <div>
    <h1>测试页面</h1>
    <ul>
      <li>{{ store.user }}</li>
      <li @click="changeUser">修改user</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/modules/user'

const store = useUserStore()
// 点击修改用户store全局数据
const changeUser = () => {
  store.setUser({
    token: '123',
    id: '1',
    account: '',
    mobile: '13888888888',
    avatar: ''
  })
}
</script>

<style scoped></style>
