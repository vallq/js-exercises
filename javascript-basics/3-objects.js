var assertEquals = require("./assert-helper");

var books = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    isAvailable: true
  },
  {
    author: "JRR Tolkkien",
    title: "Lord of the Rings",
    isAvailable: true
  },
  {
    author: "JK Rowling",
    title: "Harry Potter",
    isAvailable: false
  }
];

/* 1. Define a function listTitles(booksArray) that takes in an array of book objects
       and returns an array of titles (strings) */
function listTitles(booksArray) {
  let titles = booksArray.map(book => book.title);
  return titles;
}

//suggested solution
//return booksArray.map(({ title }) => title);

// Assertions (do not change)
assertEquals(listTitles(books), ['The Road Ahead', 'Lord of the Rings', 'Harry Potter'])

/* 2. Define a function listAuthors(booksArray) that takes in an array of book objects
       and returns an array of authors (strings) */

function listAuthors(booksArray) {
  let authors = booksArray.map(book => book.author);
  return authors;
}
//suggested solution
//return booksArray.map(({ author }) => author);

// Assertions (do not change)
assertEquals(listAuthors(books), ['Bill Gates', 'JRR Tolkkien', 'JK Rowling'])

/* 3. Define a more general function listValues(booksArray, key) that takes in an array
       of book objects and returns an array of the values from the property specified by the key (strings) */

function listValues(booksArray, key) {
  let values = booksArray.map(book => book[key]);
  return values;
}

// Assertions (do not change)
assertEquals(listValues(books, 'author'), ['Bill Gates', 'JRR Tolkkien', 'JK Rowling'])
assertEquals(listValues(books, 'title'), ['The Road Ahead', 'Lord of the Rings', 'Harry Potter'])

// 4. Define a function getAvailableBooks(booksArray) that returns a list of available books
function getAvailableBooks(booksArray) {
  const availableBooks = booksArray.filter(({ isAvailable }) => isAvailable)
                                   .map(({ title }) => title);
  return availableBooks;

}

// Assertions (do not change)
assertEquals(getAvailableBooks(books), ['The Road Ahead', 'Lord of the Rings'])
