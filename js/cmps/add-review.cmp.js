import { utilService } from '../services/util-service.js'

export default {
  template: `
        <section class="review-modal flex column justify-center align-center">
            <form v-on:submit.prevent="submit">
                <input type="text" v-model="review.name" ref="nameInput">
                <input type="number" min="1" max="5" v-model="review.rating">
                <input type="date" v-model="review.readAt" required>
                <textarea name="" id="" cols="30" rows="10" v-model="review.textarea"></textarea>
                <button>save</button>
            </form>
            <button @click="close">cancel</button>
        </section>
    `,
  components: {},
  created() {
      this.review.id = utilService.makeId()
      this.review.idImg = utilService.makeId2()
  },
  data() {
    return {
        review: {
            id: null,
            idImg: null,
            name: 'Books Reader',
            rating: 1,
            readAt: new Date().toISOString().slice(0, 10),
            textarea: '',
        }
    }
  },
  mounted() {
    this.$refs.nameInput.focus()
  },
  methods: {
    submit(){
        // console.log(this.review, 'sent');
        this.$emit('new-review', {...this.review})
    },
    close(){
      this.$emit('close')
    }
  },
  computed: {
  },
  unmounted() {},
  emits:['new-review', 'close']
}