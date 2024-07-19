const url = 'https://pixabay.com/api/';
const apiKey = '27065513-503b047e62eedc8adb85626ce';

export function sendRequest(q) {
  return fetch(
    `https://pixabay.com/api/?key=27065513-503b047e62eedc8adb85626ce&q=${q}&image_type=photo&orientation=horizontal&safesearch=true`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      const images = data.hits;
      console.log(images);
      return images;
    });
};

