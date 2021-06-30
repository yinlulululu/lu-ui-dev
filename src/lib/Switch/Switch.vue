<template>
  <button
    class="lu-switch"
    @click="toggle"
    :class="{ 'lu-checked': value }"
    :disabled="loading ? true : disabled"
  >
    <span></span>
    <!-- <p v-if="value" class="switch-on">on</p>
    <p v-else class="witch-off">off</p> -->
  </button>
</template>

<script lang="ts">
export default {
  props: {
    value: Boolean,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value)
    }
    return { toggle }
  }
}
</script>


<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.lu-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: grey;
  border-radius: $h / 2;
  position: relative;
  display: inline-block;
  line-height: $h;
  vertical-align: middle;
  background-color: #ccc;
  &[disabled] {
    pointer-events: none;
  }
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: left 250ms;
  }
  > p {
    display: inline-block;
    width: 14px;
    height: $h;
    font-size: 14px;
    color: #fff;
    margin: 0 7px 0 22px;
    transition: margin 0.25s ease-in-out;
  }
  &.lu-checked {
    // background: #1890ff;
    background: linear-gradient(to right, #5545fb, #ff009a);

    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.lu-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>