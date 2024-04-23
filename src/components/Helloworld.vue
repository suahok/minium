<script setup lang="ts">
import { ref } from 'vue'

const text = ref('Hello')

function handleTextChange() {
  text.value = 'Hi'
}
</script>

<template>
  <p>Helloworld Component</p>
  <button @click="handleTextChange">transition</button>
  <Transition>
    <p :key="text">{{ text }}</p>
  </Transition>
</template>

<style scoped></style>
