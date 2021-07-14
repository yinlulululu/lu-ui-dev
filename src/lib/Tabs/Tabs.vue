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
import { computed, onMounted, watchEffect } from '@vue/runtime-core'
export default {
  name: 'lu-tabs',
  props: {
    selected: {
      type: String,
      default: ''
    }
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null)
    const indicator = ref<HTMLDivElement>(null)
    const container = ref<HTMLDivElement>(null)
    onMounted(() => {
      watchEffect(
        () => {
          const { width } = selectedItem.value.getBoundingClientRect()
          indicator.value.style.width = width + 'px'
          const { left: NavLeft } = container.value.getBoundingClientRect()
          const { left: SelectedLeft } =
            selectedItem.value.getBoundingClientRect()
          const left = SelectedLeft - NavLeft
          indicator.value.style.left = left + 'px'
        },
        {
          // 解决异步
          flush: 'post'
        }
      )
    })
    // 获取插槽节点
    const colNodes = context.slots.default()

    colNodes.forEach((tabNode) => {
      // @ts-ignore
      if (tabNode.type.name !== Tab.name) {
        throw new Error('lu-tabs 的子标签必须是 lu-tab')
      }
    })
    // 返回当前选中节点

  }
}
</script>

<style lang="scss" scoped>
</style>