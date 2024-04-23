<script setup lang="ts">
import { reactive, ref, watch, watchEffect } from 'vue'
import Helloworld from '@/components/Helloworld.vue'

const map = reactive(new Map([['count', ref(0)]]))
const set = reactive<Set<number>>(new Set([1, 2, 3]))
const src = 'https://picsum.photos/1920/1080?random=100'

watchEffect(() => {
  console.log('watchEffect:', map.get('count')?.value)
})

watch(map.get('count')!, () => {
  console.log('watch:', map)
})

function handleClick() {
  const count = map.get('count')!
  count.value += 1
  map.set('count', count)
  set.add(set.size + 1)
}
</script>

<template>
  <p>Dashboard Page</p>
  <button v-on="{ click: handleClick }">press me</button>
  <h5 v-text="map.get('count')" />
  <Helloworld v-bind="{ name: 'Tom', age: 25 }" />
  <ul>
    <li v-for="(it, idx) in set" :key="idx">{{ it }}</li>
  </ul>
  <img :src class="h-full w-full block" />
</template>

<style scoped></style>
