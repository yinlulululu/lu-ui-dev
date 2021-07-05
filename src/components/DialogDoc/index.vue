<template>
  <div class="lu-dialog-demo">
    <h1>Dialog 对话框</h1>
    <Container :component="DialogNormal">
      <p>
        可以使用<code>v-model</code>绑定一个<code>Boolean</code>类型的变量到<code>Dialog</code>组件
      </p>
    </Container>
  </div>
</template>

<script lang="ts">
import Container from '../Container.vue'
import DialogNormal from '../DialogDoc/DialogDemo/DialogNormal.vue'
export default {
  components: {
    Container
  },
  setup() {
    return {
      DialogNormal
    }
  }
}
</script>

<style lang="scss" scoped>
.lu-dialog-demo {
  h1 {
    font-size: 28px;
  }
  code {
    background: linear-gradient(to right, #5545fb, #ff009a);
    border-radius: 2px;
    padding: 3px 5px;
    margin: 0 3px;
  }
}
</style>

