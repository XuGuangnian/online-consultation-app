<script setup lang="ts">
import { useRouter } from 'vue-router'

// 封装需求❓：支持 title rightText 属性，支持 click-right 事件
// router === 等价于vue2中的this.$router
const router = useRouter()
const onClickLeft = () => {
  // 点击左侧会执行 =》返回上次访问页面
  /**
   * 返回上次访问页面可能不存在？
   * 使用router.replace跳转，不能返回
   */
  if (history.state.back) {
    // 1. 存在回跳地址就返回
    router.back()
  } else {
    // 2. 不存在返回首页
    router.push('/')
  }
}

// 1. 接收父传子变量
defineProps<{
  middle: string
  right: string
}>()
// 2. 子传父
const emit = defineEmits<{
  (e: 'click-right'): void
}>()
</script>

<template>
  <!-- 二次封装：内核=》vant的导航栏组件 -->
  <van-nav-bar
    left-arrow
    @click-left="onClickLeft"
    fixed
    :title="middle"
    :right-text="right"
    @click-right="emit('click-right')"
  ></van-nav-bar>
</template>

<style lang="scss" scoped>
/**
  ::v-deep 深度作用选择符/样式穿透
  vue2使用：/deep/
  vue3使用：::v-deep
  思考❓：什么情况下需要使用深度作用选择符？  
 */
//  1. 元素身上有data-v属性，直接拿类名控制
// .van-nav-bar {
//   box-sizing: border-box;
//   border: 2px solid red;
// }
// 2. 元素身上没有data-v属性，需要使用深度作用选择符
// ::v-deep .van-nav-bar__content {
//   background-color: blue;
// }

// ::v-deep() {
//   .van-nav-bar__content {
//     background-color: blue;
//   }
// }

::v-deep() {
  .van-nav-bar {
    &__arrow {
      font-size: 18px;
      color: var(--cp-text1);
    }
    &__text {
      font-size: 15px;
    }
  }
}
</style>
