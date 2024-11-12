<script setup>
import TextContent from '@/views/BaiTapVue/Bai13/components/TextContent.vue'
import ImageContent from '@/views/BaiTapVue/Bai13/components/ImageContent.vue'
import VideoContent from '@/views/BaiTapVue/Bai13/components/VideoContent.vue'
import { computed } from 'vue'

const props = defineProps({
  componentType: {
    type: String,
    default: 'text'
  },
  textContent: {
    type: String,
    default: ''
  },
  imageContent: {
    type: String,
  },
  videoContent: {
    type: String,
  }
})

const currentComponent = computed(() => {
  switch (props.componentType) {
    case 'text':
      return TextContent
    case 'image':
      return ImageContent
    case 'video':
      return VideoContent
    default:
      return TextContent
  }
})
</script>

<template>
  <slot name="header"></slot>
  <component :is="currentComponent" >
    <div v-if="componentType === 'text'">{{textContent}}</div>
    <div v-if="componentType === 'image'">
      <img :src="imageContent" alt="">
    </div>
    <div v-if="componentType === 'video'">
      <video :src="videoContent" controls>

      </video>
    </div>
  </component>
  <slot name="footer"></slot>

</template>

<style scoped>

</style>
