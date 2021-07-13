<template>
  <div class="lu-tabs-demo">
    <h1>Tabs 导航栏切换</h1>
    <Container :component="TabsNormal">
      <p>
        可以使用<code>v-model</code>绑定一个<code>Boolean</code>类型的变量到<code>Tabs</code>组件，指定默认<span
          >Tab</span
        >
      </p>
    </Container>
  </div>
</template>

<script lang=ts>
import Container from '../Container.vue'
import TabsNormal from '../TabsDoc/TabsDemo/TabsNormal.vue'
export default {
  components: {
    Container
  },
  setup() {
    return {
      TabsNormal
    }
  }
}
</script>

<style lang="scss" scoped>
.lu-tabs-demo {
  h1 {
    font-size: 28px;
    @media (max-width: 500px) {
      font-size: 22px;
      padding-left: 5px;
      margin-bottom: 0;
    }
  }
  code {
    background: linear-gradient(to right, #ff0099e0, #5545fb);
    border-radius: 3px;
    padding: 3px 5px;
    margin: 0 3px;
  }
}
</style>