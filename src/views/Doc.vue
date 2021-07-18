<template>
  <div class="layout">
    <Topnav class="nav" :visbibleMenuAside="true" />
    <div class="content">
      <aside class="aside-menu" :class="{ visible: asideVisible }">
        <h2>开发指南</h2>
        <ol>
          <li>
            <router-link to="/doc/introduce">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/fix">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/use">使用</router-link>
          </li>
        </ol>
        <h2>基础组件</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 开关</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 按钮</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 对话框</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 导航切换</router-link>
          </li>
          <li>
            <router-link to="/doc/layout">Layout 布局</router-link>
          </li>
          <li>
            <router-link to="/doc/radio">Radio 单选框</router-link>
          </li>
          <li>
            <router-link to="/doc/table">Table 表格</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from './Topnav.vue'
import { inject, Ref } from 'vue'

export default {
  components: {
    Topnav
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible')
    return { asideVisible }
  }
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    display: flex;
    flex-grow: 1;
    padding-top: 50px;
    padding-left: 150px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
    .aside-menu {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      margin-top: 70px;
      height: auto;
      width: 270px;
      overflow-x: hidden;
      // overflow-y: scroll;
      // border: 1px solid;
      z-index: 10;
      // box-shadow: 5px 0 5px rgb(51 51 51 / 10%);
      box-shadow: 5px 0 5px rgba($color: #1a1a1a, $alpha: 0.6);
      padding-bottom: 32px;
      background: #1a1a1a;
      color: #aaa;
      // &:hover {
      //   border: 1px solid;
      //   border-image: linear-gradient(#ff009a, #5545fb) 20;
      // }
      > h2 {
        margin-top: 6px;
        line-height: 22px;
        padding: 10px 40px;
        font-size: 15px;
        font-weight: 700;
        &::after {
          content: '';
          display: block;
          width: 100%;
          height: 1px;
          background: -webkit-linear-gradient(to right, #5545fb, #ff009a);
          background: linear-gradient(to right, #5545fb, #ff009a);
          margin-top: 10px;
        }
      }

      > ol {
        > li {
          position: relative;
          width: 100%;
          font-size: 14px;

          > a {
            display: block;
            padding: 12px 40px;
            cursor: pointer;
            color: #fff;

            &:hover {
              background: -webkit-linear-gradient(to right, #5545fb, #ff009a);
              background: linear-gradient(to right, #5545fb, #ff009a);
              border-bottom: none;
            }
          }

          .router-link-active {
            // background: -webkit-linear-gradient(to right, #5545fb, #ff009a);
            // background: linear-gradient(to right, #5545fb, #ff009a);
            border-right: none;

            &:after {
              content: '';
              position: absolute;
              top: 0;
              right: 0;
              height: 85%;
              border-right: 1px solid;
              border-image: linear-gradient(#ff009a, #5545fb) 10;
            }
          }
        }
      }
    }
  }
}

// aside {
//   background: lightblue;
//   width: 150px;
//   padding: 16px;
//   position: fixed;
//   top: 0;
//   left: 0;
//   padding-top: 70px;
//   height: 100%;
//   > h2 {
//     margin-bottom: 4px;
//   }
//   > ol {
//     > li {
//       padding: 4px 0;
//     }
//   }
// }
main {
  overflow: auto;
  flex: 1;
  padding: 60px 80px 60px 180px;
  background: #000;
  color: #fff;
}
@media (max-width: 500px) {
  .layout {
    > .content {
      padding-left: 0;

      .aside-menu {
        width: 180px;
        transition: all 0.25s ease;
        transform: translateX(-200px);

        &.visible {
          transform: translateX(0px);
        }
      }

      main {
        overflow: auto;
        padding: 20px 8px;
        margin: 0 auto;
      }
    }
  }
}
</style>