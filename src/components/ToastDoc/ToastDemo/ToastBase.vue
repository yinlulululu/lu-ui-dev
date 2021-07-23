<demo>
    基础使用
</demo>
<template>
  <lu-button theme="success" @click="top">上方弹出</lu-button>
  <lu-button theme="warning" @click="middle">中间弹出</lu-button>
  <lu-button theme="success" @click="bottom">下方弹出</lu-button>
</template>
    
<script lang="ts">
import LuButton from '@/lib/Button/Button.vue'
import toast from '../../../lib/Toast/Toast.vue'
import Vue from 'vue'
// Vue.prototype.$http = toast
export default {
  components: {
    LuButton
  },

  methods: {
    top() {
      this.$toast('弹出提示内容')
    },
    middle() {
      this.$toast('弹出提示内容', { position: 'middle' })
    },
    bottom() {
      this.$toast('弹出提示内容', { position: 'bottom' })
    }
  }
}
</script>
    
    
    