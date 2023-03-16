<script setup lang="ts">
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<template>
  <input
    type="text"
    :value="modelValue"
    @input="
      $emit('update:modelValue', ($event.target as HTMLInputElement)?.value)
    "
  />
  <span>{{ modelValue }}</span>
</template>
