import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const searchLine = form.querySelector('input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

import { sendRequest } from './js/pixabay-api.js';
import { createMarkup } from './js/render-functions.js';

loader.style.display = 'none';

form.addEventListener('submit', event => {
  event.preventDefault();
  gallery.innerHTML = '';
  if (searchLine.value === '') {
    iziToast.show({
      message: 'Please fill out this field',
      messageColor: '#FAFAFB',
      messageSize: '16px',
      messageLineHeight: '24px',
      backgroundColor: '#EF4040',
      position: 'topRight',
      maxWidth: '432px',
    });
  };
  loader.style.display = 'block';
  sendRequest(searchLine.value.trim()).then(images => {
    loader.style.display = 'none';
    if (images.length === 0) {
      iziToast.show({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        messageColor: '#FAFAFB',
        messageSize: '16px',
        messageLineHeight: '24px',
        backgroundColor: '#EF4040',
        position: 'topRight',
        maxWidth: '432px',
      });
    }
    createMarkup(images);
  });
  form.reset();
});
