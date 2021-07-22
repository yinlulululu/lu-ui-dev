<demo>
    自定义弹出时间
</demo>
<template>
  <lu-button theme="primary" @click="middle">中间弹出5s</lu-button>
</template>
    
<script lang="ts">
import LuButton from '../../../lib/Button/Button.vue'
export default {
  components: {
    LuButton
  },
  methods: {
    middle() {
      this.$toast('弹出提示内容', { position: 'middle', autoClose: '5' })
    }
  }
}
</script>
    
    
    