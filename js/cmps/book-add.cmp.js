import { bookService } from '../services/books-service.js'
import { eventBus } from '../services/eventBus-service.js'

export default {
  // props: [""],
  template: `
        <section>
          <button v-if="!showModal" @click="showModal = !showModal">Add New Book</button>
          <section v-else class="add-book-modal-container">
            <div class="add-book-modal flex column justify-center align-center">
              <div class="search-google-nav">
                <input type="text" @keyup.enter="onSearch" v-model="search" placeholder="Search for new book">
                <button @click="onSearch">🔍</button>
              </div>
              <ul class="clean-list book-options">
                <li v-for="book in booksList" key="book.id" class="book-option" @click="saveBook(book)">
                  {{book.volumeInfo.title}}
                </li>
              </ul>
            </div>
          </section>
        </section>
    `,
  components: {},
  created() {},
  data() {
    return {
      search: null,
      booksList: [],
      showModal: false,
      // chosenBook: null
    }
  },
  mounted() {},
  methods: {
    onSearch() {
      console.log('this is your search:', this.search)
      bookService.getBooksByName(this.search).then((res) => (this.booksList = res))
    },
    saveBook(newBook) {
      bookService
        .addGoogleBook(newBook)
        .then(() => {
          eventBus.showSuccessMsg('book added successfuly')
          this.showModal = false
          this.$emit('add-book')
        })
        .catch((error) => {
          console.log(error)
          eventBus.showErrorMsg('Error - please try again later')
          this.showModal = false
        })
    },
  },
  computed: {},
  unmounted() {},
  // emits: [""],
}
