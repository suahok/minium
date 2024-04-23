<script setup lang="ts">
import { reactive, ref } from 'vue'
import Helloworld from '@/components/Helloworld.vue'

const map = reactive(new Map([['count', ref(0)]]))
const set = reactive<Set<number>>(new Set([1, 2, 3]))
const src = 'https://picsum.photos/1920/1080?random=100'

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
  <Helloworld />
  <ul>
    <li v-for="(it, idx) in set" :key="idx">{{ it }}</li>
  </ul>
  <img :src class="h-full w-full block" />
</template>

<style scoped></style>
