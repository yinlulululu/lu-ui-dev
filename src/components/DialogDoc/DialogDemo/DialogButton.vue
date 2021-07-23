<demo>
按钮功能
</demo>
<template>
  <lu-button theme="primary" @click="toggle">打开Dialog</lu-button>
  <lu-dialog v-model:visible="showDialog" bottomButton="true" :ok="ok" :cancel="cancel">
    <p>Dialog内容</p>
  </lu-dialog>
</template>

<script lang="ts">
import { ref } from 'vue'
import LuButton from '@/lib/Button/Button.vue'
import LuDialog from '@/lib/Dialog/Dialog.vue'
export default {
  name: 'DialogButton',
  components: {
    LuDialog,
    LuButton
  },
  setup() {
    const showDialog = ref(false)
    const toggle = () => {
      showDialog.value = !showDialog.value
    }
    const ok = () => {
      console.log('确定')
      return true
    }
    const cancel = () => {
      console.log('取消')
    }
    return {
      showDialog,
      toggle,
      ok,
      cancel
    }
  }
}
</script>
