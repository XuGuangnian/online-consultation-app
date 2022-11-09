<script setup lang="ts">
const clickRight = () => {
  console.log('点击了右边文字')
}
</script>

<template>
  <cp-nav-bar title="登录" rightText="注册" @click-right="clickRight"></cp-nav-bar>
</template>

<style lang="scss" scoped></style>
