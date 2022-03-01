import longText from '../cmps/long-text.cmp.js'

export default {
  props: ["review"],
  template: `
        <section class="flex">
            <div class="img-container">
                <img class="user-img" :src="'.././imgs/user_icon_' + review.idImg + '.png'">
            </div>
            <div class="review-info">
                <div class="writer-name">{{review.name}}</div>
                <span>{{'⭐'.repeat(review.rating)}}</span>
                <span class="read-at"> {{review.readAt}}</span>
                <long-text :text="review.textarea" :length="30"></long-text>
                <button @click="deleteR">X</button>
            </div>

        </section>
    `,
  components: {
    longText,
  },
  created() {},
  data() {
    return {
      // stars: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    deleteR(){
        console.log('delete');
        this.$emit('remove-review', {...this.review.id} )
    },

  },
  computed: {
    getImgSrc(num){
        console.log(num);
        return '.././imgs/user_icon_' + num + '.png'
    }
  },
  unmounted() {},
  emits:['remove-review']
}