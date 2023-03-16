<script setup lang="ts">
import { defineAsyncComponent, watchEffect } from "vue";
import Cmp1 from "./1.vue";
import Cmp2 from "./2.vue";
import Cmp3 from "./3.vue";
import MouseTracker from "./MouseTracker.vue";

const AsyncComp = defineAsyncComponent(() => import("./async.vue"));

const tabs = [Cmp1, Cmp2, AsyncComp];
console.log(AsyncComp)
let activeIndex = $ref(0);
const toggle = () => {
  switch (activeIndex) {
    case 0:
      activeIndex = 1;
      break;
    case 1:
      activeIndex = 2;
      break;
    case 2:
      activeIndex = 0;
      break;
  }
};
let title = $ref(["title" + (activeIndex + 1)]);
watchEffect(() => {
  console.log(title);
});
const updateTitle = (val: string[]) => {
  title = val;
};
const consoleE = (e: any) => {
  console.log(e);
};
</script>

<template>
  <main>
    <component
      :is="tabs[activeIndex]"
      test="2"
      :onClick="consoleE"
      :title="title"
      @update:title="updateTitle"
    >
      <template #header="{ message }">
        <div>{{ message }}</div>
      </template>
      <template #footer="{ message }">
        <div>{{ message }}</div>
      </template>
    </component>
    <button @click="toggle">toggle</button>
    <Cmp3>
      <!-- <template #header="{ message}">
        <div>{{ message }}</div>
      </template> -->
      <template #default="{ message }">
        <div>{{ message }}</div>
      </template>
      <template #footer="{ message }">
        <div>{{ message }}</div>
      </template>
    </Cmp3>
    <MouseTracker v-slot="{ x, y }">
      Mouse is at: {{ x }}, {{ y }}
    </MouseTracker>
  </main>
</template>
