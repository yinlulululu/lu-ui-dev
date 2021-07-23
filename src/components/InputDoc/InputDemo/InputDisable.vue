<demo>
    支持禁用
</demo>
    
<template>
  <lu-input placeholder="禁用" v-model:value="text" disabled />
</template>
    
<script lang="ts">
import { ref } from 'vue'
import LuInput from '@/lib/Input/Input.vue'

export default {
  name: 'InputDisable',
  components: { LuInput },
  setup(props: any) {
    const text = ref('')
    return { text }
  }
}
</script>
    
<style lang="scss" scoped>
.picked {
  padding: 10px 15px;
}
</style>