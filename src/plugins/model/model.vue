<script setup lang="ts">

</script>

<template>
  <Teleport to="body"
            :disabled="!isTeleport">>
    <div v-if="modelValue"
         class="modal">

      <div class="mask"
           :style="style"
           @click="handleCancel"></div>

      <div class="modal__main">
        <div class="modal__title">
          <span>{{title||'系统提示'}}</span>
          <span v-if="close"
                title="关闭"
                class="close"
                @click="handleCancel">✕</span>
        </div>

        <div class="modal__content">
          <Content v-if="typeof content==='function'"
                   :render="content" />
          <slot v-else>
            {{content}}
          </slot>
        </div>

        <div class="modal__btns">
          <button :disabled="loading"
                  @click="handleConfirm">
            <span class="loading"
                  v-if="loading"> ❍ </span>确定
          </button>
          <button @click="handleCancel">取消</button>
        </div>

      </div>
    </div>
  </Teleport>
</template>