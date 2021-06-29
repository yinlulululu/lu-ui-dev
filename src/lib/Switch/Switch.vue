<template>
  <button
    class="lu-switch"
    @click="toggle"
    :class="{ 'lu-checked': value }"
    :disabled="loading ? true : disabled"
  >
    <span></span>
    <p v-if="value" class="switch-on">on</p>
    <p v-else class="witch-off">off</p>
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


// <style lang="scss">
// $h: 22px;
// $h2: $h - 4px;
// .lu-switch {
//   height: $h;
//   width: $h * 2;
//   border: none;
//   background: grey;
//   border-radius: $h / 2;
//   position: relative;
//   display: inline-block;
//   line-height: $h;
//   vertical-align: middle;
//   background-color: #ccc;
//   &[disabled] {
//     pointer-events: none;
//   }
//   > span {
//     position: absolute;
//     top: 2px;
//     left: 2px;
//     height: $h2;
//     width: $h2;
//     background: white;
//     border-radius: $h2 / 2;
//     transition: left 250ms;
//   }
//   > p {
//     display: inline-block;
//     width: 14px;
//     height: $h;
//     font-size: 14px;
//     color: #fff;
//     margin: 0 7px 0 22px;
//     transition: margin 0.25s ease-in-out;
//   }
//   &.lu-checked {
//     background: #1890ff;
//     > span {
//       left: calc(100% - #{$h2} - 2px);
//     }
//   }
//   &:focus {
//     outline: none;
//   }
//   &:active {
//     > span {
//       width: $h2 + 4px;
//     }
//   }
//   &.lu-checked:active {
//     > span {
//       width: $h2 + 4px;
//       margin-left: -4px;
//     }
//   }
// }
// </style>
<style lang="scss">
$h: 22px;
$h2: $h - 4px;
$ting-color: #4ff3d4;
.ting-switch {
  position: relative;
  display: inline-block;
  width: $h * 2;
  height: $h;
  line-height: $h;
  vertical-align: middle;
  border: none;
  padding: 0;
  margin-bottom: 8px;
  background-color: #bfbfbf; //#1890ff
  border-radius: $h/2;
  outline: none;
  cursor: pointer;
  transition: all 0.25s ease-in-out;
  &[disabled] {
    pointer-events: none;
  }

  &:focus {
    box-shadow: 0 0 5px rgba(191, 191, 191, 0.5);
    &:hover {
      box-shadow: none;
    }
  }
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    width: $h2;
    height: $h2;
    border: none;
    border-radius: $h/2;
    background-color: #fff;
    transition: all 0.25s ease-in-out;
    > .ting-switch-loading {
      width: 12px;
      height: 12px;
      display: inline-block;
      border-radius: 8px;
      border-color: lighten($ting-color, 20%) lighten($ting-color, 10%) $ting-color transparent;
      border-style: solid;
      border-width: 2px;
      animation: ting-spin 1s infinite linear;
    }
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
  &:active {
    > span {
      width: $h + 2px;
    }
  }
  &.checked {
    background-color: #00b894;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
    > p {
      margin: 0 25px 0 7px;
    }
    &:focus {
      box-shadow: 0 0 5px rgba(24, 144, 255, 0.5);
      &:hover {
        box-shadow: none;
      }
    }

    &:active {
      > span {
        width: $h + 2px;
        margin-left: -6px;
      }
    }
  }
  @keyframes ting-spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes button-hover {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-3px);
    }
  }
}
</style>