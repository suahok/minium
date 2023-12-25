import { ref } from 'vue'
import { defineStore } from 'pinia'

export default defineStore('controllerStore', () => {
  const open = ref(false)
  const collapsed = ref(false)

  const showModal = () => {
    open.value = true
  }

  const toggleCollapsed = () => {
    collapsed.value = !collapsed.value
  }

  return { open, collapsed, showModal, toggleCollapsed }
})
