<template>
  <div>
    <ul>
      <li>{{ count }}</li>
      <li>
        <button @click="add">add</button>
      </li>
      <li>{{ person }}</li>
      <li>
        <button @click="changePerson">修改person</button>
      </li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() {
    /**
     * ref函数
     * 使用步骤：
        - 1. 从 `vue` 中导入 `ref` 函数
        - 2. 在 `setup` 函数中，使用 `ref` 函数，传入普通数据（简单or复杂），返回一个响应式数据
        - 最后 `setup` 函数返回一个对象，包含该响应式数据即可
        - 注意：使用 `ref` 创建的数据，`js` 中需要 `.value` ，`template` 中可省略

        == 语法：const 变量名 = ref(简单or复杂的默认值) ==
     */
    // 1. 简单类型
    const count = ref(1)
    const add = () => {
      console.log('读取count值：', count.value)
      // count.value = 10
      count.value++
    }
    // 2. 复杂类型
    const person = ref({
      name: '程旭',
      age: 18,
      sarlay: 18000,
    })
    const changePerson = () => {
      // person.value.age = Math.random() * 18 + 1
      person.value = { age: 100 }
    }
    return { count, add, person, changePerson }
  },
}
</script>

<style lang="scss" scoped></style>
