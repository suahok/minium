<script setup lang="ts"></script>

<template>
  <a-layout-content class="p-xs overflow-y-auto">
    <router-view>
      <template #default="{ Component, route }">
        <component :is="Component" :key="route.path" />
      </template>
    </router-view>
  </a-layout-content>
</template>

<style scoped></style>
