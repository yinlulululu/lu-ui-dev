<demo>
自定义标题
</demo>
<template>
  <lu-button theme="warning" @click="toggle"> 打开Dialog</lu-button>
  <lu-dialog v-model:visible="showDialog" title="这是自定义标题">
    <p>这是内容</p>
  </lu-dialog>
</template>

<script lang="ts">
import { ref } from 'vue'
import LuButton from '@/lib/Button/Button.vue'
import LuDialog from '@/lib/Dialog/Dialog.vue'
export default {
  name: 'DialogTitle',
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
