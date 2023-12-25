<script setup lang="ts">
import { reactive } from 'vue'
import { theme } from 'ant-design-vue'

const themeConfig = reactive({
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: '#8d4bbb',
    borderRadius: 4
  }
})
</script>

<template>
  <a-config-provider :theme="themeConfig">
    <router-view #default="{ Component, route }">
      <component :is="Component" :key="route.path" />
    </router-view>
  </a-config-provider>
</template>

<style>
body {
  margin: 0;
  overflow: hidden;
}

div#app {
  overflow: hidden;
  position: relative;

  width: auto;
  height: 100vh;
}
</style>
