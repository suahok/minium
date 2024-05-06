<script setup lang="ts">
import { ref } from 'vue'

const state = ref('saved')
</script>

<template>
  <div class="h-4"></div>
  <div class="relative inline-block">
    <transition name="slide-up">
      <button v-if="state === 'saved'" @click="state = 'edited'">Edit</button>
      <button v-else-if="state === 'edited'" @click="state = 'editing'">Save</button>
      <button v-else-if="state === 'editing'" @click="state = 'saved'">Cancel</button>
    </transition>
  </div>
</template>

<style scoped>
button {
  position: absolute;
  will-change: opacity, transform;
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all ease-out 0.25s;
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
}

.slide-up-enter-from {
  transform: translateY(30px);
}

.slide-up-leave-to {
  transform: translateY(-30px);
}
</style>
