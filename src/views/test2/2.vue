<script lang="ts">
// 使用普通的 <script> 来声明选项
export default {
  inheritAttrs: false
}
</script>
<script setup lang="ts">
export interface Props {
  title: string[]
}
const props = defineProps<Props>()
const emit = defineEmits<{
  (event: 'update:title', title: string[]): void
}>()
// props.title = '23232'
emit('update:title', props.title.concat('23232'))
</script>

<template>
  <main>
    <div style="color: red">{{ props.title }}</div>
  </main>
  <main>
    <div @click="emit('update:title', ['23'])" v-bind="$attrs" style="color: red">2</div>
  </main>
</template>