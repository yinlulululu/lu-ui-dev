<demo>
禁用状态
</demo>
<template>
  <lu-switch v-model="checked" disabled />
</template>

<script lang="ts">
import { ref } from 'vue'
import LuSwitch from '@/lib/Switch/Switch.vue'
export default {
  name: 'SwitchDisabled',
  components: {
    LuSwitch
  },
  setup() {
    const checked = ref(false)
    return { checked }
  }
}
</script>