<demo>
禁止点击遮罩层关闭Dialog
</demo>
<template>
  <lu-button theme="success" @click="toggle">打开Dialog</lu-button>
  <lu-dialog v-model:visible="showDialog" :closeOnClickOverlay="false">
    <p>Dialog内容</p>
  </lu-dialog>
</template>

<script lang="ts">
import { ref } from 'vue'
import LuButton from '@/lib/Button/Button.vue'
import LuDialog from '@/lib/Dialog/Dialog.vue'
export default {
  name: 'DialogOverlay',
  components: {
    LuDialog,
    LuButton
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
