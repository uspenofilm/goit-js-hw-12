import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const searchParams = new URLSearchParams({
  key: '27065513-503b047e62eedc8adb85626ce',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 15,
});

export const sendRequest = async (q, page) => {
  const response = await axios.get(`?${searchParams}&q=${q}&page=${page}`);
  return response.data;
};
