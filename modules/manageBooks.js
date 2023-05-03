import Book from './Book.js';

export default class BookManager {
  static createBookElement = (book) => `<tr id="${book.id}">
      <td class="book-info"> "${book.title}" by ${book.author}</td>
      <td class="remove-button">
        <button id="de" type="button" data-book-id="${book.id}">Remove</button>
      </td>
    </tr>`;

  constructor() {
    this.books = [];
    this.tbody = document.querySelector('tbody');
    this.tbody.addEventListener('click', this.handleRemoveClick.bind(this));
  }

  loadData = () => {
    this.books = JSON.parse(localStorage.getItem('books')) || [];
    this.books.forEach((bookData) => {
      const book = new Book(bookData.title, bookData.author, bookData.id);
      this.tbody.innerHTML += BookManager.createBookElement(book);
    });
  };

  addBook = () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const id = new Date().getTime().toString();
    const book = new Book(title, author, id);
    this.tbody.innerHTML += BookManager.createBookElement(book);
    this.books.push({ title: book.title, author: book.author, id: book.id });
    localStorage.setItem('books', JSON.stringify(this.books));
    alert('Data inserted successfully');
  };

  removeBook = (id) => {
    const bookRow = document.getElementById(id);
    if (bookRow) {
      this.tbody.removeChild(bookRow);
    }
    this.books = this.books.filter((bookData) => bookData.id !== id);
    localStorage.setItem('books', JSON.stringify(this.books));
  };

  handleRemoveClick = (event) => {
    if (event.target.matches('button[data-book-id]')) {
      const id = event.target.dataset.bookId;
      this.removeBook(id);
    }
  };

  list1 = () => {
    document.getElementById('bookListId').classList.add('bookList');
    document.getElementById('bookListId').classList.remove('nobookList');
    document.getElementById('wrapId').classList.add('nowrap');
    document.getElementById('wrapId').classList.remove('wrap');
    document.getElementById('addNewID').classList.remove('lstClass');
    document.getElementById('addNewID').classList.add('noLstClass');
  };

  cnt = () => {
    document.getElementById('wrapId').classList.remove('wrap');
    document.getElementById('wrapId').classList.add('nowrap');
    document.getElementById('addNewID').classList.add('lstClass');
    document.getElementById('addNewID').classList.remove('noLstClass');
    document.getElementById('bookListId').classList.remove('bookList');
    document.getElementById('bookListId').classList.add('nobookList');
  };

  addBook1 = () => {
    document.getElementById('wrapId').classList.remove('nowrap');
    document.getElementById('wrapId').classList.add('wrap');
    document.getElementById('addNewID').classList.remove('lstClass');
    document.getElementById('addNewID').classList.add('noLstClass');
    document.getElementById('bookListId').classList.remove('bookList');
    document.getElementById('bookListId').classList.add('nobookList');
  };
}
