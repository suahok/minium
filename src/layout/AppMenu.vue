<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'

import { useMenus } from '@/stores'
import { filterMenus } from '@/router/permission'

import AppMenuItem from './AppMenuItem.vue'

withDefaults(defineProps<{ theme: string }>(), { theme: 'light' })

const menuKeys = localStorage.getItem('menuKeys')

const route = useRoute()
const router = useRouter()
const menuStore = useMenus()
const { menus } = storeToRefs(menuStore)
const routes = filterMenus(menus.value)

const menuTheme = 'light'
const openKeys = ref(menuKeys?.split(','))
const selectedKeys = ref([route.name])

const unwatch = watch(
  () => router.currentRoute.value,
  (newRoute, _) => {
    selectedKeys.value = [newRoute.name]
  }
)

onBeforeUnmount(() => {
  unwatch()
})

const onClickMenuItem = (menu: any) => {
  const name = menu.key.split('_').shift()
  if (name === 'Link') return
  localStorage.setItem('menuKeys', menu.keyPath)
  router.push({ name })
}
</script>

<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    :inlineIndent="20"
    :theme="menuTheme"
    mode="inline"
    class="overflow-y-auto menu-scrollbar"
    @click="onClickMenuItem"
  >
    <AppMenuItem :data="routes" />
  </a-menu>
</template>

<style scoped></style>
