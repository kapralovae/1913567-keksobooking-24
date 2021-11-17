//import {timeIn, timeOut,} from './generate-data.js';
import { formForMarkers, resetForm, body } from './util.js';
import { sendData } from './api.js';
const naticeForm = document.querySelector('form.ad-form');
const naticeFieldset = naticeForm.querySelectorAll('fieldset');
const mapForm = document.querySelector('form.map__filters');
const mapSelect = mapForm.querySelectorAll('select');
const mapFieldset = mapForm.querySelectorAll('fieldset');
const titleInput = document.querySelector('#title');
const priceInput = document.querySelector('#price');
const capacitySelect = document.querySelector('#capacity');
const capacitySelectOptions = capacitySelect.querySelectorAll('option');
const roomSelect = document.querySelector('#room_number');
const typeSelect = document.querySelector('#type');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');


const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MIN_PRICE_VALUE = 1000;
const MAX_PRICE_VALUE = 1000000;

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
const valueNumber = priceInput.value;
priceInput.addEventListener('input', () => {

  if (valueNumber > MAX_PRICE_VALUE) {
    priceInput.setCustomValidity(`Цена не может быть больше ${MAX_PRICE_VALUE}`);
  }
  if (valueNumber < MIN_PRICE_VALUE) {
    priceInput.setCustomValidity(`Цена не может быть меньше ${MIN_PRICE_VALUE}`);
  }

  priceInput.setCustomValidity('');
  priceInput.reportValidity();
});


function disabledOptions () {
  for (let i = 0; i < capacitySelectOptions.length; i++) {
    capacitySelectOptions[i].setAttribute('disabled', '');
  }
}
disabledOptions();
capacitySelectOptions[2].removeAttribute('disabled', '');
roomSelect.addEventListener('change', () => {
  disabledOptions();

  if (roomSelect.value === '1') {
    capacitySelect.value = 1;
    capacitySelectOptions[2].removeAttribute('disabled', '');
  }
  if (roomSelect.value === '2') {
    capacitySelect.value = 1;
    capacitySelectOptions[1].removeAttribute('disabled', '');
    capacitySelectOptions[2].removeAttribute('disabled', '');
  }
  if (roomSelect.value === '3') {
    capacitySelect.value = 1;
    capacitySelectOptions[0].removeAttribute('disabled', '');
    capacitySelectOptions[1].removeAttribute('disabled', '');
    capacitySelectOptions[2].removeAttribute('disabled', '');
  }
  if (roomSelect.value === '100') {
    capacitySelect.value = 0;
    capacitySelectOptions[3].removeAttribute('disabled', '');
  }
});


const priceType = {
  priceBungalow : 0,
  priceFlat : 1000,
  priceHotel : 3000,
  priceHouse : 5000,
  pricePalace : 10000,
};

typeSelect.addEventListener('change', () => {
  if (typeSelect.value === 'bungalow') {
    priceInput.setAttribute('placeholder', `${priceType.priceBungalow}`);
    priceInput.setAttribute('min', `${priceType.priceBungalow}`);
    priceInput.setCustomValidity(`Цена не может быть меньше ${priceType.priceBungalow}`);
  }
  if (typeSelect.value === 'flat') {
    priceInput.setAttribute('placeholder', `${priceType.priceFlat}`);
    priceInput.setAttribute('min', `${priceType.priceFlat}`);
    priceInput.setCustomValidity(`Цена не может быть меньше ${priceType.priceFlat}`);
  }
  if (typeSelect.value === 'hotel') {
    priceInput.setAttribute('placeholder', `${priceType.priceHotel}`);
    priceInput.setAttribute('min', `${priceType.priceHotel}`);
    priceInput.setCustomValidity(`Цена не может быть меньше ${priceType.priceHotel}`);
  }
  if (typeSelect.value === 'house') {
    priceInput.setAttribute('placeholder', `${priceType.priceHouse}`);
    priceInput.setAttribute('min', `${priceType.priceHouse}`);
    priceInput.setCustomValidity(`Цена не может быть меньше ${priceType.priceHouse}`);
  }
  if (typeSelect.value === 'palace') {
    priceInput.setAttribute('placeholder', `${priceType.pricePalace}`);
    priceInput.setAttribute('min', `${priceType.pricePalace}`);
    priceInput.setCustomValidity(`Цена не может быть меньше ${priceType.pricePalace}`);
  }

  priceInput.setCustomValidity('');
  priceInput.reportValidity();
});


timeIn.addEventListener('change', () => {
  timeOut.value = timeIn.value;
});

timeOut.addEventListener('change', () => {
  timeIn.value = timeOut.value;
});

const successMessage = document.querySelector('#success').content.cloneNode(true);
const successParagraphMessage = successMessage.querySelector('p');
successParagraphMessage.textContent = 'Данные успешно отправлены';
const successModalWindow = successMessage.querySelector('div');
const errorMessage = document.querySelector('#error').content;
const copyErrorMessage = errorMessage.cloneNode(true);
const errorParagraphMessage = copyErrorMessage.querySelector('p');
errorParagraphMessage.textContent = 'Всё плохо!';
const errorModalWindow = copyErrorMessage.querySelector('div');


function setUserFormSubmit (onSuccess) {
  formForMarkers.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const formData = new FormData(formForMarkers);
    successModalWindow.style.display = 'none';
    errorModalWindow.style.display = 'none';
    body.insertAdjacentElement('beforeend', successModalWindow);
    body.insertAdjacentElement('beforeend', errorModalWindow);
    sendData(() => onSuccess(), formData);

  });
}
const avatarInput = document.querySelector('#avatar');


avatarInput.addEventListener('change', () => {
  const avatarImg = document.querySelector('#preview_avatar');
  avatarImg.src = URL.createObjectURL(avatarInput.files[0]);
  avatarImg.onload = function () {
    URL.revokeObjectURL(avatarImg.src);
  };
  console.log(avatarImg);
});
const photoInput = document.querySelector('#images');

photoInput.addEventListener('change', () => {
  const divPhotos = document.querySelector('.ad-form__upload');
  const pictures = document.querySelector('#pictures');
  pictures.insertAdjacentHTML('beforeend', divPhotos);
  pictures.src = URL.createObjectURL(photoInput.files[0]);
  pictures.onload = function () {
    URL.revokeObjectURL(pictures.src);
  };
console.log(pictures);
});

setUserFormSubmit(resetForm);


export {titleInput, inActivePage, activePage, valueNumber, capacitySelect, roomSelect, typeSelect, timeIn, timeOut, successModalWindow, errorModalWindow};
