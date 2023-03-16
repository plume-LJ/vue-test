<script setup lang="ts">
import { reactive } from "vue";
export interface Props {
  foo: string;
  bar: number;
}

const author = reactive({
  name: "John Doe",
  books: [
    "Vue 2 - Advanced Guide",
    "Vue 3 - Basic Guide",
    "Vue 4 - The Mystery",
  ],
});

const { foo, bar = 100 } = defineProps<Props>();

// 一个计算属性 ref
const publishedBooksMessage = $computed(() => {
  return author.books.length > 0 ? "Yes" : "No";
});
let ok = $ref(true);
const toggle = () => {
  ok = !ok;
};
let text = $ref("");
let lock = $ref(false)
const onInput = (e: Event) => {
  if (lock) return
  text = (e.target as HTMLInputElement).value
}
const onComposeStart = () => {
  lock = true;
}
const onComposeEnd = (event: CompositionEvent) => {
  lock= false
  // text = event.data
  text += event.data
}
</script>

<template>
  <p>Has published books:</p>
  <span>{{ publishedBooksMessage }}</span>
  <p>{{ foo }}</p>
  <p>{{ bar }}</p>
  <template v-if="!ok">
    <h1>Title</h1>
    <p>Paragraph 1</p>
    <p>Paragraph 2</p>
  </template>
  <p>{{ text + '22' }}</p>
  <input
    type="text"
    :value="text"
    @input="onInput"
    @compositionstart="onComposeStart"
    @compositionend="onComposeEnd"
    />
    <input
    type="text"
    v-model.lazy="text"
    />
    <input
    type="text"
    v-model.trim="text"
    />
    <input
    type="number"
    v-model.number="lock"
    />
    <br/>
  <button @click="toggle">toggle</button>
</template>
