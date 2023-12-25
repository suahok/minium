<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { World } from '@/three/world'

const contain = ref()

onMounted(() => {
  createTHREE()
})

function createTHREE() {
  const world = new World(contain.value)
  world.start()
}
</script>

<template>
  <div ref="contain" class="w-full h-full"></div>
</template>

<style scoped></style>
