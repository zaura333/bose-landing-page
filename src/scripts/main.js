'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page-content--with-menu');
  } else {
    document.body.classList.remove('page-content--with-menu');
  }
});

const form = document.querySelector('.form');

function handleForm(event) {
  event.preventDefault();
  event.target.reset();
}

form.addEventListener('submit', handleForm);
