<template>
  <div class="lu-input-demo">
    <h1>Input 输入框</h1>
    <Container :component="InputBase">
      <p>可以使用<code>v-model</code>实现<code>双向绑定</code></p>
    </Container>
    <Container :component="InputText">
      <p><code>Input</code>输入框默认属性为<code>文本类型</code></p> </Container
    ><Container :component="InputPassword">
      <p>可以使用<code>password</code>属性实现显示隐藏的密码框</p> </Container
    ><Container :component="InputDisable">
      <p>可以使用<code>v-model</code>实现<code>双向绑定</code></p>
    </Container>
    <Attr :data="data"></Attr>
  </div>
</template>
  <script lang="ts">
import Container from '../Container.vue'
import InputBase from '../InputDoc/InputDemo/InputBase.vue'
import InputText from '../InputDoc/InputDemo/InputText.vue'
import InputPassword from '../InputDoc/InputDemo/InputPassword.vue'
import InputDisable from '../InputDoc/InputDemo/InputDisable.vue'
import Attr from '../Attr.vue'
export default {
  components: { Container, Attr },
  setup() {
    const data = [
      {
        params: 'placeholder',
        desc: '占位符',
        type: 'string',
        select: '任意字符串',
        default: 'null'
      },
      {
        params: 'name',
        desc: 'name属性',
        type: 'string',
        select: '任意字符串',
        default: 'null'
      },
      {
        params: 'type',
        desc: '文本框类型',
        type: 'string',
        select: '支持所有原生input的类型',
        default: 'text'
      },
      {
        params: 'disabled',
        desc: '禁用',
        type: 'boolean',
        select: 'false/true',
        default: 'false'
      }
    ]
    return { data, InputBase, InputText, InputPassword, InputDisable }
  }
}
</script>
  
  <style lang="scss" scoped>
.lu-input-demo {
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
  