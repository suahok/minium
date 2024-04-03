<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useController } from '@/stores'
import VueOfficePdf from '@vue-office/pdf'
import Worker from '@/worker?worker'

const router = useRouter()
const controller = useController()
const checked = ref(true)
const pdf = ref('http://storage.xuetangx.com/public_assets/xuetangx/PDF/PlayerAPI_v1.0.6.pdf')

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

const handleClick = () => {
  controller.showModal()
  router.push({ name: 'Illuminant' })
}

const renderedHandler = () => {
  console.log('渲染完成')
}

const errorHandler = () => {
  console.log('渲染失败')
}
</script>

<template>
  <a-space>
    <a-button type="primary" :disabled="!checked" @click="handleClick">press me</a-button>
    <a-switch v-model:checked="checked" />
  </a-space>
  <vue-office-pdf :src="pdf" @rendered="renderedHandler" @error="errorHandler" />
</template>

<style scoped></style>
