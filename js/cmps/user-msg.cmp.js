import { eventBus } from '../services/eventBus-service.js'

export default {
  template: `
        <section v-if="msg" class="user-msg" :class="msg.type">
            <div :class="{ shake: disabled }">
                <span>{{msg.txt}}</span>
            </div>
        </section>
    `,
  data() {
    return {
      msg: null,
      disabled: false
    }
  },
  created() {
    this.unsubscribe = eventBus.on('show-msg', this.showMsg)
  },
  methods: {
    showMsg(msg) {
      this.msg = msg
      this.disabled = true
      setTimeout(() => {
        this.msg = null
        this.disabled = true
      }, 3000)
    },
  },
  unmounted() {
    this.unsubscribe()
  },
}
