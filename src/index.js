import './style.css';
import Store from './modules/store.js';
import Design from './modules/design.js';
import User from './modules/user.js';

// display users onload of the page
document.addEventListener('DOMContentLoaded', Design.displayUsers);

const form = document.querySelector('#user-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;

  const user = new User(name, score);

  Store.addUser(user);
  Design.addUserToList(user);

  Design.clearFields();
});
