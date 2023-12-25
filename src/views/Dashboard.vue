<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useController } from '@/stores'

const router = useRouter()
const controller = useController()
const checked = ref(true)

const handleClick = () => {
  controller.showModal()
  router.push({ name: 'Illuminant' })
}
</script>

<template>
  <a-space>
    <a-button type="primary" :disabled="!checked" @click="handleClick">press me</a-button>
    <a-switch v-model:checked="checked" />
  </a-space>
</template>

<style scoped></style>
