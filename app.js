const books = document.getElementById("books");
const addBook = document.getElementById("add-btn");
const modalBackground = document.getElementById("modal-background");
const modalContent = document.getElementById("modal-content");
const submit = document.getElementById("submit");

let booksArray = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

const openModal = () => {
  modalBackground.classList.remove("hidden");
  modalContent.classList.remove("hidden");
};

const closeModal = () => {
  modalBackground.classList.add('hidden');
  modalContent.classList.add('hidden');
  resetForm();
}

const resetForm = () => {
  title.value = '';
  author.value = '';
  pages.value = '';
  read.checked = false;
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

};

const getInputValue = (e) => {
  const title = document.getElementById("title").value
  const author = document.getElementById("author").value
  const pages = document.getElementById("pages").value
  const read = document.getElementById("read").checked

  const newBook = new Book(title, author, pages, read);
  booksArray.push(newBook);
  e.preventDefault();
  closeModal();
  resetForm();
  showBooks();
}

const showBooks = () => {
  books.innerHTML = "";
  for (const book of booksArray) {
    createBook(book)
  }
}


submit.onclick = getInputValue;
