<script lang="ts" setup>
import type { Doctor } from '@/types/consult'
// import { followDoctor } from '@/api/consult'
// import { ref } from 'vue'
// import { Toast } from 'vant'
import { useFollow } from '@/hooks'

defineProps<{ item: Doctor }>()

// 关注某个医生逻辑
// const loading = ref(false)
// const follow = async (doc: Doctor) => {
//   // 防止重复点击
//   loading.value = true
//   try {
//     await followDoctor(doc.id)
//     doc.likeFlag = doc.likeFlag === 1 ? 0 : 1
//     Toast.success(doc.likeFlag === 1 ? '关注成功' : '取关成功')
//   } finally {
//     // 说明1：catch是在try代码块出现错误执行
//     // 说明2：finally是try代码块执行成功或失败都会执行
//     // 无论 try / catch 结果如何都会执行的代码块
//     // 说明：成功或失败都需要关闭
//     loading.value = false
//   }
// }
const { loading, follow } = useFollow()
</script>
<template>
  <div class="doctor-card">
    <van-image round :src="item.avatar" />
    <p class="name">{{ item.name }}</p>
    <p>{{ item.hospitalName }} {{ item.depName }}</p>
    <p>{{ item.positionalTitles }}</p>
    <van-button :loading="loading" @click="follow(item)" round size="small" type="primary">
      {{ item.likeFlag === 1 ? '已关注' : '+ 关注' }}
    </van-button>
  </div>
</template>
<style scoped lang="scss">
.doctor-card {
  width: 135px;
  // height: 190px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0px 0px 11px 0px rgba(229, 229, 229, 0.2);
  text-align: center;
  padding: 15px;
  margin-left: 15px;
  display: inline-block;
  box-sizing: border-box;
  > .van-image {
    width: 58px;
    height: 58px;
    vertical-align: top;
    border-radius: 50%;
    margin: 0 auto 8px;
  }
  > p {
    margin-bottom: 0;
    font-size: 11px;
    color: var(--cp-tip);
    &.name {
      font-size: 13px;
      color: var(--cp-text1);
      margin-bottom: 5px;
    }
  }
  > .van-button {
    padding: 0 12px;
    height: 28px;
    margin-top: 8px;
    width: 72px;
  }
}
</style>
