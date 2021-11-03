const naticeForm = document.querySelector('form.ad-form');
const naticeFieldset = naticeForm.querySelectorAll('fieldset');
const mapForm = document.querySelector('form.map__filters');
const mapSelect = mapForm.querySelectorAll('select');
const mapFieldset = mapForm.querySelectorAll('fieldset');


function inActivePage () {
  for (let i = 0; i < naticeFieldset.length; i++) {
    naticeFieldset[i].setAttribute('disabled', '');
  }

  for (let i = 0; i < mapSelect.length; i++) {
    mapSelect[i].setAttribute('disabled', '');
  }

  for (let i = 0; i < mapFieldset.length; i++) {
    mapFieldset[i].setAttribute('disabled', '');
  }

  naticeForm.classList.add('ad-form--disabled');
  mapForm.classList.add('ad-form--disabled');
}

//inActivePage ();

function activePage () {
  naticeForm.classList.remove('ad-form--disabled');
  mapForm.classList.remove('ad-form--disabled');
  for (let i = 0; i < naticeFieldset.length; i++) {
    naticeFieldset[i].removeAttribute('disabled', '');
  }

  for (let i = 0; i < mapSelect.length; i++) {
    mapSelect[i].removeAttribute('disabled', '');
  }

  for (let i = 0; i < mapFieldset.length; i++) {
    mapFieldset[i].removeAttribute('disabled', '');
  }
}
//activePage ();

const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');
const roomSelect = document.querySelector('#room_number');
const capacitySelect = document.querySelector('#capacity');

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE_VALUE = 1000000;

titleInput.addEventListener('input', () => {
  const valueLength = titleInput.value.length;
  if (valueLength < MIN_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Ещё ${ MIN_TITLE_LENGTH - valueLength} симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Удалите лишние ${ valueLength - MAX_TITLE_LENGTH} симв.`);
  } else {
    titleInput.setCustomValidity('');
  }

  titleInput.reportValidity();
});

priceInput.addEventListener('input', () => {
  const valueNumber = priceInput.value;
  if (valueNumber > MAX_PRICE_VALUE) {
    priceInput.setCustomValidity(`Цена не может быть больше ${MAX_PRICE_VALUE}`);
  }
  priceInput.reportValidity();
});

const capacitySelectOptions = capacitySelect.querySelectorAll('option');

function disabledOptions () {
  for (let i = 0; i < capacitySelectOptions.length; i++) {
    capacitySelectOptions[i].setAttribute('disabled', '');
  }
}
disabledOptions();

roomSelect.addEventListener('change', () => {
  disabledOptions();

  if (roomSelect.value == 1) {
    capacitySelect.value = 1;
    capacitySelectOptions[2].removeAttribute('disabled', '');
  }
  if (roomSelect.value == 2) {
    capacitySelect.value = 1;
    capacitySelectOptions[1].removeAttribute('disabled', '');
    capacitySelectOptions[2].removeAttribute('disabled', '');
  }
  if (roomSelect.value == 3) {
    capacitySelect.value = 1;
    capacitySelectOptions[0].removeAttribute('disabled', '');
    capacitySelectOptions[1].removeAttribute('disabled', '');
    capacitySelectOptions[2].removeAttribute('disabled', '');
  }
  if (roomSelect.value == 100) {
    capacitySelect.value = 0;
    capacitySelectOptions[3].removeAttribute('disabled', '');
  }
});
export {inActivePage, activePage};
