import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

export default defineStore('menuStore', () => {
  const menus = ref()

  async function getAsyncRoutes() {
    const { data: result } = await axios.get('/api/menus')
    menus.value = result.data
  }

  return { menus, getAsyncRoutes }
})
