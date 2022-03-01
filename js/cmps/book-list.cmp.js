import bookPreview from '../cmps/book-preview.cmp.js'
// import { eventBus } from '../services/eventBus-service.js'

export default {
  props: ['books'],
  template: `
        <section>
            <ul class="books-area flex clean-list justify-center">
                <router-link v-for="book in books" key="book.id" :to="/book/+book.id">
                  <li class="book-card flex column align-center"> 
                    <book-preview :book="book"/>
                  </li>
                </router-link>
            </ul>
        </section>
    `,
  components: {
    bookPreview,
  },
  created() {},
  data() {
    return {}
  },
  methods: {
  },
  computed: {},
  unmounted() {},
}
