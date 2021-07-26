<template>
  <div class="icon-demo">
    <div class="icon-flag" v-for="(item, index) in IconData" :key="index">
      <div>
        <iconpark-icon
          :name="item.iconName"
          size="50px"
          fill="color"
          color="#000"
        ></iconpark-icon>
        <span>{{ item.iconName }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const IconData = [
      {
        iconName: 'airplay'
      },
      {
        iconName: 'accept-email'
      },
      {
        iconName: 'aiming'
      },
      {
        iconName: 'alarm'
      },
      {
        iconName: 'api'
      },
      {
        iconName: 'balance-two'
      },
      {
        iconName: 'bill'
      },
      {
        iconName: 'bluetooth'
      },
      {
        iconName: 'bookmark'
      },
      {
        iconName: 'broadcast'
      },
      {
        iconName: 'broadcast-radio'
      },
      {
        iconName: 'browser'
      },
      {
        iconName: 'bug'
      },
      {
        iconName: 'camera'
      },
      {
        iconName: 'carousel-video'
      },
      {
        iconName: 'caution'
      },
      {
        iconName: 'clear'
      },
      {
        iconName: 'click-tap'
      },
      {
        iconName: 'color-card'
      },
      {
        iconName: 'compass'
      },
      {
        iconName: 'config'
      },
      {
        iconName: 'consume'
      },
      {
        iconName: 'coupon'
      },
      {
        iconName: 'cuvette'
      },
      {
        iconName: 'delete'
      },
      {
        iconName: 'bookmark-one'
      },
      {
        iconName: 'box'
      },
      {
        iconName: 'devices'
      },
      {
        iconName: 'dislike'
      },
      {
        iconName: 'dislike-two'
      },
      {
        iconName: 'document-folder'
      },
      {
        iconName: 'drone'
      },
      {
        iconName: 'electrocardiogram'
      },
      {
        iconName: 'email-block'
      },
      {
        iconName: 'email-down'
      },
      {
        iconName: 'email-fail'
      },
      {
        iconName: 'envelope-one'
      },
      {
        iconName: 'equalizer'
      },
      {
        iconName: 'experiment'
      },
      {
        iconName: 'female'
      },
      {
        iconName: 'filter'
      },
      {
        iconName: 'fire-extinguisher'
      },
      {
        iconName: 'flashlight'
      },
      {
        iconName: 'folder'
      },
      {
        iconName: 'game-ps'
      },
      {
        iconName: 'gift'
      },
      {
        iconName: 'home'
      },
      {
        iconName: 'key'
      },
      {
        iconName: 'laptop'
      },
      {
        iconName: 'lightning'
      },
      {
        iconName: 'like'
      },
      {
        iconName: 'link'
      },
      {
        iconName: 'loading'
      },
      {
        iconName: 'loading-three'
      },
      {
        iconName: 'lock'
      },
      {
        iconName: 'male'
      },
      {
        iconName: 'mirror-one'
      },
      {
        iconName: 'mouse'
      },
      {
        iconName: 'movie'
      },
      {
        iconName: 'pause'
      },
      {
        iconName: 'pause-one'
      },
      {
        iconName: 'pic'
      },
      {
        iconName: 'pound'
      },
      {
        iconName: 'preview-close'
      },
      {
        iconName: 'preview-close-one'
      },
      {
        iconName: 'preview-open'
      },
      {
        iconName: 'protect'
      },
      {
        iconName: 'radar'
      },
      {
        iconName: 'refresh'
      },
      {
        iconName: 'report'
      },
      {
        iconName: 'setting'
      },
      {
        iconName: 'share'
      },
      {
        iconName: 'shield'
      },
      {
        iconName: 'shopping-cart-one'
      },
      {
        iconName: 'slide'
      },
      {
        iconName: 'sleep'
      },
      {
        iconName: 'success'
      },
      {
        iconName: 'tag'
      },
      {
        iconName: 'telescope'
      },
      {
        iconName: 'terminal'
      },
      {
        iconName: 'zoom-in'
      },
      {
        iconName: 'zoom-out'
      },
      {
        iconName: 'code'
      },
      {
        iconName: 'dot'
      },
      {
        iconName: 'arrow-down'
      },
      {
        iconName: 'arrow-left'
      },
      {
        iconName: 'arrow-left-down'
      },
      {
        iconName: 'arrow-left-up'
      },
      {
        iconName: 'arrow-right'
      },
      {
        iconName: 'arrow-right-down'
      },
      {
        iconName: 'arrow-right-up'
      },
      {
        iconName: 'arrow-up'
      },
      {
        iconName: 'arrow-circle-down'
      },
      {
        iconName: 'arrow-circle-left'
      },
      {
        iconName: 'arrow-circle-right'
      },
      {
        iconName: 'arrow-circle-up'
      },
      {
        iconName: 'click-to-fold'
      },
      {
        iconName: 'collapse-text-input'
      },
      {
        iconName: 'upload'
      },
      {
        iconName: 'upload-one'
      },
      {
        iconName: 'ladder'
      },
      {
        iconName: 'land-surveying'
      }
    ]
    return { IconData }
  }
}
</script>

<style lang="scss" scoped>
.icon-demo {
  display: flex;
  flex-wrap: wrap;
  padding: 16px 0;
  box-sizing: content-box;
  width: 800px;
  @media (max-width: 500px) {
    width: 100%;
    margin-left: 5px;
  }
  .icon-flag > div {
    width: 150px;
    height: 100px;
    margin-right: 10px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid rgb(46, 45, 45);
    border-radius: 10px;
    @media (max-width: 500px) {
      width: 188px;
    }
  }
  .iconpark-icon {
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  span {
    margin-top: 5px;
  }
}
</style>