<template>
  <div class="lu-button-demo">
    <h1>Button 按钮</h1>
    <Container :component="ButtonNormal">
      <p>可以使用<code>theme</code>属性来定义按钮的样式</p>
    </Container>
    <Container :component="ButtonSize">
      <p>
        可以使用<code>size</code>属性来定义按钮的大小，它接受<code>big</code>,<code>small</code>属性值
      </p>
    </Container>
    <Container :component="ButtonRound">
      <p>
        可以使用<code>round</code>属性来定义按钮是圆形，它接受一个<code>Boolean</code>值
      </p>
    </Container>
    <Container :component="ButtonDisabled">
      <p>
        可以使用<code>disabled</code>属性来定义按钮是禁用，它接受一个<code>Boolean</code>值
      </p>
    </Container>
    <Container :component="ButtonLoading">
      <p>
        可以使用<code>loading</code>属性来定义按钮是加载，它接受一个<code>Boolean</code>值
      </p>
    </Container>
    <Attr :data="data"></Attr>
  </div>
</template>

<script lang="ts">
import LuButton from '../../lib/Button/Button.vue'

import Container from '../Container.vue'
import ButtonNormal from './ButtonDemo/ButtonNormal.vue'
import ButtonSize from './ButtonDemo/ButtonSize.vue'
import ButtonDisabled from './ButtonDemo/ButtonDisabled.vue'
import ButtonRound from './ButtonDemo/ButtonRound.vue'
import ButtonLoading from './ButtonDemo/ButtonLoading.vue'
import Attr from '../Attr.vue'
export default {
  components: {
    LuButton,
    Container,
    Attr
  },
  setup() {
    const data = [
      {
        parmas: 'theme',
        desc: '按钮类型',
        type: 'String',
        select: 'default / primary / success / warning / error',
        default: 'default'
      },
      {
        params: 'size',
        desc: '尺寸',
        type: 'String',
        select: 'normal / small / big',
        default: 'normal'
      },
      {
        params: 'round',
        desc: '圆形边框',
        type: 'Boolean',
        select: 'false / true',
        default: 'false'
      },
      {
        params: 'disabled',
        desc: '禁止状态',
        type: 'Boolean',
        select: 'false / true',
        default: 'false'
      },

      {
        params: 'loading',
        desc: '加载中',
        type: 'Boolean',
        select: 'false / true',
        default: 'false'
      }
    ]
    const onClick = () => {
      alert('按钮已点击')
    }
    return {
      onClick,
      ButtonNormal,
      ButtonSize,
      ButtonDisabled,
      ButtonRound,
      ButtonLoading,
      data
    }
  }
}
</script>

<style lang="scss" scoped>
.lu-button-demo {
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

