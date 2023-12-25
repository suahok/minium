<script setup lang="ts">
import { theme } from 'ant-design-vue'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons-vue'
import { storeToRefs } from 'pinia'
import { useController } from '@/stores'
import AppMenu from './AppMenu.vue'

const controller = useController()
const { collapsed } = storeToRefs(controller)
const { token } = theme.useToken()

const menuTheme = 'light'
</script>

<template>
  <a-layout-sider
    :collapsible="true"
    :collapsed="collapsed"
    :inline-collapsed="collapsed"
    :theme="menuTheme"
    @collapse="controller.toggleCollapsed"
  >
    <template #trigger>
      <span @click="controller.toggleCollapsed">
        <menu-unfold-outlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
      </span>
    </template>
    <div class="h-full flex flex-col justify-between">
      <AppMenu :theme="menuTheme" />
      <div class="mx-1.5">
        <a-divider class="m-auto mb-3 bg-divider" />
        <a-button block type="text" class="h-auto py-1 px-2">
          <a-space>
            <a-avatar size="large" class="bg-gray-100" src="https://picsum.photos/600/400.webp" />
            <div v-if="!collapsed" class="flex flex-col items-start">
              <a-typography-text strong class="whitespace-pre-line">Buzuzima Kun</a-typography-text>
              <a-typography-text type="secondary" class="text-xs leading-none whitespace-pre-line" style="zoom: 0.92">
                samantadavis@gmail.com
              </a-typography-text>
            </div>
          </a-space>
        </a-button>
        <div class="h-1"></div>
      </div>
    </div>
  </a-layout-sider>
</template>

<style scoped lang="scss">
.bg-divider {
  background-color: v-bind('token.colorWhite');
}
.menu-scrollbar {
  scroll-behavior: smooth;
  scroll-padding-inline-end: 8px;

  &::-webkit-scrollbar {
    width: 3px;
  }
  &::-webkit-scrollbar-button {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: v-bind('token.colorBorder');
  }
}
</style>
