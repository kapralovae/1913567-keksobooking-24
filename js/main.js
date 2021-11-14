import './server-data.js';
import { setAddressInput } from './server-data.js';

const sectionMarkers = document.querySelector('.notice');
const formForMarkers = sectionMarkers.querySelector('form');
const body = document.querySelector('body');
const ALERT_SHOW_TIME = 3000;
const successMessage = document.querySelector('#success').content.cloneNode(true);
const successParagraphMessage = successMessage.querySelector('p');
function isEscapeKey (evt) {
  return evt.key === 'Escape';
}

function setUserFormSubmit (onSuccess) {
  formForMarkers.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(formForMarkers);
    fetch(
      'https://24.javascript.pages.academy/keksobooking6',
      {
        method: 'POST',
        body: formData,
      },
    ).then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        showAlert();
      }
    })
      .catch(() => {
        showAlert();
      });
  });}
function resetForm () {

  body.style.backgroundColor = '#00ff00';
  setTimeout(() => {
    body.style.backgroundColor = '#f0f0ea';
  }, ALERT_SHOW_TIME);
  formForMarkers.reset();
  setAddressInput();
  successParagraphMessage.textContent = 'Данные успешно отправлены';
  const successModalWindow = successMessage.querySelector('div');
  body.insertAdjacentElement('beforeend', successModalWindow);
  window.addEventListener('click', () => {
    body.removeChild(successModalWindow);
  });

  document.addEventListener('keydown', (evt) => {
    if(isEscapeKey(evt)) {
      evt.preventDefault();
      body.removeChild(successModalWindow);
    }
  });}
function showAlert () {
  const errorMessage = document.querySelector('#error').content;
  const copyErrorMessage = errorMessage.cloneNode(true);
  const errorParagraphMessage = copyErrorMessage.querySelector('p');
  errorParagraphMessage.textContent = 'Всё плохо!';

  body.style.backgroundColor = '#ff0000';
  setTimeout(() => {
    body.style.backgroundColor = '#f0f0ea';
  }, ALERT_SHOW_TIME);
  const errorModalWindow = copyErrorMessage.querySelector('div');
  body.insertAdjacentElement('beforeend', errorModalWindow);

  window.addEventListener('click', () => {
    body.removeChild(errorModalWindow);
  });
  document.addEventListener('keydown', (evt) => {
    if(isEscapeKey(evt)) {
      evt.preventDefault();
      body.removeChild(errorModalWindow);
    }
  });
}

setUserFormSubmit(resetForm);
