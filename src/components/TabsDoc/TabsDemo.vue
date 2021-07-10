<template>
  <div v-if="visible">
    <teleport to="body">
      <div class="lu-dialog-overlay" @click="onClickOverlay"></div>
      <div class="lu-dialog-wrapper">
        <div class="lu-dialog">
          <span class="lu-dialog-close" @click="close"></span>
          <header v-if="showTitle">
            <h1>{{ title }}</h1>
          </header>
          <main>
            <slot />
            <slot name="content" />
          </main>
          <footer v-if="bottomButton">
            <Button theme="success" @click="ok">确定</Button>
            <Button theme="warning" @click="cancel">取消</Button>
          </footer>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script lang="ts">
import Button from '../../lib/Button/Button.vue'
import { computed } from '@vue/runtime-core'
export default {
  props: {
    visible: {
      type: Boolean,
      default: true
    },
    bottomButton: {
      type: Boolean,
      default: true
    },
    closeOnclickOverlay: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: '标题'
    },
    ok: Function,
    cancel: Function
  },
  components: {
    Button
  },
  setup(props, context) {
    const close = () => {
      context.emit('update:visible', false)
    }
    const onClickOverlay = () => {
      if (props.closeOnclickOverlay) {
        close()
      }
    }
    const showTitle = computed(() => {
      return props.title !== ''
    })
    const ok = () => {
      if (props.ok && props.ok() !== false) {
        // 等价于props.ok?.() !==false
        close()
      }
    }
    const cancel = () => {
      props.cancel && props.cancel()
      // 等价与props.cancel?.()
      close()
    }
    return { close, onClickOverlay, showTitle, ok, cancel }
  }
}
</script>

<style lang="scss">
$radius: 15px;
$border-color: #d9d9d9;
.lu-dialog {
  position: relative;
  background: #000;
  border-radius: $radius;
  box-shadow: 0 0 3px fade-out(#333, 0.5);
  min-width: 22em;
  max-width: 90%;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade-out($color: rgb(49, 47, 47), $amount: 0.3);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }

  > header {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    padding: 12px 16px;
    // border-bottom: 1px solid $border-color;
    > h1 {
      font-size: 1em;
    }
  }
  > main {
    min-height: 8em;
    padding: 32px 16px 16px 20px;
  }
  > footer {
    // border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: absolute;
    top: 10px;
    right: 10px;
    display: inline-block;
    width: 32px;
    height: 32px;
    border-radius: 32px;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      width: 50%;
      top: 50%;
      left: 50%;
      background: white;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    @media (min-width: 500px) {
      &:hover {
        color: #fff;
        background: linear-gradient(to right, #5545fb, #ff009a);
        &::before,
        &::after {
          background-color: #fff;
        }
      }
    }
  }
}
</style>