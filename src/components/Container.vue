<template>
  <div class="container">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <p>{{ description }}</p>
    <div class="description"><slot /></div>
    <!--展示代码的地方-->
    <div class="fold-code" @mouseenter="enter" @mouseleave="leave">
      <div class="demo-wrapper">
        <component :is="component"></component>
      </div>
      <div class="per-wrapper">
        <div class="per-content" :style="{ height: height + 'px' }">
          <div class="per-desc"></div>
          <pre class="language-html" v-html="html"></pre>
          <!-- ref="codePer" -->
        </div>
        <div class="demo-block-control" @click="toggle">
          <svg class="down" aria-hidden="true">
            <use
              :xlink:href="showCode === false ? '#icon-down' : '#icon-upward'"
            ></use>
          </svg>
          <transition name="fade">
            <span class="show-world" v-show="show">{{
              showCode === true ? '隐藏代码' : '显示代码'
            }}</span>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ref } from 'vue'
import 'prismjs'
import 'prismjs/themes/prism-coy.css'
const Prism = (window as any).Prism

export default {
  name: 'Container',
  props: {
    title: {
      type: String,
      default: '组件功能标题'
    },
    description: {
      type: String,
      default: ''
    },
    component: {
      type: Object
    }
  },
  setup(props: any) {
    console.log('props', props)
    console.log(Prism)
    const show = ref(false)
    const height = ref(0)
    const computedHeight = ref(300)

    const toggle = () => {
      if (height.value === 0) {
        height.value = computedHeight.value
      } else {
        height.value = 0
      }
    }
    const enter = () => {
      show.value = true
    }
    const leave = () => {
      show.value = false
    }
    const showCode = computed(() => {
      return height.value !== 0
    })
    // const html = computed(() => {
    //   return Prism.highlight(
    //     props.component._sourceCode,
    //     Prism.languages.html,
    //     'html'
    //   )
    // })
    const html = computed(() => {
      return Prism.highlight(
        props.component.__sourceCode,
        Prism.languages.html,
        'html'
      )
    })
    return {
      showCode,
      html,
      show,
      leave,
      enter,
      toggle,
      height,
      computedHeight,
      Prism
    }
  },
  mounted() {
    // this.$nextTick(() => {
    //   const codePer: any = this.$refs.codePer
    //   let { height } = codePer.getBoundingClientRect()
    //   this.computedHeight = height
    // })
  }
}
</script>

<style lang="scss" scoped>
.container {
  font-size: 14px;
  color: #fff;
  h2 {
    font-weight: 400;
    color: #fff;
    font-size: 22px;
    margin: 55px 0 20px;
  }
  p {
    font-size: 14px;
    color: #fff;
    line-height: 1.5em;
    margin: 14px 0;
  }
  .description {
    font-size: 14px;
    color: #fff;
    line-height: 1.5em;
    margin: 14px 0;
  }
  pre {
    margin: 0;
    background-color: #fafcfd;
    font-size: 15px;
    padding: 18px 24px;
  }

  .demo-wrapper {
    padding: 24px;
  }

  .fold-code {
    //height: 0;
    overflow: hidden;
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: 0.2s;
    max-width: 800px;

    &:hover {
      box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
        0 2px 4px 0 rgba(232, 237, 250, 0.5);

      .down {
        transform: translateX(-35px);
      }
    }
  }

  .per-wrapper {
    .per-content {
      background-color: #fafafa;
      border-top: 1px solid #eaeefb;
      overflow-y: hidden;
      overflow-x: auto;
      height: 0;
      transition: height 0.25s;
    }

    .demo-block-control {
      border-top: 1px solid #eaeefb;
      height: 44px;
      box-sizing: border-box;
      background-color: #000;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      text-align: center;
      margin-top: -1px;
      color: #d3dce6;
      cursor: pointer;
      position: relative;
      left: 0;

      &:hover {
        color: #ff009a;
        background-color: #f1ffff;
        // background: linear-gradient(135deg, red, blue);
      }

      .down {
        width: 16px;
        height: 44px;
        fill: currentcolor;
        transition: all 0.3s;
      }

      .show-world {
        position: absolute;
        font-size: 14px;
        line-height: 44px;
        transition: all 0.3s;
        transform: translateX(-30px);

        &.fade-enter {
          opacity: 0;
          transform: translateX(10px);
        }

        &.fade-enter-to {
          opacity: 1;
          transform: translateX(-30px);
        }

        &.fade-leave {
          opacity: 1;
          transform: translateX(-30px);
        }

        &.fade-leave-to {
          opacity: 0;
          transform: translateX(0px);
        }
      }
    }
  }
}
</style>