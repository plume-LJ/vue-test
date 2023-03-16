<script setup lang="ts">
import anime from "animejs";
import { onMounted, reactive, watchEffect, watch } from "vue";
export type ValueType = string | number;
export interface Props {
  value?: ValueType;
  formatValue?: (value: ValueType) => ValueType;
  easing?: string;
  duration?: number;
  update?: () => void;
  begin?: () => void;
  complete?: () => void;
  run?: () => void;
  delay?: number;
  round?: number;
}
const props = withDefaults(defineProps<Props>(), {
  value: 0,
  formatValue: (value: ValueType) => value,
  easing: "linear",
  duration: 500,
  delay: 0,
  round: 0,
});
const { value, ...fProps } = props;
let ref = reactive({ animatedValue: 0 });
const animeRef = $ref(null);
const animateValue = (value: ValueType, duration = props.duration) => {
  anime({
    ...fProps,
    targets: ref,
    animatedValue: value,
    duration,
    begin,
    complete,
    update,
    run,
    // translateY: 205
  });
};
const begin = (anim: { progress: any }) => {
  // console.log(Date.now())
  // console.log(anim.progress);
};
const complete = (anim: any) => {
  // console.log(Date.now())
  // console.log(anim);
  // animatedValue = props.value
};
const update = (anim: any) => {
  // console.log(anim);
};
const run = (anim: any) => {
  // console.log(anim);
};
onMounted(() => {
  animateValue(props.value);
});

watch(
  () => ({value:props.value, duration: props.duration}),
  (newValue, oldValue) => {
    animateValue(newValue.value, newValue.duration);
  }
);
</script>

<template>
  <span ref="animeRef" v-html="formatValue(Number(ref.animatedValue))"></span>
</template>

<style scoped>
span {
  color: red;
}
</style>
