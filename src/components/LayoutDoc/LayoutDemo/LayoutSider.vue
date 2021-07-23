<demo>
侧边栏
</demo>
<template>
  <lu-layout class="layout">
    <lu-header class="header">header</lu-header>
    <lu-layout>
      <lu-sider class="sider">sider</lu-sider>
      <lu-content class="content">content</lu-content>
    </lu-layout>
    <lu-footer class="footer">footer</lu-footer>
  </lu-layout>
</template>
<script lang="ts">
import LuLayout from '@/lib/Layout/Layout.vue'
import LuHeader from '@/lib/Layout/Header.vue'
import LuContent from '@/lib/Layout/Content.vue'
import LuFooter from '@/lib/Layout/Footer.vue'
import LuSider from '@/lib/Layout/Sider.vue'
export default {
  name: 'LayoutSider',
  components: {
    LuLayout,
    LuHeader,
    LuContent,
    LuFooter,
    LuSider
  }
}
</script>

<style lang="scss" scoped>
.layout {
  height: 220px;
  text-align: center;
  .header {
    min-height: 50px;
    background-color: #ff0099;
    line-height: 50px;
  }
  .content {
    background-color: #000;
    line-height: 120px;
  }
  .footer {
    min-height: 60px;
    background-color: #5545fb;
    line-height: 60px;
  }
  .sider {
    min-width: 80px;
    background-color: #0BB6D6;
    line-height: 120px;
  }
}
</style>