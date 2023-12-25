<script setup lang="ts">
import { createVNode, onMounted } from 'vue'
import { Modal } from 'ant-design-vue'
import { ExclamationCircleOutlined } from '@ant-design/icons-vue'
import { useController } from '@/stores'

const controller = useController()

onMounted(() => {
  if (controller.open) {
    showModal()
    controller.$patch({ open: false })
  }
})

const showModal = () => {
  Modal.warning({
    title: 'Do you want to delete these items?',
    icon: createVNode(ExclamationCircleOutlined),
    content: 'When clicked the OK button, this dialog will be closed after 1 second',
    centered: true,
    async onOk() {
      try {
        await new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000)
        })
      } catch {
        console.log('Oops errors!')
      }
    },
    onCancel() {}
  })
}
</script>

<template>
  <div class="w-xs">
    <a-space-compact block>
      <a-input class="w-2/3" />
      <a-button class="w-1/3" type="primary">submit</a-button>
    </a-space-compact>
  </div>
  <a-button type="primary" class="mt-xs" @click="showModal">Open Modal</a-button>
</template>

<style scoped></style>
