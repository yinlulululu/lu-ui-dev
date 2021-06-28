<demo>
禁用状态
</demo>
<template>
  <lu-switch v-model="checked" disabled />
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  setup() {
    const checked = ref(false)
    return { checked }
  }
}
</script>