<demo>
基础使用
</demo>
<template>
  <lu-tabs v-model:selected="TabFlag">
    <lu-tab-item title="导航1">内容1</lu-tab-item>
    <lu-tab-item title="导航2">内容2</lu-tab-item>
    <lu-tab-item title="导航3">内容3</lu-tab-item>
  </lu-tabs>
</template>

<script lang="ts">
import { ref } from 'vue'
import LuTabs from '@/lib/Tabs/Tabs.vue'
import LuTabItem from '@/lib/Tabs/TabsItem.vue'
export default {
  name: 'TabsNormal',
  components: {
    LuTabs,
    LuTabItem
  },
  setup() {
    const TabFlag = ref('导航1')
    return { TabFlag }
  }
}
</script>
