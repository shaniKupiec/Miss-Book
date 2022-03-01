import { bookService } from '../services/books-service.js'
import { utilService } from '../services/util-service.js'
import { eventBus } from '../services/eventBus-service.js'
import longText from '../cmps/long-text.cmp.js'
import addReview from '../cmps/add-review.cmp.js'
import bookReview from '../cmps/book-review.cmp.js'

export default {
  template: `
        <section v-if="book" class="main-layout book-dets flex justify-center align-center">
          <div class="img-container flex justify-center align-center">
            <img class="book-img" :src="book.thumbnail">
          </div>
          <div class="book-info flex column">
            <h1 class="book-title">{{book.title}}</h1>
            <h3 class="book-subtitle">{{book.subtitle}}</h3>
            <h6>by {{getAuthors}}</h6>
            <div :class="getPriceColor">{{formatedPrice}}</div>
            <ul class="clean-list unique-list">
              <li v-for="data in uniqueData">
                <img class="icons" src="imgs/v-icon.png" alt="">
                {{data}}</li>
            </ul>
            <long-text :text="book.description" :length="100"></long-text>
            <span>REVIEWS</span>
            <ul class="clean-list">
              <li v-for="review in getReviews">
                <book-review :review="review" @remove-review="remove"></book-review>
              </li>
            </ul>
            <router-link :to="'/book/'+book.prevBookId">Prev Book</router-link> | 
            <router-link :to="'/book/'+book.nextBookId">Next Book</router-link>
            <button @click="toggleEditReview">Add Review</button>
            <add-review v-if="editReview" @new-review="addReview" @close="toggleEditReview"></add-review>
            <button @click="close" @keyup.esc="close">close</button>
            </div>

        </section>
    `,
  components: {
    longText,
    addReview,
    bookReview,
  },
  created() {
    const id = this.$route.params.bookId
    bookService.get(id).then((book) => {
      this.book = book

      this.uniqueData = []
      if (this.book.listPrice.isOnSale) this.uniqueData.push('ON SALE!')
      this.setPageCountData()
      this.setPublishedDateData()
    })
  },
  data() {
    return {
      uniqueData: [],
      book: null,
      editReview: false,
    }
  },
  methods: {
    remove(reviewId) {
      console.log('removed', reviewId)

      bookService
        .removeReview(this.book.id, reviewId)
        .then((book) => {
          this.book = book
          eventBus.showSuccessMsg('review removed successfuly')
        })
        .catch((error) => {
          console.log(error)
          eventBus.showErrorMsg('Error - please try again later')
        })
    },
    addReview(newReview) {
      bookService
        .addReview(this.book.id, newReview)
        .then((book) => {
          console.log('recived', newReview)
          this.book = book
          eventBus.showSuccessMsg('review added successfuly')
          this.toggleEditReview()
        })
        .catch((error) => {
          console.log(error)
          eventBus.showErrorMsg('Error - please try again later')
        })
    },
    toggleEditReview() {
      this.editReview = !this.editReview
    },
    close() {
      this.$router.push('/book')
    },
    setPageCountData() {
      var pageCount = this.book.pageCount
      if (pageCount > 500) this.uniqueData.push('Long reading')
      else if (pageCount > 200) this.uniqueData.push('Decent Reading')
      else if (pageCount < 100) this.uniqueData.push('Light Reading')
    },
    setPublishedDateData() {
      var publishedYear = this.book.publishedDate
      var currYear = new Date(Date.now()).getFullYear()
      var yearDiff = +currYear - publishedYear
      if (yearDiff > 10) this.uniqueData.push('Veteran Book')
      else if (yearDiff < 1) this.uniqueData.push('New Book')
    },
  },
  computed: {
    getAuthors() {
      return this.book.authors.join(', ')
    },
    getPriceColor() {
      var price = this.book.listPrice.amount
      if (price > 150) return 'red'
      else if (price < 20) return 'green'
      return ''
    },
    formatedPrice() {
      var listPrice = this.book.listPrice
      return utilService.formatedPrice(this.book.language, listPrice.currencyCode, listPrice.amount)
    },
    getReviews() {
      return this.book.reviews
    },
    // carId() {
    //     return this.$route.params.carId
    // }
  },
  unmounted() {},
}
