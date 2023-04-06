<template>
  <div>
    {{ msg }}
  </div>
  <div @click="getAbc">
    {{ abc }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'hi vue2',
    }
  },
  beforeCreate() {
    console.log('beforeCreate', this)
  },
  setup() {
    /**
     * setup是vue3代码入口函数=》所有vue3代码都要写到这个函数里边
     * - `setup` 函数是 `Vue3` 特有的选项，作为组合式API的起点
      - 从组件生命周期看，它在 `beforeCreate` 之前执行
      - 函数中 `this` 不是组件实例，是 `undefined`
      - 如果数据或者函数在模板中使用，需要在 `setup` 返回
     */
    console.log('setup函数', this)
    let abc = 'vue3' // 普通变量
    const getAbc = () => {
      console.log(abc)
    }

    // 返回定义的变量或方法，这样模版才能获取到（模版需要绑定使用，才返回）
    return { abc, getAbc }
  },
}
</script>

<style lang="scss" scoped></style>
