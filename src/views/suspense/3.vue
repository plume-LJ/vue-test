<script setup lang="ts" name="copyDirect">
import { ref } from "vue";

const data = ref<string>("我是被复制的内容！！！");

</script>

<template>
  <div class="content-box">
      <span class="text">复制指令</span>
      <div class="box-content">
          <el-input placeholder="请输入内容" v-model="data">
              <template #suffix>
                  <el-button v-copy="data">复制</el-button>
                  <div>{{ $translate('greetings.hello') }}</div>
              </template>
          </el-input>
      </div>
  </div>
</template>