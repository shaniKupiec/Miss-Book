import { bookService } from '../services/books-service.js';

export default {
  // props: [""],
  template: `
        <section>
          <button v-if="!showModal" @click="showModal = !showModal">Add New Book</button>
          <section v-else class="add-book-modal">
            <input type="text" @keyup.enter="onSearch" v-model="search" placeholder="Search for new book" list="search-list">
            <ul id="search-list">
              <li v-for="book in booksList" key="book.id" @click="saveBook(book.id)">
              {{book.volumeInfo.title}}
              </li>
            </ul>
            <!-- <datalist id="search-list">
              <option v-for="book in booksList" key="book.id" @click="saveBook" :value="book.volumeInfo.title">
            </datalist> -->
            <button @click="saveBook">add</button>
                 <!-- <router-link v-for="book in books" key="book.id" :to="/book/+book.id"> -->
             <!-- :value="chosenBook" -->
          </section>
        </section>
    `,
  components: {},
  created() {},
  data() {
    return {
        search: null,
        booksList: [],
        showModal: false
        // chosenBook: null
    }
  },
  mounted() {},
  methods: {
    onSearch(){
      console.log('hi', this.search);
      bookService.getBooksByName(this.search)
      .then(res => this.booksList = res)
    },
    saveBook(){
      console.log('save it!', this.search);
      // bookService.addGoogleBook(book)
      // .then(() => eventBus.showSuccessMsg('book added successfuly'))
      // .catch((error) => {
      //   console.log(error)
      //   eventBus.showErrorMsg('Error - please try again later')
      // })
    }
  },
  computed: {},
  unmounted() {},
  // emits: [""],
}