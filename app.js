const books = document.getElementById("books");
const addBook = document.getElementById("add-btn");
const modalBackground = document.getElementById("modal-background");
const modalContent = document.getElementById("modal-content");
const submit = document.getElementById("submit");

let booksArray = [];

// function Book(title, author, pages, read) {
//   this.title = title;
//   this.author = author;
//   this.pages = pages;
//   this.read = read;
// }

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

const openModal = () => {
  modalBackground.classList.remove("hidden");
  modalContent.classList.remove("hidden");
};

const closeModal = () => {
  modalBackground.classList.add("hidden");
  modalContent.classList.add("hidden");
  resetForm();
};

const resetForm = () => {
  title.value = "";
  author.value = "";
  pages.value = "";
  readCheckbox.checked = false;
};

addBook.onclick = openModal;
modalBackground.onclick = closeModal;

const createBook = (book) => {
  const booksCard = document.createElement("div");
  const title = document.createElement("p");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const readBtn = document.createElement("button");
  const removeBtn = document.createElement("button");

  booksCard.classList.add("booksCard");
  title.classList.add("booksTitle");
  author.classList.add("booksAuthor");
  pages.classList.add("booksPages");
  readBtn.classList.add("booksRead");
  removeBtn.classList.add("booksRemove");

  title.textContent = `${book.title}`;
  author.textContent = `${book.author}`;
  pages.textContent = `Pages: ${book.pages}`;
  removeBtn.textContent = "Remove";

  if (book.read === true) {
    readBtn.textContent = "Read";
    readBtn.classList.add("read");
  } else {
    readBtn.textContent = "Not read";
    readBtn.classList.add("notRead");
  }

  readBtn.addEventListener("click", () => {
    book.read = !book.read;
    showBooks();
  });

  removeBtn.addEventListener("click", () => {
    const index = booksArray.indexOf(book);
    if (index > -1) {
      booksArray.splice(index, 1);
    }
    showBooks();
  });

  booksCard.appendChild(title);
  booksCard.appendChild(author);
  booksCard.appendChild(pages);
  booksCard.appendChild(readBtn);
  booksCard.appendChild(removeBtn);
  books.appendChild(booksCard);
};

const getInputValue = (e) => {
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const readCheckbox = document.getElementById("readCheckbox").checked;

  const newBook = new Book(title, author, pages, readCheckbox);

  booksArray.push(newBook);
  e.preventDefault();
  closeModal();
  resetForm();
  showBooks();
};

const showBooks = () => {
  books.innerHTML = "";
  for (const book of booksArray) {
    createBook(book);
  }
};

submit.onclick = getInputValue;

const b1 = new Book(
  "Harry Potter: Deathly Hallows",
  "J.K. Rowling",
  607,
  false
);
const b2 = new Book("The Hobbit", "J.R.R. Tolkien", 310, true);
booksArray.push(b1);
booksArray.push(b2);
createBook(b1);
createBook(b2);
