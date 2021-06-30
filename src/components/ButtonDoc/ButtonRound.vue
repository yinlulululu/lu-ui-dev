<demo>
圆形边框
</demo>
<template>
  <lu-button round>默认按钮</lu-button>
  <lu-button theme="primary" round>主题按钮</lu-button>
  <lu-button theme="success" round>成功按钮</lu-button>
  <lu-button theme="warning" round>警告按钮</lu-button>
  <lu-button theme="error" round>危险按钮</lu-button>
</template>

<script lang="ts">
import LuButton from '../../lib/Button/Button.vue' 
export default {
    name: 'ButtonRound',
    components: {
        LuButton
    }

}
</script>