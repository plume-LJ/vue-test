<script setup lang="ts">
import { ref } from 'vue'
const msg = ref('')
const onCopy = (e: any) => {
  console.log(e)
}
const onError = (e: any) => {
  console.log(e)
}
</script>

<template>
  <p>Current component: B</p>
  <span>Message is: {{ msg }}</span>
  <input v-model="msg">
  <button type="button"
      v-clipboard:copy="msg"
      v-clipboard:success="onCopy"
      v-clipboard:error="onError">Copy!</button>
</template>
