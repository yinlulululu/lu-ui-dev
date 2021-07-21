<template>
  <div class="lu-tabs">
    <div class="lu-tabs-nav" ref="container">
      <div
        class="lu-tabs-nav-item"
        v-for="(tabNode, index) in colNodes"
        :ref="
          (el) => {
            if (tabNode.props.title === selected) selectedItem = el
          }
        "
        @click="select(tabNode)"
        :class="
          [tabNode.props.title === selected ? 'selected' : ''] +
          [tabNode.props.disabled === '' ? 'disabled' : '']
        "
        :key="index"
      >
        {{ tabNode.props.title }}
      </div>
      <div class="lu-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="lu-tabs-content">
      <component
        class="lu-tabs-content-item"
        :key="current.props.title"
        :is="current"
      />
    </div>
  </div>
</template>
<script lang="ts">
import TabsItem from './TabsItem.vue'
import { computed, ref, onMounted, watchEffect } from 'vue'
export default {
  name: 't-tabs',
  props: {
    selected: String
  },
  setup(props: any, context: any) {
    // @ts-ignore
    const selectedItem = ref<HTMLDivElement>(null)
    // @ts-ignore
    const indicator = ref<HTMLDivElement>(null)
    // @ts-ignore
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
        // 解决异步
        {
          flush: 'post' //效果更新需要缓冲时间
        }
      )
    })
    // 获取插槽结点
    // @ts-ignore
    const colNodes = context.slots.default()

    colNodes.forEach((tabNode: any) => {
      // @ts-ignore
      if (tabNode.type.name !== TabsItem.name) {
        throw new Error('t-tabs 子标签必须是 t-tab')
      }
    })
    // 返回当前选中结点
    const current = computed(() => {
      // @ts-ignore
      return colNodes.find((tabNode) => tabNode.props.title === props.selected)
    })
    // 处理点击事件，当有disabled属性时不更新选中结点，否则选中点击结点
    // @ts-ignore
    const select = (tabNode) => {
      if (tabNode.props.disabled === '') {
        return
      }
      context.emit('update:selected', tabNode.props.title)
    }

    return {
      current,
      colNodes,
      select,
      selectedItem,
      indicator,
      container
    }
  }
}
</script>

<style lang="scss">
$color: #333;
$border-color: #d9d9d9;

.lu-tabs {
  &-nav {
    display: flex;
    color: #fff;
    border-bottom: 1px solid $border-color;
    position: relative;

    &-item {
      padding: 8px;
      margin: 0 8px;
      cursor: pointer;
      &.disabled {
        color: #413f3f;
        cursor: not-allowed;
      }
      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: #5545fb;
      }
    }

    &-indicator {
      position: absolute;
      height: 3px;
      // background: linear-gradient(to right, #5545fb, #ff009a);
      background-color: #ff009a;
      background-color: #5545fb;
      left: 0;
      bottom: -1px;
      transition: all 0.25s;
    }
  }
  &-content {
    padding: 20px 8px;
  }
}
</style>
