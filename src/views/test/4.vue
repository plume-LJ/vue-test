<!-- CustomInput.vue -->
<script setup lang="ts">
import {
  computed,
  inject,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onRenderTracked,
  onUnmounted,
  onUpdated,
reactive,
ref,
watchEffect,
} from "vue";
import { injectionauthor1Key, injectionauthorKey, injectionCountKey } from "./keys";

// const props = defineProps(['modelValue'])
// const emit = defineEmits(['update:modelValue'])

// type DebuggerHook = (e: DebuggerEvent) => void

// type DebuggerEvent = {
//   effect: ReactiveEffect
//   target: object
//   type: TrackOpTypes /* 'get' | 'has' | 'iterate' */
//   key: any
// }

const props = defineProps<{
  title: string;
  titleModifiers?: Record<string, unknown>;
  label: string;
}>();
const emit = defineEmits<{
  (event: "update:title", value: string): void;
  (event: "update:label", value: string): void;
}>();
console.log(props.titleModifiers); // { capitalize: true }

const title = computed({
  get() {
    return props.title;
  },
  set(value) {
    if (props.titleModifiers?.capitalize) {
      value = value.charAt(0).toUpperCase() + value.slice(1);
    }
    emit("update:title", value);
  },
});
const label = computed({
  get() {
    return props.label;
  },
  set(value) {
    emit("update:label", value);
  },
});
let el = $ref();
const obj = reactive({count:1})
let b = computed(() => {
  return obj.count %2 === 0
})
onMounted(() => {
  console.log(el);
});
onBeforeUpdate(() => {
  console.log("before update");
});
onUpdated(() => {
  // 文本内容应该与当前的 `count.value` 一致
  console.log((document.getElementById("label") as HTMLInputElement)?.value);
});
onBeforeMount(() => {
  console.log("before mount");
});
onBeforeUnmount(() => {
  console.log("before unmount");
});
onUnmounted(() => {
  console.log("unmount");
});
let count = $(inject(injectionCountKey, ref(0)))
let author = $(inject(injectionauthorKey, ref('plume')))
let author1 = inject(injectionauthor1Key)
watchEffect(()=> {
  console.log(`author: ${author}`)
  console.log(`author1: ${author1?.value}`)
})
setTimeout(() => {
  author = ''
  
}, 2000);
setTimeout(() => {
  if (author1) {
    // author1.value = '2323'
  }
}, 3000);
function t() {
  // throw new Error("sd");
  console.log(count)
  count++
  count++
  count++
  count++
  count++
}
t();
onRenderTracked((e) => {
  console.log(e);
});
defineExpose({
  label,
  title
})

</script>

<template>
  <input ref="el" v-model="title" />
  <input id="label" v-model="label" />
  <span>b: {{ b }}:{{ count }}</span>
</template>
