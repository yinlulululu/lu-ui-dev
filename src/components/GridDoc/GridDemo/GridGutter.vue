<demo>
    等间空隙
</demo>
<template>
  <div class="gutter">
    <lu-row gutter="30">
      <lu-col span="12"><div class="pink"></div></lu-col>
      <lu-col span="12"><div class="green"></div></lu-col>
    </lu-row>

    <lu-row gutter="20">
      <lu-col span="8"><div class="blue"></div></lu-col>
      <lu-col span="8"><div class="green"></div></lu-col>
      <lu-col span="8"><div class="pink"></div></lu-col>
    </lu-row>
    <lu-row gutter="10">
      <lu-col span="6"><div class="green"></div></lu-col>
      <lu-col span="6"><div class="pink"></div></lu-col>
      <lu-col span="6"><div class="blue"></div></lu-col>
      <lu-col span="6"><div class="green"></div></lu-col>
    </lu-row>
  </div>
</template>
<script lang="ts">
import LuRow from '@/lib/Grid/Row.vue'
import LuCol from '@/lib/Grid/Col.vue'
export default {
  name: 'GridGutter',
  components: {
    LuRow,
    LuCol
  }
}
</script>

<style scoped>
.pink {
  background-color: #ff0099;
}
.blue {
  background-color: #5545fb;
}
.green {
  background-color: #0bb6d6;
}
div {
  min-height: 36px;
  margin-top: 2px;
}
</style>