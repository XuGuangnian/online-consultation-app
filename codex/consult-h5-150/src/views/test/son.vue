<script setup lang="ts">
defineProps<{
  modelValue: boolean
  msg: string
}>()
const emit = defineEmits<{
  (e: 'update:modelValue', data: boolean): void
  (e: 'update:msg', data: string): void
}>()
</script>

<template>
  <div>
    <h2 v-if="modelValue">son</h2>
    <button @click="emit('update:modelValue', !modelValue)">c-show</button>
    <p @click="emit('update:msg', Math.random() + '')">{{ msg }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
