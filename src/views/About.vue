<script setup lang="ts">
import { ref } from 'vue'
import { defineStore, storeToRefs } from 'pinia'

const useLongStore = defineStore('Long', () => {
  const count = ref(0)
  const increment = () => {
    count.value += 1
  }
  return { count, increment }
})

const store = useLongStore()
const { count } = storeToRefs(store)
</script>

<template>
  <p>About Page</p>
  <h3>{{ count }}</h3>
  <button @click="store.increment">press me</button>
</template>

<style scoped></style>
