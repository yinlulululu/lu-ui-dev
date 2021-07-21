<demo>
    等间空隙
</demo>
<template>
  <div class="gutter">
    <lu-row gutter="30">
      <lu-col span="12"><div class="dark"></div></lu-col>
      <lu-col span="12"><div class="light"></div></lu-col>
    </lu-row>

    <lu-row gutter="20">
      <lu-col span="8"><div class="bg"></div></lu-col>
      <lu-col span="8"><div class="light"></div></lu-col>
      <lu-col span="8"><div class="dark"></div></lu-col>
    </lu-row>
    <lu-row gutter="10">
      <lu-col span="6"><div class="light"></div></lu-col>
      <lu-col span="6"><div class="dark"></div></lu-col>
      <lu-col span="6"><div class="bg"></div></lu-col>
      <lu-col span="6"><div class="light"></div></lu-col>
    </lu-row>
  </div>
</template>
<script lang="ts">
import LuRow from '../../../lib/Grid/Row.vue'
import LuCol from '../../../lib/Grid/Col.vue'
export default {
  name: 'GridGutter',
  components: {
    LuRow,
    LuCol
  }
}
</script>

<style scoped>
.dark {
  background-color: #ff0099;
}
.bg {
  background-color: #5545fb;
}
.light {
  background-color: #0bb6d6;
}
div {
  min-height: 36px;
  margin-top: 2px;
}
</style>