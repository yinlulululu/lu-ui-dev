<template>
  <div class="lu-radio-demo">
    <h1>Radio 单选框</h1>
    <Container :component="RadioNormal">
      <p>
        可以使用<code>label</code>属性指定<code>Radio单选框</code>的下标元素
      </p>
    </Container>
    <Container :component="RadioLabel">
      <p>
        可以使用<code>label</code>属性直接指定<code>Radio单选框</code>标签内容
      </p>
    </Container>
    <Attr :data="data"></Attr>
  </div>
</template>

<script lang="ts">
import Container from '@/components/Container.vue'
import Attr from '@/components/Attr.vue'
import RadioNormal from '@/components/RadioDoc/RadioDemo/RadioNormal.vue'
import RadioLabel from '@/components/RadioDoc/RadioDemo/RadioLabel.vue'
export default {
  components: {
    Container,
    Attr
  },
  setup() {
    const data = [
      {
        params: 'label',
        desc: '相当于原生radio标签的value',
        type: 'string / number / boolean',
        select: '自定义',
        default: '自定义'
      },
      {
        params: 'v-model:value',
        desc: '双向绑定',
        type: '随着label属性类型改变',
        select: '自定义',
        default: 'label属性中的任意一个值'
      }
    ]
    return {
      data,
      RadioNormal,
      RadioLabel
    }
  }
}
</script>

<style lang="scss" scoped>
.lu-radio-demo {
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