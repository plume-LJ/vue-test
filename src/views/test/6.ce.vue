<script setup lang="ts">
export interface Props {
  label: string
}
 const props = defineProps<Props>()
 const emit = defineEmits<{
  (e: string, val: number): void
 }>()
 function onTest() {
   console.log(props)
  emit('test', 2)
 }
</script>

<template>
  <span @click="onTest">{{ label }}</span>
  <slot name="named"></slot>
</template>

<style scoped>
  span{
    color: red;
  }
</style>
