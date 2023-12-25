<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'

const show = ref(false)

const handleClick = () => {
  show.value = !show.value
}
</script>

<template>
  <div class="example w-100 h-50 box-border bg-gradient-to-r from-[#FF9078] to-[#FA3440]"></div>
  <div class="w-100 bg-white px-xs mt-xs rounded">
    <div class="min-h-10 overflow-hidden">
      <h4>使用 CSS Transition 通过改变 Height 来展开收起元素</h4>
    </div>
    <Transition name="slide">
      <div v-if="show" class="lorem-ipsum">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo perspiciatis tempora iure accusamus rerum. Fuga
          porro unde, laboriosam soluta accusantium numquam quos adipisci commodi velit, expedita officia cum excepturi
          molestias.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab doloribus optio, eaque harum blanditiis totam
          voluptatibus amet quibusdam veritatis animi ipsum eveniet modi aspernatur, vel repellat est commodi
          consequatur unde! A obcaecati soluta inventore, numquam impedit quaerat magnam incidunt sit cupiditate sequi
          cum. Exercitationem commodi reiciendis culpa iste optio aliquam incidunt at, ab consectetur quae est sapiente
          dignissimos, sit deleniti voluptatibus animi repudiandae. Itaque nemo laborum dolore numquam repudiandae
          mollitia quis. Placeat quis architecto eligendi distinctio quas perferendis officia voluptatem illo, nisi
          ullam voluptatum odio eveniet non eum vero vel dolorum deleniti adipisci culpa. Reprehenderit cum ut
          voluptates reiciendis iusto.
        </p>
      </div>
    </Transition>
    <div class="h-10 border-t border-t-solid border-t-gray-200 cursor-pointer">
      <div class="h-full flex justify-center items-center" @click="handleClick">
        <Icon :icon="`iconamoon:arrow-${show ? 'up' : 'down'}-2-fill`" width="30" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.example {
  clip-path: path('M0 0 H400 V70 A30 30, 0, 1 0, 400 130 V200 H0 V130 A30 30, 1,  1 0, 0 70 Z');
}

.slide-enter-active,
.slide-leave-active {
  overflow: hidden;
  transform: translate3d(0);
  transition: 0.3s;
}

.slide-enter-active,
.slide-leave-from {
  max-height: 500px;
}

.slide-leave-active,
.slide-enter-from {
  max-height: 0;
}

.lorem-ipsum p {
  font-family: 'Roboto Medium';
  font-variant: small-caps;
  /* text-align-last: center; */
  /* word-break: break-all; */
  /* word-spacing: 2px; */
  /* -webkit-text-security: square; */
  line-height: 1.6;
  text-indent: 1em;

  color: #666;
}
</style>
