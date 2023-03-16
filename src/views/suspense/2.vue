<script setup lang="ts">
// 在模板中启用 v-focus
// const vFocus = {
//   mounted: (el: HTMLInputElement) => el.focus()
// }
const color = $ref('red')
</script>

<template>
  <input v-focus v-color="color" />
</template>
