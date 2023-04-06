<!-- vue2: `option api`选项式api =》vue3是向下兼容（vue2） -->
<!-- <template>
  <button @click="toggle">显示隐藏图片</button>
  <img v-show="show" alt="Vue logo" src="/src/assets/vue.svg" />
  <hr />
  计数器：{{ count }} <button @click="increment">累加</button>
</template>
<script>
export default {
  // 定义响应变量？=》数据驱动试图
  data() {
    return {
      show: true, // 控制图片显示隐藏
      count: 0, // 计数器
    }
  },
  // 定义方法
  methods: {
    toggle() {
      this.show = !this.show
    },
    increment() {
      this.count++
    },
  },
}
</script> -->

<!-- vue3:`composition api` 组合式api -->
<template>
  <button @click="toggle">显示隐藏图片</button>
  <img v-show="show" alt="Vue logo" src="/public/vite.svg" />
  <hr />
  计数器：{{ count }} <button @click="increment">累加</button>
</template>
<script>
// ref 就是一个组合式API
import { ref } from 'vue'
export default {
  setup() {
    // 显示隐藏
    const show = ref(true)
    const toggle = () => {
      show.value = !show.value
    }
    // 计数器
    const count = ref(10)
    const increment = () => {
      count.value++
    }

    return { show, toggle, count, increment }
  },
}
</script>
