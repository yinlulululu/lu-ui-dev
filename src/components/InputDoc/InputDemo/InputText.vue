<demo>
    文本类型
</demo>
    
<template>
  <lu-input placeholder="文本类型" v-model:value="text" />
  <span class="picked">{{ text }}</span>
</template>
    
    <script lang="ts">
import { ref } from 'vue'
import LuInput from '../../../lib/Input/Input.vue'

export default {
  name: 'InputText',
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