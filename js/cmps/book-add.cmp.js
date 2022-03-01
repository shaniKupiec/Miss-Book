import { booksRequset } from '../services/books-google-service.js';

export default {
  // props: [""],
  template: `
        <section>
            <div>
                <input type="text" v-model="search" placeholder="Search for new book">
                <!-- <ul>
                    <li v-for="user in usersForDisplay">
                    </li>
                </ul> -->
            </div>
        </section>
    `,
  components: {},
  created() {},
  data() {
    return {
        search: null
    }
  },
  mounted() {},
  methods: {},
  computed: {},
  unmounted() {},
  // emits: [""],
}