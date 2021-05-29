<template>
  <div class="home">
    <Topnav />
    <div class="banner">
      <h1>LU UI</h1>
      <h2>一个潮流炫酷的UI框架</h2>
      <p class="actions">
        <a href="https://gitee.com/yinlululu/lulu-ui/tree/master">码云</a>
        <a href="https://gitee.com/yinlululu/lulu-ui/tree/master">GitHub</a>
        <router-link to="/doc">快速开始</router-link>
      </p>
    </div>
    <section class="about-us">
      <h2 class="title1">关于我们</h2>
      <ul>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-typescript"></use>
          </svg>
          <h3>基于 TypeScript</h3>
          <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-UIzhongguo"></use>
          </svg>
          <h3>炫酷简约 UI</h3>
          <p>每个组件的UI设计简约大方 简单易用</p>
        </li>
      </ul>
    </section>
    <section id="team-intro" class="team-intro section-bg">
      <h2 class="title1">团队介绍</h2>
      <div class="team-member">
        <div class="profile-image">
          <img src="../assets/images/me.jpeg" alt="" />
        </div>
        <h4 class="name">尹露</h4>
        <p class="position">软件开发工程师</p>
        <ul class="social-links">
          <li>
            <a href="http://www.baidu">
              <img src="../assets/icon/wechat.png" />
            </a>
          </li>
          <li>
            <a href="http://www.baidu">
              <img src="../assets/icon/qq.png" />
            </a>
          </li>
          <li>
            <a href="https://github.com/yinlulululu/lu-ui">
              <img src="../assets/icon/github.png" />
            </a>
          </li>
          <li>
            <a href="https://gitee.com/yinlululu/lulu-ui">
              <img src="../assets/icon/gitee-fill-round.png" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Topnav from './Topnav.vue'
export default {
  components: {
    Topnav
  }
}
</script>

<style lang="scss" scoped>
$theme: linear-gradient(to right, #5545fb, #ff009a);
.home {
  background: black;
}
.banner {
  padding: 190px 0 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #1a1a1a;
  color: #fff;
  clip-path: ellipse(80% 60% at 50% 40%);

  h1 {
    text-align: center;
    font-size: 80px;
    line-height: 52px;
    font-weight: 600;
  }

  h2 {
    text-align: center;
    margin-top: 30px;
    font-size: 25px;
    line-height: 26px;
  }
  > .actions {
    padding: 20px 0;
    font-size: 18px;
    margin-top: 30px;
    text-align: center;
    a {
      margin: 0 8px;
      background: -webkit-linear-gradient(to right, #5545fb, #ff009a);
      background: linear-gradient(to right, #5545fb, #ff009a);
      display: inline-block;
      $h: 50px;
      height: $h;
      width: $h * 2;
      line-height: $h;
      border-radius: 6px;
      padding: 0 8px;
    }
  }
}
/* 关于我们 */
.about-us {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 32px;
  > .title1 {
    font-size: 30px;
    color: #ccc;
    &::after {
      content: '';
      display: block;
      width: 80%;
      height: 4px;
      background: -webkit-linear-gradient(to right, #5545fb, #ff009a);
      background: linear-gradient(to right, #5545fb, #ff009a);

      margin-top: 14px;
      transform: translateX(10%);
    }
  }
}

/* 团队介绍 */
.team-intro {
  margin-top: 40px;
  padding-top: 62px;
  padding-bottom: 52px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > .title1 {
    font-size: 30px;
    color: #ccc;
    &::after {
      content: '';
      display: block;
      width: 80%;
      height: 4px;
      background: -webkit-linear-gradient(to right, #5545fb, #ff009a);
      background: linear-gradient(to right, #5545fb, #ff009a);

      margin-top: 14px;
      transform: translateX(10%);
    }
  }

  .team-member {
    width: 300px;
    margin-top: 40px;
    background-color: white;
    box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.2);
    text-align: center;
    padding-bottom: 28px;
    transition: 0.4s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > .name {
      margin-top: 18px;
      font-size: 18px;
      font-weight: 500;
      color: #494949;
    }
    > .position {
      color: #ccc;
      margin-top: 20px;
      margin-bottom: 18px;
    }
    > .social-links {
      width: 100%;
      max-width: 200px;
      display: flex;
      justify-content: space-between;
      padding: 0 42px;
      > li {
        list-style: none;
        > a {
          color: var(--text-color-dark);
          text-decoration: none;
          > img {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
    &:hover {
      transform: translateY(-20px) scale(1.05);
      box-shadow: 0px 0px 36px rgba(131, 16, 6, 0.6);
    }
    @media (max-width: 500px) {
      width: 70%;
    }
  }
}

.profile-image {
  overflow: hidden;
  > img {
    width: 100%;
    height: 264px;
    object-fit: cover;
    object-position: top center;
  }
}
</style>