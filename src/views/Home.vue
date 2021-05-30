<template>
  <div class="home">
    <Topnav />
    <div class="banner">
      <h1>LU UI</h1>
      <h2>一个潮流炫酷的UI框架</h2>
      <p class="actions">
        <a href="https://gitee.com/yinlululu/lulu-ui/tree/master">码云</a>
        <a href="https://github.com/yinlulululu/lu-ui">GitHub</a>
        <router-link to="/doc">快速开始</router-link>
      </p>
    </div>
    <section class="about-us">
      <h2 class="title1">框架介绍</h2>
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
          <p>源代码采用 TypeScript 书写</p>
        </li>
        <li>
          <svg class="icon">
            <use xlink:href="#icon-vite"></use>
          </svg>
          <h3>基于 Vite 构建</h3>
          <p>利用原生 ES 模块，速度较快</p>
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
            <a href="#">
              <img src="../assets/icon/wechat.png" />
            </a>
          </li>
          <li>
            <a href="#">
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
    <div class="footer">
      <p>LU-UI is open source and invite others to develop.</p>
      <p>Copyright (c) 2021 yinlulu</p>
    </div>
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
.home {
  background: black;
}
.banner {
  padding: 190px 0 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  // background: #1a1a1a;
  background: linear-gradient(135deg, red, blue);
  color: #fff;
  clip-path: ellipse(80% 60% at 50% 40%);

  h1 {
    text-align: center;
    font-size: 80px;
    line-height: 80px;
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
      display: inline-block;
      $h: 50px;
      height: $h;
      width: $h * 2;
      line-height: $h;
      padding: 0 8px;
      border: 2px solid;
      border-image: linear-gradient(#ff009a, #5545fb) 20;
      // border-radius: 6px;
      &:hover {
        // background: linear-gradient(to right, red, blue);
        // -webkit-background-clip: text;
        // color: transparent;
        // background-color: rgba($color: #000000, $alpha: 0.2);
        opacity: 0.5;
      }
      &:last-child {
        border: none;
        padding-top: 2px;
        background: -webkit-linear-gradient(to right, #5545fb, #ff009a);
        background: linear-gradient(to right, #5545fb, #ff009a);
      }
    }
  }
}
/* 框架介绍 */
.about-us {
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 32px;
  > .title1 {
    font-weight: 900;
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
    @media (max-width: 500px) {
      font-size: 20px;
      font-weight: 700;
    }
  }
  > ul {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    align-items: center;
    color: #ccc;
    > li {
      // width: 300px;
      margin: 20px 40px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      > svg {
        width: 120px;
        height: 120px;
        margin: 0 10px 20px 0;
      }

      > h3 {
        margin-bottom: 10px;
        font-size: 24px;
        font-weight: 700;
      }

      > p {
        font-size: 18px;
      }
    }
    @media (max-width: 500px) {
      display: block;
      margin-top: -10px;
      > li {
        > svg {
          width: 100px;
          height: 100px;
          margin: 20px 0;
        }
        > h3 {
          font-size: 18px;
        }
        > p {
          font-size: 15px;
        }
      }
    }
  }
}

/* 团队介绍 */
.team-intro {
  margin-top: 10px;
  // padding-top: px;
  padding-bottom: 42px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > .title1 {
    font-weight: 900;
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
    @media (max-width: 500px) {
      font-size: 20px;
      font-weight: 700;
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
.footer {
  width: 100%;
  // height: 80px;
  padding: 20px 40px;
  background: #1a1a1a;
  color: #777;
  text-align: center;
  font-size: 13px;
  > p {
    margin-bottom: 5px;
  }
}
</style>