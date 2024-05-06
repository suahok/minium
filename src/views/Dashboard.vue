<script setup lang="ts">
import { defineAsyncComponent, reactive, ref } from 'vue'

const GsapBox = defineAsyncComponent(() => import('@/components/GsapBox.vue'))
const Helloworld = defineAsyncComponent(() => import('@/components/Helloworld.vue'))
const TransitionButton = defineAsyncComponent(() => import('@/components/TransitionButton.vue'))

const set = reactive(new Set([{ id: crypto.randomUUID(), value: getRandomInt() }]))
const map = reactive(new Map([['count', ref(1)]]))
const transitionKey = ref(Date.now())

function handleClick() {
  const count = map.get('count')!
  count.value += 1
  map.set('count', count)
  transitionKey.value = Date.now()

  const item = { id: crypto.randomUUID(), value: getRandomInt() }
  set.add(item)
}

function getRandomInt() {
  return Math.round(Math.random() * 100)
}
</script>

<template>
  <p>Dashboard Page</p>
  <button @click="handleClick">press me</button>
  <div class="h-10 relative">
    <Transition name="fade">
      <h3 :key="transitionKey" class="absolute">{{ map.get('count') }}</h3>
    </Transition>
  </div>
  <TransitionGroup name="list" tag="ul" class="flex list-none p-0 gap-x-2">
    <li v-for="item in set" :key="item.id">{{ item.value }}</li>
  </TransitionGroup>
  <Helloworld name="John Pete" />
  <GsapBox />
  <TransitionButton />
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-from {
  transform: translateY(20px) scale(0.8);
}

.fade-leave-to {
  transform: translateY(-20px) scale(0.8);
}

ul li {
  will-change: transform;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: transform 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(1.5);
}

.list-leave-active {
  position: absolute;
}
</style>
