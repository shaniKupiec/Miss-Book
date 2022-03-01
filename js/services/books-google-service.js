export const booksRequset = {
  getBooksByName,
}

const API_KEY = 'AIzaSyAzpne8m2U-5wNE-X3cov5IyqRzQkPIzlo'

function getBooksByName(search) {
  const urlBooks = `https://www.googleapis.com/books/v1/volumes?q=${search}&keyes&key=${API_KEY}`
  const prm = axios
    .get(urlBooks)
    .then((res) => {
      console.log(res)
      console.log(res.data)
      console.log(res.data.items)
      // saveToStorage(USERS_KEY, res.data)
      // return res.data
    })
    .catch((err) => {
      console.log(err, 'oops')
    })
}
