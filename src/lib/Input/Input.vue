<template>
  <div class="lu-input">
    <input
      class="lu-input__inner"
      :class="{ 'is-disabled': disabled }"
      :type="type"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: 'lu-input',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    }
  },
  setup(props: any, context: any) {
    const handleInput = (e: any) => {
      context.emit('update:value', e.target.value)
    }
    return { handleInput }
  }
}
</script>

<style lang="scss" scoped>
.lu-input {
  position: relative;
  font-size: 14px;
  display: inline-block;

  .lu-input__inner {
    display: inline-block;

    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #5545fb;
    }

    &.is-disabled {
      background-color: #eee;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
</style>
