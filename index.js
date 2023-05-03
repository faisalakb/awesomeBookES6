import {
  lst, cont, addBo, clickBtn,
} from './modules/getHtmlContent.js';
import BookManager from './modules/manageBooks.js';
import { DateTime } from './modules/luxon.js';

const bookManager = new BookManager();

lst.addEventListener('click', () => {
  bookManager.list1();
});

cont.addEventListener('click', () => {
  bookManager.cnt();
});

addBo.addEventListener('click', () => {
  bookManager.addBook1();
});

clickBtn.addEventListener('click', () => {
  bookManager.addBook();
});
const time = () => {
  const today = DateTime.now().toLocaleString(DateTime.DATETIME_MED);
  document.getElementById('date').innerHTML = today;
};
setInterval(time, 1000);

bookManager.loadData();
