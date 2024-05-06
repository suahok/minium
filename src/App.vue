<script setup lang="ts"></script>

<template>
  <nav class="flex gap-x-sm">
    <router-link class="text-gray-600 decoration-none" to="/dashboard">Dashboard</router-link>
    <router-link class="text-gray-600 decoration-none" to="/about">About</router-link>
  </nav>
  <router-view #default="{ Component, route }">
    <Transition appear name="route" mode="out-in">
      <main :key="route.path">
        <component :is="Component" />
      </main>
    </Transition>
  </router-view>
</template>

<style>
nav .router-link-active {
  color: #42b883;
  text-decoration: underline;
}

.route-enter-active {
  transition: all 0.3s ease;
}

.route-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
</style>
