<script setup lang="ts">
import { useAttrs } from 'vue';

export interface Props {
  title: string[]
}
const { title = ['title1'] } = defineProps<Props>()
const attrs = useAttrs()
console.log(attrs)
const log = (e: any) => {
  console.log(e)
}
</script>

<template>
  <main>
    <div v-bind="attrs" :onClick="log" onclick="alert(232)" @click="log" style="color: blue">{{ title }}</div>
  </main>
  <main>
    <div style="color: blue">1</div>
  </main>
</template>