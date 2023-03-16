<script setup lang="ts">
import Child1 from './1.vue'
import Child2 from './2.vue'
import Child3 from './3.vue'
import Child4 from './4.vue'
import { reactive, isReactive, shallowReactive, onErrorCaptured, provide, onMounted } from 'vue';
import { injectionCountKey } from './keys';
import './6'
// import { $ref, $$, $ } from 'vue/macros'
export interface Props {
  foo?: string;
  bar?: number
}
const state = shallowReactive({
  foo: 1,
  nested: {
    bar: 2
  }
})

const rxState = reactive({
  foo: 1,
  nested: {
    bar: 2
  }
})

// 更改状态自身的属性是响应式的

// ...但下层嵌套对象不会被转为响应式
console.log(isReactive(state.nested)) // false
// console.log(reactive(state) === state) // true

// 不是响应式的
setTimeout(() => {
  rxState.nested.bar++
})
rxState.foo ++
state.foo++
setTimeout(() => {
  state.nested.bar++
})
const { foo, bar = 100 } = defineProps<Props>()
let count = $ref(0)
function increment () {
  count++
  count1++
}
let {count1} =reactive({count1: 2})
let text = $ref('2')
onErrorCaptured((err, instance, info) => {
  console.error(err)
  console.log(instance)
  console.info(info)
})
provide(injectionCountKey, $$(count))
let ref = $ref<{title?: string; label?: string}>()
onMounted(() => {
  console.log(ref)
  console.log(ref?.title)
  console.log(ref?.label)
  
})
const onTest =(e: any, val: any) => {
  console.log(e, val)
}
</script>

<template>
  <main>
   <p>{{ foo }}</p>
   <p>{{ bar }}</p>
   <p>{{ count }}</p>
   <p>{{ count1 }}</p>
   <button @click="increment">te</button>
   <p>{{ rxState.foo }}</p>
   <p>{{ rxState.nested }}</p>
   <p>{{ state.foo }}</p>
   <p>{{ state.nested }}</p>
   <Child1  foo="2" :bar="3" />
   <Child2 v-model="text" />
   <Child3 v-model="text" />
   <Child4 ref="ref" v-model:title.capitalize="text" v-model:label="text" />
   <my-vue-element test="srt" :onBuild="onTest"></my-vue-element>
   <my-vue-element1 .label="text" :onTest="onTest">
    <div slot="named">hello</div>
   </my-vue-element1>
   <!-- <my-vue-element2 post-title="hesdsd"></my-vue-element2> -->
  </main>
</template>
