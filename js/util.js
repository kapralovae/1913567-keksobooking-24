import { setAddressInput } from './server-data.js';

const ALERT_SHOW_TIME = 3000;
const body = document.querySelector('body');
const sectionMarkers = document.querySelector('.notice');
const formForMarkers = sectionMarkers.querySelector('form');
const successMessage = document.querySelector('#success').content.cloneNode(true);
const successParagraphMessage = successMessage.querySelector('p');

function isEscapeKey (evt) {
  return evt.key === 'Escape';
}

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

export {isEscapeKey, showAlert, resetForm, formForMarkers};
