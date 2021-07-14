<template>
  <div class="lu-tabs">
    <div class="lu-tabs-nav" ref="container">
      <div class="lu-tabs-nav-item"></div>
      <div class="lu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="lu-tabs-content">
      <component :is="current" />
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {
  name: 'lu-tabs',
  props: {
    selected: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>()
    const indicator = ref<HTMLDivElement>()
    const container = ref<HTMLDivElement>()
    onMounted(() => {
        
    })
  }
}
</script>

<style lang="scss" scoped>
</style>