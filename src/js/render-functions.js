import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function createMarkup(images) {
  const gallery = document.querySelector('.gallery');
  gallery.insertAdjacentHTML('beforeend', images.map(imageToString).join(''));
  function imageToString(image) {
    return `<li class="gallery-item">
        <a class="gallery-link" href="${image.largeImageURL}">
          <img
            class="gallery-image"
            src="${image.webformatURL}"
            alt="${image.tags}"
          />
        <div class="photo-info">
        <div>Likes <span>${image.likes}</span></div>
        <div>Views <span>${image.views}</span></div>
        <div>Comments <span>${image.comments}</span></div>
        <div>Downloads <span>${image.downloads}</span></div>
        </div>
        </a>
      </li>`;
  }
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  lightbox.refresh();
};
