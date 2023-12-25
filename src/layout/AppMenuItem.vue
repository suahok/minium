<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { storeToRefs } from 'pinia'
import { useController } from '@/stores'

defineProps<{ data: any[] }>()

const controller = useController()
const { collapsed } = storeToRefs(controller)
</script>

<template>
  <template v-for="item in data" :key="item.key">
    <template v-if="item.children">
      <a-sub-menu :key="item.key" :title="item.label">
        <template #icon>
          <Icon :icon="item.icon" :size="20" />
        </template>
        <AppMenuItem :data="item.children" />
      </a-sub-menu>
    </template>
    <template v-else>
      <a-menu-item v-if="item.type !== 'link'" :key="item.key">
        <template #icon>
          <Icon :icon="item.icon" width="18" />
        </template>
        {{ item.label }}
      </a-menu-item>
      <template v-else>
        <a :href="item.path" target="_blank" class="ant-menu-item text-gray-800">
          <div style="padding-left: 4px"></div>
          <Icon :icon="item.icon" width="18" />
          <Transition name="fade">
            <span v-if="!collapsed" class="ml-2.5 flex-1">{{ item.label }}</span>
          </Transition>
          <Icon v-if="!collapsed" icon="ri:link" width="12" class="mx-2" />
        </a>
      </template>
    </template>
  </template>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
