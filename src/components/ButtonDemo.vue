<template>
  <div>Button 示例</div>
  <h1>示例1</h1>
  <div>
    <lu-button @click="onClick">默认按钮</lu-button>
    <lu-button theme="button">普通按钮</lu-button>
    <lu-button theme="link">链接按钮</lu-button>
    <lu-button theme="text">文本按钮</lu-button>
  </div>
  <h1>示例2</h1>
  <div>
    <div>
      <lu-button size="small">小号按钮</lu-button>
      <lu-button>默认按钮</lu-button>
      <lu-button size="big">大号按钮</lu-button>
    </div>
    <div>
      <lu-button theme="link" size="small">小号链接按钮</lu-button>
      <lu-button theme="link">默认链接你好</lu-button>
      <lu-button theme="link" size="big">大号链接按钮</lu-button>
    </div>
    <div>
      <lu-button theme="text" size="small">小号文本按钮</lu-button>
      <lu-button theme="text">默认文本按钮</lu-button>
      <lu-button theme="text" size="big">大号文本按钮</lu-button>
    </div>
  </div>
  <h1>示例3</h1>
  <div>
    <div>
      <lu-button level="main">主要按钮</lu-button>
      <lu-button>普通按钮</lu-button>
      <lu-button level="danger">危险按钮</lu-button>
    </div>
    <div>
      <lu-button theme="link" level="main">主要链接按钮</lu-button>
      <lu-button theme="link">普通链接按钮</lu-button>
      <lu-button theme="link" level="danger">危险链接按钮</lu-button>
    </div>
    <div>
      <lu-button theme="text" level="main">主要文本按钮</lu-button>
      <lu-button theme="text">普通文本按钮</lu-button>
      <lu-button theme="text" level="danger">危险文本按钮</lu-button>
    </div>
  </div>
  <h1>示例4</h1>
  <div>
    <lu-button disabled>禁用按钮</lu-button>
    <lu-button disabled theme="link">禁用链接按钮</lu-button>
    <lu-button disabled theme="text">禁用文本按钮</lu-button>
  </div>
  <h1>示例5</h1>
  <div>
    <lu-button loading>加载按钮</lu-button>
    <lu-button>加载完毕</lu-button>
  </div>
</template>

<script>
import LuButton from '../lib/Button.vue'
export default {
  components: {
    LuButton
  },
  setup() {
    const onClick = () => {
      alert('按钮已点击')
    }
    return {
      onClick
    }
  }
}
</script>

<style lang="scss" scoped>
</style>

