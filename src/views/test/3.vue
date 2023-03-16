<!-- CustomInput.vue -->
<script setup lang="ts">
import { computed } from "vue";

// const props = defineProps(['modelValue'])
// const emit = defineEmits(['update:modelValue'])

const props = defineProps<{ modelValue: string }>();
const emit = defineEmits<{
  (event: "update:modelValue", value: string): void;
}>();

const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emit("update:modelValue", value);
  },
});
</script>

<template>
  <input v-model="value" />
</template>
