<template>
  <div>
    <ul>
      <li>{{ name }}, {{ age }}</li>
      <li>
        <button @click="changePerson">修改person</button>
      </li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script setup>
import { reactive, toRefs } from 'vue'
/**
     * reactive函数
     * 使用步骤：
        - 1. 从 `vue` 中导入 `reactive` 函数
        - 2. 在 `setup` 函数中，使用 `reactive` 函数，传入一个普通对象，返回一个响应式数据对象
        - 最后 `setup` 函数返回一个对象，包含该响应式对象即可，模板中可使用

        == 语法：const 变量名 = reactive(复杂类型变量的默认值) ==
     */
// 1. 定义响应变量
// 问题：直接结构person,数据会失去响应式
let preson = reactive({
  name: '程旭',
  age: 18,
  sarlay: 18000,
})
// 解决：通过toRefs转换后解构
const { name, age } = toRefs(preson)
// 2. 定义方法修改
const changePerson = () => {
  // preson.sarlay = 20000
  // 注意：不能直接使用=号修改=》只能局部修改
  // preson = {
  //   name: '程旭',
  //   age: 20,
  //   sarlay: 18000,
  // }
  console.log(name, age)
  // age = 20
  age.value = Math.random()
}
</script>

<style lang="scss" scoped></style>
