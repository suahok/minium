<script setup lang="ts">
import { onMounted } from 'vue'
import Worker from '@/worker?worker'

onMounted(() => {
  listenWorker()
})

const listenWorker = () => {
  const worker = new Worker()
  console.log('1')
  worker.postMessage('Hello.')
  worker.addEventListener('message', ({ data }) => {
    console.log(data)
  })
  const timeout = setTimeout(() => {
    console.log('2')
    clearTimeout(timeout)
  })
  console.log('3')
}
</script>

<template>
  <p>Dashboard Page</p>
</template>

<style scoped></style>
