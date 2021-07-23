<demo>
基础使用
</demo>
<template>
  <lu-button theme="default" >默认按钮</lu-button>
  <lu-button theme="primary">主题按钮</lu-button>
  <lu-button theme="success">成功按钮</lu-button>
  <lu-button theme="warning">警告按钮</lu-button>
  <lu-button theme="error">危险按钮</lu-button>
</template>

<script lang="ts">
import LuButton from '@/lib/Button/Button.vue'
export default {
  name: 'ButtonNormal',
  components: {
    LuButton
  }
}
</script>
