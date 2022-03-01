import { bookService } from '../services/books-service.js';
// import { eventBus } from '../services/eventBus-service.js';
import bookList from '../cmps/book-list.cmp.js';
import bookFilter from '../cmps/book-filter.cmp.js';
import bookAdd from '../cmps/book-add.cmp.js';

export default {
    template: `
        <section class="main-layout">
            <book-add @add-book="reload"></book-add>
            <book-filter @filtered="setFilter"></book-filter>
            <book-list :books="booksToShow"></book-list>
        </section>
    `,
    components: {
        bookList,
        bookFilter,
        bookAdd,
    },
    data() {
        return {
            books: null,
            filterBy: null,
            selectedBook: null,
        };
    },
    created() {
        this.reload()
    },
    methods: {
        setFilter(filterBy) {
            console.log('set filter by', filterBy);
            this.filterBy = filterBy;
        },
        reload(){
            bookService.query()
            .then(books => this.books = books)
        }
    },
    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books;
            const regex = new RegExp(this.filterBy.txt, 'i');
            return this.books.filter(book => 
                regex.test(book.title) &&
                (book.listPrice.amount > this.filterBy.from) &&
                (book.listPrice.amount < this.filterBy.to) );
        }
    },
};
