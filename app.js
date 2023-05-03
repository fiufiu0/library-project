const books = document.querySelector('#books');


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


const createBook = () => {
 
  const booksCard = document.createElement('div');
  const title = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const read = document.createElement('p');

}