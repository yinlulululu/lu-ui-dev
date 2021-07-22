<demo>
    密码类型
</demo>
    
<template>
  <lu-input placeholder="密码类型" type="password" v-model:value="password" />
  <span class="picked">{{ password }}</span>
</template>
    
    <script lang="ts">
import { ref } from 'vue'
import LuInput from '../../../lib/Input/Input.vue'

export default {
  name: 'InputPassword',
  components: { LuInput },
  setup(props: any) {
    const password = ref('')
    return { password }
  }
}
</script>
    
<style lang="scss" scoped>
.picked {
  padding: 10px 15px;
}
</style>