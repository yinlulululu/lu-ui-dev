<template>
  <div class="lu-icon-demo">
    <h1>Icon 图标</h1>
    <Container :component="IconNormal">
      <p>
        可以通过<code>iconpark-icon</code>标签来生成一个<code>Icon</code>,可以使用<code>size</code>、<code>width</code>、<code>height</code>、<code>color</code>等属性
      </p>
    </Container>

    <div class="icon-demo">
      <icon-demo></icon-demo>
    </div>
  </div>
</template>
<script lang="ts">
import IconDemo from './IconDemo/Icons.vue'
import IconNormal from './IconDemo/IconNormal.vue'
import Container from '@/components/Container.vue'
export default {
  components: { IconDemo, Container },
  setup() {
    return {
      IconNormal
    }
  }
}
</script>
  
  <style lang="scss" scoped>
.lu-icon-demo {
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
  