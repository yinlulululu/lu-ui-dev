
<template>
  <div class="lu-content-wrapper">
    <slot />
  </div>
</template>

<script>
export default {
  name:'lu-content'
}
</script>

<style lang="scss">
.lu-content-wrapper{
  flex-grow: 1;
}
</style>