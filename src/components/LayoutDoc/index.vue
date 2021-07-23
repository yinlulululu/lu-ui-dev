<template>
  <div class="lu-layout-demo">
    <h1>Layout 布局</h1>
    <Container :component="LayoutNormal">
      <p>
        布局容器，其下可嵌套<code>lu-header</code><code>lu-sider</code
        ><code>lu-content</code><code>lu-footer</code>
        或<code>lu-layout</code>本身，可以放在任何父容器中。
      </p>
    </Container>
    <Container :component="LayoutSider">
      <p>侧边栏由<code>lu-layout</code>嵌套<code>lu-sider</code>生成。</p>
    </Container>
  </div>
</template>
<script lang="ts">
import Container from '@/components/Container.vue'
import LayoutNormal from '@/components/LayoutDoc/LayoutDemo/LayoutNormal.vue'
import LayoutSider from '@/components/LayoutDoc/LayoutDemo/LayoutSider.vue'
import Attr from '@/components/Attr.vue'

export default {
  components: { Container },
  setup() {
    return { LayoutNormal, LayoutSider }
  }
}
</script>

<style lang="scss" scoped>
.lu-layout-demo {
  h1 {
    font-size: 28px;
    @media (max-width: 500px) {
      font-size: 22px;
      padding-left: 5px;
      margin-bottom: 0;
    }
  }
  code {
    background: linear-gradient(to right, #ff0099, #5545fb);
    border-radius: 3px;
    padding: 3px 5px;
    margin: 0 3px;
  }
}
</style>
