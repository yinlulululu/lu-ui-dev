<demo>
单标签
</demo>

<template>
  <lu-radio label="学习" v-model:value="labelVal" />
  <lu-radio label="娱乐" v-model:value="labelVal" />
  <div class="picked">Picked:{{ labelVal }}</div>
</template>

<script lang="ts">
import LuRadio from '../../../lib/Radio/Radio.vue'
import { ref } from 'vue'
export default {
  name: 'RadioLabel',
  components: { LuRadio },
  setup() {
    const labelVal = ref('娱乐')
    return { labelVal }
  }
}
</script>

<style lang="scss" scoped>
.picked {
  padding: 10px 0;
}
</style>