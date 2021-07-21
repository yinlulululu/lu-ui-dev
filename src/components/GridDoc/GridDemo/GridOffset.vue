<demo>
    自定义间隙
</demo>
<template>
  <lu-row class="row">
    <lu-col span="12"><div class="dark"></div></lu-col>
    <lu-col span="6" offset="6"><div class="light"></div></lu-col>
  </lu-row>
  <lu-row class="row">
    <lu-col span="8"><div class="dark"></div></lu-col>
    <lu-col span="5" offset="3"><div class="light"></div></lu-col>
    <lu-col span="4" offset="4"><div class="bg"></div></lu-col>
  </lu-row>
  <lu-row class="row">
    <lu-col span="2"><div class="dark"></div></lu-col>
    <lu-col span="5" offset="3"><div class="light"></div></lu-col>
    <lu-col span="4" offset="4"><div class="bg"></div></lu-col>
  </lu-row>
</template>
<script lang="ts">
import LuRow from '../../../lib/Grid/Row.vue'
import LuCol from '../../../lib/Grid/Col.vue'
export default {
  name: 'GridOffset',
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