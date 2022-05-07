import { utilService } from '..//services/util-service.js'

export default {
  props: ['book'],
  template: `
        <img :src="book.thumbnail" alt="">
        <h3 class="book-title">{{book.title}}</h3>
        <span class="book-price">{{formattedPrice}}</span>
        <span>by {{getAuthors}}</span>
        <!-- rating stars -->
        <!-- is on sale -->
    `,
  components: {},
  created() {},
  data() {
    return {
    }
  },
  methods: {},
  computed: {
    formattedPrice() {
      var listPrice = this.book.listPrice
      return utilService.formattedPrice(this.book.language, listPrice.currencyCode, listPrice.amount)
    },
    getAuthors() {
      return this.book.authors.join(', ')
    },
  },
  unmounted() {},
}