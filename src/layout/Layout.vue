<script setup lang="ts">
import AppMain from './AppMain.vue'
import AppSidebar from './AppSidebar.vue'
import AppHeader from './AppHeader.vue'
</script>

<template>
  <a-layout class="h-full">
    <app-header />
    <a-layout>
      <app-sidebar />
      <app-main />
    </a-layout>
  </a-layout>
</template>

<style scoped></style>
