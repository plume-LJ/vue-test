<script setup lang="ts">

</script>

<template>
  <main>
    <slot name="header" message="hello">
      <div>Hello</div>
    </slot>
    <slot message="mian"></slot>
    <slot name="footer" message="byebye"></slot>
  </main>
</template>