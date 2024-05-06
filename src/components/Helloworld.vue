<script setup lang="ts">
import { ref, toRefs } from 'vue'

const props = withDefaults(defineProps<{ name: string; age?: number }>(), { age: 22 })
const { name, age } = toRefs(props)

const show = ref(true)
</script>

<template>
  <button @click="show = !show">Toggle</button>
  <transition appear>
    <p v-if="show">Hello World!</p>
  </transition>
  <p>{{ name }} - {{ age }}</p>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
