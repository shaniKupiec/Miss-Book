export const utilService = {
  saveToStorage,
  loadFromStorage,
  makeId,
  formatedPrice,
  makeId2,
}

function formatedPrice(lang , currency, price) {
  return new Intl.NumberFormat(lang, { style: 'currency', currency }).format(price)
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value) || null)
}

function loadFromStorage(key) {
  let data = localStorage.getItem(key)
  return data ? JSON.parse(data) : undefined
}

function makeId(length = 8) {
  var txt = ''
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}

function makeId2(length = 1) {
  var txt = ''
  var possible = '12345'
  for (var i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length))
  }
  return txt
}