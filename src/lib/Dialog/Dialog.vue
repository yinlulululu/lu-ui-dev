<template>
  <div v-if="visible">
    <div class="lu-dialog-overlay" @click="onClickOverlay"></div>
    <div class="lu-dialog-wrapper">
      <div class="lu-dialog">
        <span class="lu-dialog-close" @click="close"></span>
        <header v-if="showTitle">
          <h1></h1>
        </header>
        <main>
          <slot />
          <slot name="content" />
        </main>
        <footer v-if="bottomButton">
          <Button theme="primary" @click="ok">确定</Button>
          <Button @click="cancel">取消</Button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import Button from '../Button/Button.vue'
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    bottomButton: {
      type: Boolean,
      default: false
    },
    closeOnclickOverlay: {
      type: Boolean,
      defaultL: true
    },
    title: {
      type: String,
      default: ''
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
      props.cancel && props.cancel()
      close()
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

<style lang="scss" scoped>
$radius: 4px;
$border-color: #d9d9d9;
.lu-dialog {
  position: relative;
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade-out(#333, 0.5);
  min-width: 18em;
  max-width: 90%;

  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade-out($color: #ddd, $amount: 0.3);
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    > h1 {
      font-size: 1em;
    }
  }
  > main {
    min-height: 8em;
    padding: 32px 16px 16px 20px;
  }
  > footer {
    border-top: 1px solid $border-color;
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
      background: black;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
    @media (min-width: 500px) {
      &:hover {
        background-color: #f57272;
        &::before,
        &::after {
          background-color: #fff;
        }
      }
    }
  }
}
</style>