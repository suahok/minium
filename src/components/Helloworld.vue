<script setup lang="ts">
import { ref, toRefs } from 'vue'

const props = withDefaults(defineProps<{ name?: string; age: number }>(), { age: 22 })
const { name, age } = toRefs(props)
const text = ref('Hello')

function handleTextChange() {
  text.value = 'Hi'
}
</script>

<template>
  <p>Helloworld Component</p>
  <p>{{ name }} - {{ age }}</p>
  <button @click="handleTextChange">transition</button>
  <Transition>
    <p :key="text">{{ text }}</p>
  </Transition>
</template>

<style scoped></style>
