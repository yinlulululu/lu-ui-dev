<template>
  <div>
    <lu-switch v-model:value="checked" />
  </div>
</template>

<script lang="ts">
import LuSwitch from '../lib/Switch.vue'
import { ref } from 'vue'

export default {
  components: {
    LuSwitch
  },
  setup() {
    const checked = ref(false)
    return { checked }
  }
}
</script>

<style lang="sass" scoped>
</style>