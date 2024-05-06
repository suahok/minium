<script setup lang="ts">
import gsap from 'gsap'
import { RendererNode, ref } from 'vue'

const show = ref(true)

function onBeforeEnter(el: RendererNode) {
  gsap.set(el, {
    scaleX: 0.25,
    scaleY: 0.25,
    opacity: 1
  })
}

function onEnter(el: RendererNode, done: () => void) {
  gsap.to(el, {
    duration: 1,
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    ease: 'elastic.inOut(2.5, 1)',
    onComplete: done
  })
}

function onLeave(el: RendererNode, done: () => void) {
  gsap.to(el, {
    duration: 0.7,
    scaleX: 1,
    scaleY: 1,
    x: 300,
    ease: 'elastic.inOut(2.5, 1)'
  })
  gsap.to(el, {
    duration: 0.2,
    delay: 0.5,
    opacity: 0,
    onComplete: done
  })
}
</script>

<template>
  <button @click="show = !show">Toggle</button>
  <transition appear @before-enter="onBeforeEnter" @enter="onEnter" @leave="onLeave" :css="false">
    <div class="rounded mt-sm bg-purple-400 h-32 w-32" v-if="show"></div>
  </transition>
</template>

<style scoped></style>
