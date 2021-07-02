<demo>
基本用法
</demo>
<template>
  <lu-button theme="primary" @click="toggle">打开Dialog</lu-button>
  <lu-dialog v-model:visible="showDialog">
    <p>Dialog内容</p>
  </lu-dialog>
</template>
<script lang="ts">
import { ref } from 'vue'
import LuButton from '../../../lib/Button/Button.vue'
import LuDialog from '../../../lib/Dialog/Dialog.vue'
export default {
  components: {
    LuButton,
    LuDialog
  },
  setup() {
    const showDialog = ref(false)
    const toggle = () => {
      showDialog.value = !showDialog.value
    }
    return {
      showDialog,
      toggle
    }
  }
}
</script>
