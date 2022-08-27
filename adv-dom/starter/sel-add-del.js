'use strict';

console.log(document.documentElement);

//adding a elements
const head = document.querySelector('.header');

const element = document.createElement('div'); //this create a new tag

element.classList.add('cookie-message');
element.innerHTML =
  'Cookie for optimized <button class="btn-cookie">Got it</button>';

head.append(element);

//to remove
document.querySelector('.btn-cookie').addEventListener('click', function () {
  element.remove();
});
