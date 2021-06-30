<demo>
基础使用
</demo>
<template>
  <lu-switch v-model:value="checked" />
</template>

<script lang="ts">
import { ref } from 'vue'
import LuSwitch from '../../lib/Switch/Switch.vue'

export default {
  name: 'SwitchNormal',
  components: {
    LuSwitch
  },
  setup() {
    const checked = ref(true)
    return { checked }
  }
}
</script>