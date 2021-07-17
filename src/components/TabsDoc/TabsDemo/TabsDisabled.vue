<demo>
禁用状态
</demo>
<template>
  <lu-tabs v-model:selected="TabFlag">
    <lu-tab title="导航1">内容1</lu-tab>
    <lu-tab title="导航2">内容2</lu-tab>
    <lu-tab title="导航3" disabled>内容3</lu-tab>
  </lu-tabs>
</template>

<script lang="ts">
import { ref } from 'vue'
import LuTabs from '../../../lib/Tabs/Tabs.vue'
import LuTab from '../../../lib/Tabs/TabsItem.vue'
export default {
  components: {
    LuTabs,
    LuTab
  },
  setup() {
    const TabFlag = ref('导航1')
    return { TabFlag }
  }
}
</script>
