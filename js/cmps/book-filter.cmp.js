export default {
  template: `
        <section class="flex justify-center">
            <div class="search-nav">
                <input ref="nameInput" @input="setFilter" type="text" v-model="filterBy.txt" placeholder="Search by name">
                <span>
                    min-price:
                    <input type="range" @click="setFilter" v-model="filterBy.from" min="20" max="100" oninput="this.nextElementSibling.value = this.value">
                    <output>20</output>
                </span>
                <span>
                    max-price:
                    <input type="range" @click="setFilter" v-model="filterBy.to" min="50" max="200" oninput="this.nextElementSibling.value = this.value">
                    <output>180</output>
                </span>
            </div>
        </section>
    `,
  data() {
    return {
      filterBy: {
        txt: '',
        from: 20,
        to: 180,
      },
    }
  },
  mounted() {
    this.$refs.nameInput.focus()
  },
  methods: {
    setFilter() {
      //   console.log(this.filterBy)
      this.$emit('filtered', {...this.filterBy})
    },
  },
}
