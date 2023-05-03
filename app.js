const books = document.getElementById('books');

let booksArray = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}


let book1 = new Book("Hobbit", "Tolkien", 125, false);
let book2 = new Book("Potter", "JK Rowling", 521, true);
let book3 = new Book("Hobbit 2", "Tolkien", 333, true);

// const addBookToLibrary = () => {

// }


const createBook = (book) => {
 
  const booksCard = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const read = document.createElement('p');

  booksCard.classList.add('booksCard');
  title.classList.add('booksTitle');
  author.classList.add('booksAuthor');
  pages.classList.add('booksPages');
  read.classList.add('booksRead');

  title.textContent = `${book.title}`;

  booksCard.appendChild(title);
  books.appendChild(booksCard);

  console.log(books)
  console.log(book)
}

createBook(book1);
