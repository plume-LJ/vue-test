<script setup lang="ts">
import { defineAsyncComponent, onErrorCaptured } from "vue";
import AsyncCmp from "./async.vue";
import Cmp from "./2.vue";
import Cmp1 from "./3.vue";
const AsyncComp = defineAsyncComponent(() => import("./async1.vue"));

onErrorCaptured((err, instance, info) => {
  console.error(err)
  console.log(instance)
  console.info(info)
})
</script>

<template>
  <Suspense :timeout="2000">
    <div>
      <AsyncCmp></AsyncCmp>
      <AsyncComp></AsyncComp>
      <Cmp></Cmp>
      <Cmp1></Cmp1>
      <div v-demo="{ color: 'white', text: 'hello!' }"></div>
    </div>
    <template #fallback>
      <div>loading...</div>
    </template>
  </Suspense>
</template>
