<script setup lang="ts">
import { shallowRef } from 'vue'
import CompA from './A.vue'
import CompB from './B.vue'
import CompC from './C.vue'
import CompD from '../number/index.vue'

const current = shallowRef(CompA)
</script>

<template>
  <div class="demo">
    <label><input type="radio" v-model="current" :value="CompA" /> A</label>
    <label><input type="radio" v-model="current" :value="CompB" /> B</label>
    <label><input type="radio" v-model="current" :value="CompC" /> C</label>
    <label><input type="radio" v-model="current" :value="CompD" /> D</label>
    <KeepAlive>
      <component :is="current"></component>
    </KeepAlive>
  </div>
</template>
