<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <div>
        <img src="../assets/logo.png" alt="" />
      </div>
    </router-link>

    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
      <li>
        <a href="https://blog.csdn.net/weixin_46734347?spm=1000.2115.3001.5343"
          >博客</a
        >
      </li>
    </ul>
    <span class="toggleAside" @click="toggleAside">
      <svg class="icon">
        <use xlink:href="#icon-aside"></use>
      </svg>
    </span>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from 'vue'
export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    // console.log('topNav中的asideVisible.value为', asideVisible.value)

    const toggleAside = () => {
      asideVisible.value = !asideVisible.value
    }
    return {
      toggleAside
    }
  }
}
</script>

<style lang="scss" scoped >
.topnav {
  background: #212121;
  color: #a8a9ab;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    cursor: pointer;
    > div {
      border-radius: 50%;
      width: 38px;
      height: 38px;
      overflow: hidden;
      img {
        width: 38px;
        height: 38px;
      }
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 24px;
    height: 24px;
    // background: red;
    svg {
      width: 24px;
      height: 24px;
    }
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>