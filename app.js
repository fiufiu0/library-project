const books = document.getElementById("books");
const addBook = document.getElementById("add-btn");
const modalBackground = document.getElementById("modal-background");
const modalContent = document.getElementById("modal-content");

let booksArray = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

let book1 = new Book("The Hobbit", "J. R. R. Tolkien", 125, false);
let book2 = new Book("Harry Potter", "JK Rowling", 521, true);
let book3 = new Book("LOTR: Two Towers", "J. R. R. Tolkien", 333, true);

const openModal = (e) => {
  modalBackground.classList.remove("hidden");
  modalContent.classList.remove("hidden");
  e.preventDefault();
};

const closeModal = (e) => {
  modalBackground.classList.add('hidden');
  modalContent.classList.add('hidden');
  e.preventDefault();
}

addBook.onclick = openModal;
modalBackground.onclick = closeModal;

const createBook = (book) => {
  const booksCard = document.createElement("div");
  const title = document.createElement("p");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const read = document.createElement("p");

  booksCard.classList.add("booksCard");
  title.classList.add("booksTitle");
  author.classList.add("booksAuthor");
  pages.classList.add("booksPages");
  read.classList.add("booksRead");

  title.textContent = `${book.title}`;
  author.textContent = `${book.author}`;
  pages.textContent = `Pages: ${book.pages}`;
  read.textContent = book.read;

  booksCard.appendChild(title);
  booksCard.appendChild(author);
  booksCard.appendChild(pages);
  booksCard.appendChild(read);
  books.appendChild(booksCard);

  // console.log(books);
  // console.log(book);
};


const getInputValue = () => {
  const title = document.getElementById("title").value
  const author = document.getElementById("author").value
  const pages = document.getElementById("pages").value
  const read = document.getElementById("read").checked
  console.log(title,author,pages)
  return new Book(title, author, pages, read)
}


const saveBook = (e) => {
  const submit = document.getElementById("submit");
  console.log(e)
  submit.onclick = getInputValue;
}

saveBook();

createBook(book1);
createBook(book2);
createBook(book3);
createBook(book1);
createBook(book2);
createBook(book3);