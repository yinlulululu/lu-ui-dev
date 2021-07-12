<template>
  <button
    class="lu-button"
    :class="classes"
    :disabled="loading ? true : disabled"
  >
    <span v-if="loading" class="lu-loadingIndicator"></span>
    <slot />
  </button>
</template>

<script lang="ts">
import { computed } from '@vue/runtime-core'
export default {
  name: 'Button',
  props: {
    theme: {
      type: String,
      default: 'default'
    },
    size: {
      type: String,
      default: 'normal'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const { theme, size, round } = props
    const classes = computed(() => {
      return {
        [`lu-theme-${theme}`]: theme,
        [`lu-size-${size}`]: size,
        // [`lu-level-${level}`]: level,
        [`lu-${round ? 'round' : 'normal'}`]: round
      }
    })
    return { classes }
  }
}
</script>

<style lang="scss">
// 默认高度
$h: 32px;
// 边框默认颜色
$border-color: #333;
// 默认字体颜色
$color: #333;
// 颜色参数
$lu-color: #ff009a;
// 角度参数
$radius: 4px;
$roundRadius: $h/2;
$grey: #909399;

.lu-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: background 0.25s;
  margin: 0 10px 8px 0;

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }
  &.lu-round {
    border-radius: $roundRadius;
  }

  &.lu-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }
  &.lu-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }

  &.lu-theme-default {
    color: #fff;
    border-color: #57606f;
    background-color: #747d8c;
    &:hover,
    &:focus {
      color: #fff;
      background: #000;
      border: 1px solid #222831;
    }
  }
  &.lu-theme-primary {
    background: linear-gradient(to right, #5545fb, #ff009a);
    // border: 1px solid #000;
    color: #fff;
    &:hover,
    &:focus {
      // color: #ff009a;
      background: linear-gradient(to right, #5545fb, #ff009a);
      -webkit-background-clip: text;
      color: transparent;
      // background: #fff;
    }
  }
  &.lu-theme-success {
    background: #40a9ff;
    border: 1px solid #40a9ff;
    color: #fff;
    &:hover,
    &:focus {
      color: #40a9ff;
      border-color: #40a9ff;
      background-color: #000;
    }
  }
  &.lu-theme-warning {
    background: #ffae00;
    border: 1px solid #ffae00;
    color: #4a4444;
    &:hover,
    &:focus {
      color: #ffae00;
      border-color: #ffae00;
      background: #000;
    }
  }
  &.lu-theme-error {
    background: #e11617;
    border: 1px solid #e11617;
    color: #eeeeee;
    &:hover,
    &:focus {
      color: #e11617;
      border-color: #e11617;
      background-color: #000;
    }
  }

  &[disabled] {
    cursor: not-allowed;
    color: #fff;
    background-color: #ddd;
    border: none;
    &:hover,
    &:focus {
      cursor: not-allowed;
      color: #fff;
      background-color: #ddd;
      border: none;
    }
  }

  > .lu-loadingIndicator {
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: lighten($lu-color, 20%) lighten($lu-color, 10%) $lu-color
      transparent;
    border-style: solid;
    border-width: 2px;
    animation: lu-spin 1s infinite linear;
    &:hover,
    &:focus {
      cursor: not-allowed;
      color: #fff;
      background: linear-gradient(to right, #5545fb, #ff009a);
      border: none;
    }
  }
  @keyframes lu-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>