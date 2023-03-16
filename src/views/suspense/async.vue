<script setup lang="ts">
import { watchEffect } from "vue";
import type { ReactiveVariable } from "vue/macros";
import { useMouse } from "./1";

// const {x,y} = $(useMouse())
// let {x:x1,y:y1} = $(useMouse())
const ref = $ref(2);
const value = await new Promise<ReactiveVariable<number>>((resolve, reject) => {
  setTimeout(() => {
    resolve(ref);
  }, 1000);
  // setTimeout(() => {
  //   reject(ref);
  // }, 2000);
});
// watchEffect(() => {
//   console.log(x1)
//   x1 = x1 + 10
// })
</script>

<template>
  <main>
    <div>{{ value }}</div>
    <!-- mouse: {{ x }}-{{ y }}
    mouse: {{ x1 }}-{{ y1 }} -->
  </main>
</template>
