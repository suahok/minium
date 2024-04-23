<script setup lang="ts"></script>

<template>
  <router-view #default="{ Component, route }">
    <component :is="Component" :key="route.path" />
  </router-view>
</template>

<style lang="scss"></style>
