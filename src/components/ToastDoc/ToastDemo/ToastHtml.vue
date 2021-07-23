<demo>
    支持HTML
</demo>
    <template>
  <lu-button theme="warning" @click="middle">弹出黑色字体</lu-button>
</template>
    
<script lang="ts">
import LuButton from '@/lib/Button/Button.vue'
export default {
  components: {
    LuButton
  },
  methods: {
    middle() {
      this.$toast(`<div style="color: #1b1f23">弹出内容</div>`, {
        enableHtml: true
      })
    }
  }
}
</script>
    