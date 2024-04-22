<script setup lang="ts"></script>

<template>
  <router-view #default="{ Component, route }">
    <component :is="Component" :key="route.path" />
  </router-view>
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
