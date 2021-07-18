<template>
  <label class="lu-radio" :class="{ 'is-checked': label === model }">
    <span class="lu-radio_input">
      <span class="lu-radio_inner"></span>
      <input
        class="lu-radio_original"
        type="radio"
        :value="label"
        :name="name"
        v-model="model"
      />
    </span>
    <span class="lu-radio_label">
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script lang="ts">
import { computed } from 'vue'
export default {
  name: 'Radio',
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    value: null
  },
  setup(props, context) {
    const model = computed({
      get() {
        return props.value
      },
      set(value) {
        context.emit('update:value', value)
      }
    })
    return { model }
  }
}
</script>

<style lang="scss" scoped>
.lu-radio {
  //   color: linear-gradient(to right, #5545fb, #ff009a);
  color: #fff;
  //   background: linear-gradient(to right, #5545fb, #ff009a);

  font-weight: 500;
  position: relative;
  cursor: pointer;
  display: inline-block;
  outline: none;
  margin-right: 20px;
  & .lu-radio_input {
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .lu-radio_inner {
      border: 1px solid #fff;
      border-radius: 100%;
      width: 16px;
      height: 16px;
      background-color: #000;
      // background: linear-gradient(to right, #5545fb, #ff009a);

      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #000;
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.25s ease-in;
      }
    }
    .lu-radio_original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  & .lu-radio_label {
    padding-left: 10px;
  }
  &.is-checked {
    .lu-radio_input {
      .lu-radio_inner {
        border-color: #5545fb;
        background: #5545fb;
        &:after {
          transform: translate(-50%, -50%) scale(1);
        }
      }
    }
    .lu-radio_label {
      color: #ff009a;
    }
  }
}
</style>