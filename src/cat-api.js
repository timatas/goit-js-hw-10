import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_VbppatuBpBBCpeYcMrr2lYIlWmloePJtwjL3pOFrKboZzNZa5IP2M2f2PqRWz44k';

function fetchBreeds() {
  return fetch('https://api.thecatapi.com/v1/breeds').then(response => {
    return response.json();
  });
}

function fetchCatByBreed(breedId) {
  const BASE_URL = 'https://api.thecatapi.com/v1';
  const END_POINT = '/images/search';
  const API_KEY =
    'live_VbppatuBpBBCpeYcMrr2lYIlWmloePJtwjL3pOFrKboZzNZa5IP2M2f2PqRWz44k';
  const queryParams = new URLSearchParams({
    api_key: API_KEY,
    breed_ids: breedId,
  });

  return axios
    .get(`${BASE_URL}${END_POINT}?${queryParams}`)
    .then(resp => {
      return resp.data;
    })
    .catch(error => {
      throw new Error(error);
    });
}
export { fetchCatByBreed, fetchBreeds };
