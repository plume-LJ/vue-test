<script setup lang="ts">
import { shallowRef } from 'vue'
import CompA from './1.vue'
import CompB from './2.vue'
import CompC from './3.vue'
import CompD from './4.vue'
import CompE from './5.vue'
const current = shallowRef(CompA)
</script>

<template>
  <div class="demo">
    <label><input type="radio" v-model="current" :value="CompA" /> A</label>
    <label><input type="radio" v-model="current" :value="CompB" /> B</label>
    <label><input type="radio" v-model="current" :value="CompC" /> C</label>
    <label><input type="radio" v-model="current" :value="CompD" /> D</label>
    <label><input type="radio" v-model="current" :value="CompE" /> E</label>
    <KeepAlive>
      <component :is="current"></component>
    </KeepAlive>
  </div>
</template>
