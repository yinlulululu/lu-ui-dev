<template>
  <div class="lu-grid-demo">
    <h1>Grid 栅格</h1>

    <Container :component="GridRow">
      <p>
        区域按照 24
        等分的原则进行划分,可以使用<code>span</code>属性来定义区域占比。
      </p>
    </Container>

    <Container :component="GridGutter">
      <p>
        可以使用<code>gutter</code>属性来定义区域栅格等间间隔，单位为<code>px</code>。
      </p>
    </Container>
    <Container :component="GridOffset">
      <p>
        可以使用<code>offset</code>属性自定义左间隔，单位为<code>px</code>。
      </p>
    </Container>

    <Container :component="GridResponsive">
      <p>
        可以使用<code>S</code><code>M</code><code>L</code
        ><code>XL</code>属性适配不同宽度设备，可拖到浏览器大小查看
      </p>
    </Container>

    <Attr :data="data"></Attr>
  </div>
</template>
  <script lang="ts">
import Container from '../Container.vue'
import Attr from '../Attr.vue'
import GridRow from '../GridDoc/GridDemo/GridRow.vue'
import GridGutter from '../GridDoc/GridDemo/GridGutter.vue'
import GridOffset from '../GridDoc/GridDemo/GridOffset.vue'
import GridResponsive from '../GridDoc/GridDemo/GridResponsive.vue'
export default {
  components: { Container, Attr },
  setup() {
    const data = [
      {
        params: 'span',
        desc: '栅格占比',
        type: 'number',
        select: '1~24',
        default: '24'
      },
      {
        params: 'gutter',
        desc: '等间间隙',
        type: 'number',
        select: 'number',
        default: '0'
      },
      {
        params: 'offset',
        desc: '左间隔占比',
        type: 'number',
        select: '1~24',
        default: '0'
      },
      {
        params: '直接写span, offset',
        desc: '屏幕宽度小于577px',
        type: 'number',
        select: '1~24',
        default: 'undefined'
      },
      {
        params: 'S',
        desc: '屏幕宽度577~769px',
        type: '{span, offset}',
        select: '{span, offset}',
        default: 'undefined'
      },
      {
        params: 'M',
        desc: '屏幕宽度769~993px',
        type: '{span, offset}',
        select: '{span, offset}',
        default: 'undefined'
      },
      {
        params: 'L',
        desc: '屏幕宽度993~1201px',
        type: '{span, offset}',
        select: '{span, offset}',
        default: 'undefined'
      },
      {
        params: 'XL',
        desc: '屏幕宽度大于1201~',
        type: '{span, offset}',
        select: '{span, offset}',
        default: 'undefined'
      }
    ]
    return {
      GridRow,
      GridGutter,
      GridOffset,
      GridResponsive,
      data
    }
  }
}
</script>
  
  <style lang="scss" scoped>
.lu-grid-demo {
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
  