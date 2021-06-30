<demo>
按钮大小
</demo>
<template>
  <lu-button theme="primary" size="small">小号按钮</lu-button>
  <lu-button theme="primary">普通按钮</lu-button>
  <lu-button theme="primary" size="big">大号按钮</lu-button>
</template>

<script lang="ts">
import LuButton from '../../lib/Button/Button.vue'
export default {
    name: 'ButtonSize',
    components: {
        LuButton
    }
}
</script>