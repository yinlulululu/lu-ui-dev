<demo>
基础用法
</demo>

<template>
  <lu-radio label="1" v-model:value="labelVal">学习</lu-radio>
  <lu-radio label="0" v-model:value="labelVal">娱乐</lu-radio>
  <div class="picked">Picked:{{ labelVal }}</div>
</template>

<script lang="ts">
import { ref } from 'vue'
import LuRadio from '../../../lib/Radio/Radio.vue'
export default {
  name: 'RadioNormal',
  components: { LuRadio },
  setup() {
    const labelVal = ref('1')
    return { labelVal }
  }
}
</script>

<style lang="scss" scoped>
.picked {
  padding: 10px 0;
}
</style>