<template>
  <div class="lu-dialog-demo">
    <h1>Dialog 对话框</h1>
    <Container :component="DialogNormal">
      <p>
        可以使用<code>v-model</code>绑定一个<code>Boolean</code>类型的变量到<code>Dialog</code>组件
      </p>
    </Container>
    <Container :component="DialogOverlay">
      <p>
        可以使用<code>closeOnClickOverlay</code>属性，设置禁止点击遮罩层关闭<code>Dialog</code>组件,他接受一个<code>Boolean</code>值
      </p>
    </Container>
    <Container :component="DialogTitle">
      <p>可以使用<code>title</code>属性，来自定义Dialog组件标题</p>
    </Container>
    <Container :component="DialogButton">
      <p>
        可以使用<code>bottomButton</code>属性给<code>Dialog</code>组件添加<code>button</code>，他接受一个<code>Boolean</code>值，<code>ok</code>函数需返回<code>true</code>才可退出
      </p>
    </Container>
    <Container :component="DialogOnCode">
      <p>可以引入<code>openDialog</code>模块创建一个<code>Dialog</code>组件</p>
    </Container>
    <Attr :data="data"></Attr>
  </div>
</template>

<script lang="ts">
import Container from '@/components/Container.vue'
import DialogNormal from '@/components/DialogDoc/DialogDemo/DialogNormal.vue'
import DialogOnCode from '@/components/DialogDoc/DialogDemo/DialogOnCode.vue'
import DialogOverlay from '@/components/DialogDoc/DialogDemo/DialogOverlay.vue'
import DialogTitle from '@/components/DialogDoc/DialogDemo/DialogTitle.vue'
import DialogButton from '@/components/DialogDoc/DialogDemo/DialogButton.vue'
import Attr from '@/components/Attr.vue'
export default {
  components: {
    Container,
    Attr
  },
  setup() {
    const data = [
      {
        params: 'closeOnClickOverlay',
        desc: '点击遮罩层关闭',
        type: 'Boolean',
        select: 'false / true',
        default: 'true'
      },
      {
        params: 'title',
        desc: '自定义标题',
        type: 'String',
        select: '自定义标题',
        default: 'null'
      },
      {
        params: 'bottomButton',
        desc: '带有按钮',
        type: 'Boolean',
        select: 'false / true',
        default: 'false'
      },
      {
        params: 'ok',
        desc: '确认按钮执行函数',
        type: 'Function',
        select:
          'function return false（不关闭Dialog）  function return true（关闭Dialog）',
        default: 'null'
      },
      {
        params: 'cancel',
        desc: '取消按钮执行函数',
        type: 'Function',
        select: 'function（均关闭Dialog）',
        default: 'null'
      }
    ]
    return {
      DialogNormal,
      DialogOnCode,
      DialogOverlay,
      DialogTitle,
      DialogButton,
      data
    }
  }
}
</script>

<style lang="scss" scoped>
.lu-dialog-demo {
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

