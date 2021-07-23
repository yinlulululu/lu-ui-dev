<template>
  <div class="lu-switch-demo">
    <h1>Switch 开关</h1>
    <Container :component="SwitchNormal">
      <p>
        可以使用<code>v-model</code>绑定一个<code>Boolean</code>类型的变量到<code>Switch</code>组件。
      </p>
    </Container>
    <Container :component="SwitchDisabled">
      <p>
        可以使用<code>disabled</code>属性，以此来禁用<code>Switch</code>组件，它接受一个<code>Boolean</code>值。
      </p>
    </Container>
    <Attr :data="data"></Attr>
  </div>
</template>
<script lang="ts">
import Container from '@/components/Container.vue'
import SwitchNormal from '@/components/SwitchDoc/SwitchDemo/SwitchNormal.vue'
import SwitchDisabled from '@/components/SwitchDoc/SwitchDemo/SwitchDisabled.vue'
import Attr from '@/components/Attr.vue'

export default {
  components: { Container, Attr },
  setup() {
    const data = [
      {
        params: 'disabled',
        desc: '禁止状态',
        type: 'Boolean',
        select: 'false / true',
        default: 'false'
      }
    ]
    return { SwitchNormal, SwitchDisabled, data }
  }
}
</script>

<style lang="scss" scoped>
.lu-switch-demo {
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
