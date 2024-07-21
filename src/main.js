import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const searchLine = form.querySelector('input');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMore = document.querySelector('.load-more-btn');
let q = '';
let page = 0;

import { sendRequest } from './js/pixabay-api.js';
import { createMarkup } from './js/render-functions.js';

loader.style.display = 'none';
loadMore.style.display = 'none';

let totalPages = 0;

form.addEventListener('submit', async event => {
  event.preventDefault();
  gallery.innerHTML = '';
  q = searchLine.value.trim();
  page = 1;
  if (q === '') {
    return iziToast.show({
      message: 'Please fill out this field',
      messageColor: '#FAFAFB',
      messageSize: '16px',
      messageLineHeight: '24px',
      backgroundColor: '#EF4040',
      position: 'topRight',
      maxWidth: '432px',
    });
  }
  loader.style.display = 'block';
  loadMore.style.display = 'none';
  form.reset();
  try {
    const response = await sendRequest(q, page);
    totalPages = Math.ceil(response.totalHits / 15);
    const images = response.hits;
    loader.style.display = 'none';
    if (images.length === 0) {
      return iziToast.show({
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
    loadMore.style.display = 'block';
  } catch (error) {
    console.log(error);
  } finally {
    loader.style.display = 'none';
  }
});

loadMore.addEventListener('click', async event => {
  if (page >= totalPages) {
    loadMore.style.display = 'none';
    return iziToast.error({
      position: 'topRight',
      message: "We're sorry, but you've reached the end of search results.",
    });
  }
  page += 1;
  loader.style.display = 'block';
  try {
    const response = await sendRequest(q, page);
    console.log(response);
    const images = response.hits;
    loader.style.display = 'none';
    createMarkup(images);
    window.scrollBy({
      top: 400,
      behavior: 'smooth',
    });
  } catch (error) {
    console.log(error);
  } finally {
    loader.style.display = 'none';
  }
});
