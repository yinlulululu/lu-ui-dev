<demo>
一键打开 Dialog
</demo>
<template>
  <lu-button theme="primary" @click="showDialog">打开对话框</lu-button>
</template>

<script lang="ts">
import LuButton from '../../../lib/Button/Button.vue'
import { openDialog } from '../../../lib/Dialog/openDialog'
export default {
  components: {
    // LuButton
  },
  setup() {
    const showDialog = () => {
      openDialog({
        title: '我的标题',
        bottomButton: true,
        content: '这是内容',
        ok() {
          console.log('ok')
          return true
        },
        cancel() {
          console.log('cancel')
        }
      })
    }
    return { showDialog }
  }
}
</script>
