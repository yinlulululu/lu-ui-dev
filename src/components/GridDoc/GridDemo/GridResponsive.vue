<demo>
响应式栅格
</demo>
<template>
  <lu-row class="row" :gutter="20">
    <lu-col
      span="12"
      :S="{ span: 8 }"
      :M="{ span: 6, offset: 2 }"
      :L="{ span: 4 }"
      :XL="{ span: 3, offset: 1 }"
      ><div></div>
    </lu-col>

    <lu-col
      span="12"
      :S="{ span: 8 }"
      :M="{ span: 6, offset: 2 }"
      :L="{ span: 4 }"
      :XL="{ span: 3, offset: 1 }"
      ><div></div>
    </lu-col>

    <lu-col
      span="12"
      :S="{ span: 8 }"
      :M="{ span: 6, offset: 2 }"
      :L="{ span: 4 }"
      :XL="{ span: 3, offset: 1 }"
      ><div></div>
    </lu-col>

    <lu-col
      span="12"
      :S="{ span: 8 }"
      :M="{ span: 6, offset: 2 }"
      :L="{ span: 4 }"
      :XL="{ span: 3, offset: 1 }"
      ><div></div>
    </lu-col>

    <lu-col
      span="12"
      :S="{ span: 8 }"
      :M="{ span: 6, offset: 2 }"
      :L="{ span: 4 }"
      :XL="{ span: 3, offset: 1 }"
      ><div></div>
    </lu-col>

    <lu-col
      span="12"
      :S="{ span: 8 }"
      :M="{ span: 6, offset: 2 }"
      :L="{ span: 4 }"
      :XL="{ span: 3, offset: 1 }"
      ><div></div>
    </lu-col>
  </lu-row>
</template>
<script lang="ts">
import LuRow from '../../../lib/Grid/Row.vue'
import LuCol from '../../../lib/Grid/Col.vue'
export default {
  name: 'GridResponsive',
  components: {
    LuRow,
    LuCol
  }
}
</script>
    <style lang="scss" scoped>
.row > div > div {
  min-height: 36px;
  margin-top: 3px;
  background-color: #ff0099;
}
</style>