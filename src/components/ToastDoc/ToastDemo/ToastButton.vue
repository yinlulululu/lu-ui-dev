<demo>
    自定义关闭按钮
    </demo>
    <template>
  <lu-button theme="error" @click="middle">中间弹出</lu-button>
</template>
    
<script lang="ts">
import LuButton from '../../../lib/Button/Button.vue'
export default {
  components: {
    LuButton
  },
  methods: {
    middle() {
      this.$toast('弹出提示内容', {
        position: 'middle',
        closeButton: {
          text: '确定',
          callback: () => {
            alert('回调的输出')
          }
        }
      })
    }
  }
}
</script>
    
    