import { selectCat, catInfo } from './index';
import SlimSelect from 'slim-select';
import '/node_modules/slim-select/dist/slimselect.css';

function selectMarkup(cat) {
  const addOptionSelect = cat
    .map(({ id, name }) => `<option value="${id}">"${name}"</option>`)
    .join();
  selectCat.insertAdjacentHTML('beforeend', addOptionSelect);

  new SlimSelect({
    select: selectCat,
    settings: {
      searchPlaceholder: 'Select a cat breed',
    },
    events: {
      afterChange: () => (selectCat.disabled = true),
    },
  });
}

function infoMarkup(oneCat) {
  const oneCatData = oneCat[0];

  catInfo.innerHTML = `<div>
  <img src=${oneCatData.url}  alt=${oneCatData.breeds[0].alt_name} width="600" height="600"/>
</div>
<div class="box">
  <h1> ${oneCatData.breeds[0].name} </h1>
  <p> ${oneCatData.breeds[0].description}</p>
  <p><span>Temperament:</span>  ${oneCatData.breeds[0].temperament}</p>
</div>`;
}

export { selectMarkup, infoMarkup };
