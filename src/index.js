import { fetchBreeds, fetchCatByBreed } from './cat-api';
import { selectMarkup, infoMarkup } from './markup';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const selectCat = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
export { selectCat, catInfo };

const loadText = document.querySelector('.loader');
const errText = document.querySelector('.error');
const hiddenEl = element => element.classList.add('is-hidden');
const showEl = element => element.classList.remove('is-hidden');

hiddenEl(loadText);
hiddenEl(errText);

fetchBreeds().then(selectMarkup).catch(onError);

selectCat.addEventListener('change', onSelector);
function onSelector(evt) {
  const breedId = evt.target.value;
  showEl(loadText);
  hiddenEl(catInfo);

  fetchCatByBreed(breedId)
    .then(data => {
      infoMarkup(data);
      Notify.success('Loading data is successfully');
    })
    .catch(onError)
    .finally(() => setTimeout(onFinally, 2000));
}
function onError() {
  Notify.failure('Oops! Something went wrong! Try reloading the page!');
  hiddenEl(loadText);
  showEl(errText);
}

function onFinally() {
  hiddenEl(errText);
  hiddenEl(loadText);
  showEl(catInfo);
  selectCat.removeAttribute('disabled');
}
