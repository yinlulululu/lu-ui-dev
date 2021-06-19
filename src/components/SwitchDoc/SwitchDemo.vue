<template>
  <div class="lu-switch-demo">
    <h1>Switch 开关</h1>
    <Container :component="SwitchNormal">
      <p>
        可以使用<code>v-model</code>绑定一个<code>Boolean</code>类型的变量到<code>Switch</code>组件。
      </p>
    </Container>
  </div>
</template>
<script lang="ts">
import Container from '../Container.vue'
import SwitchNormal from './SwitchNormal.vue'

export default {
  components: { Container },
  setup() {
    return { SwitchNormal }
  }
}
</script>

<style lang="scss" scoped>
.lu-switch-demo {
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
