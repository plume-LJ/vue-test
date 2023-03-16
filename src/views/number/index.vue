<template>
  <div>
    <div>
      <label>Value:</label>
      <input type="number" v-model="value">
    </div>
    <div>
      <label>Duration of animation:</label>
      <input type="number" v-model="duration">
    </div>
    <animated-vue-number :value="value" :formatValue="formatToPrice" :duration="duration"/>
    <hr>
    <!-- <TT :value="value"></TT> -->
    <button @click="increase">Increase 200</button>
    <button @click="decrease">Decrease 200</button>
  </div>
</template>
<script setup lang="ts">
import { isRef, ref, watchEffect } from 'vue';
import './animate'
// import TT from './2.vue'
let value = ref(100)
let duration = $ref(500)
const formatToPrice = (value: string | number) => {
  // console.log(isRef(value))
  // console.log(value)
  return `<h3>$ ${Number(value).toFixed(0)}</h1>`
  }
const increase = () => {
  value.value +=200
}
const decrease = () => {
  value.value -=200
}

watchEffect(() => {
  console.log(value)
})

</script>

<style>
* {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
}

span {
  font-size: 50px;
}

button {
  border: none;
  margin-left: 20px;
  padding: 10px;
  border-radius: 100px;
}
button:focus {
  outline: none;
}
</style>
