<template>
  <div class="lu-toast-demo">
    <h1>Toast 提示框</h1>
    <Container :component="ToastBase">
      <p>
        可以使用<code>position</code>属性定义<code>toast</code>弹出位置，可选择默认<code>top</code>或者<code
          >middle</code
        ><code>bottom</code>。
      </p>
    </Container>
    <Container :component="ToastAuto">
      <p>
        可以使用<code>autoClose</code>属性定义<code>toast</code>弹出时间，它接收一个<code>Number</code>类型。
      </p>
    </Container>
    <Container :component="ToastButton">
      <p>
        可以使用<code>closeButton</code>属性自定义<code>toast</code>关闭内容以及回调执行，它接收一个<code
          >{text, callback}</code
        >
      </p>
    </Container>
    <Container :component="ToastHtml">
      <p>
        可以使用<code>enableHtml</code>属性自定义<code>toast</code>支持HTML写法，它接收一个<code>Boolean</code>值。
      </p>
    </Container>

    <Attr :data="data"></Attr>
  </div>
</template>
  
<script lang=ts>
import Container from '@/components/Container.vue'
import ToastBase from '@/components/ToastDoc/ToastDemo/ToastBase.vue'
import ToastAuto from '@/components/ToastDoc/ToastDemo/ToastAuto.vue'
import ToastButton from '@/components/ToastDoc/ToastDemo/ToastButton.vue'
import ToastHtml from '@/components/ToastDoc/ToastDemo/ToastHtml.vue'
import Attr from '@/components/Attr.vue'
export default {
  components: {
    Container,
    Attr
  },
  setup() {
    const data = [
      {
        params: 'position',
        desc: '弹出位置',
        type: 'string',
        select: 'top / middle / bottom',
        default: 'top'
      },
      {
        params: 'autoClose',
        desc: '弹出时间',
        type: 'number',
        select: 'number',
        default: '2'
      },
      {
        params: 'closeButton',
        desc: '关闭按钮',
        type: '{text, callback}',
        select: '',
        default: "{text:'关闭',callback:undefined}"
      },
      {
        params: 'enableHtml',
        desc: '支持HTML',
        type: 'boolean',
        select: 'true / false',
        default: 'false'
      }
    ]
    return {
      data,
      ToastBase,
      ToastAuto,
      ToastButton,
      ToastHtml
    }
  }
}
</script>
  
  <style lang="scss" scoped>
.lu-toast-demo {
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