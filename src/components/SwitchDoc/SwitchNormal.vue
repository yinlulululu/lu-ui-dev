<demo>
基础使用
</demo>
<template>
  <lu-switch v-model:value="checked" />
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  setup() {
    const checked = ref(true)
    return { checked }
  }
}
</script>