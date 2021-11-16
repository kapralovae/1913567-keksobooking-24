import { setAddressInput } from './server-data.js';
import { successModalWindow, errorModalWindow } from './form.js';

const ALERT_SHOW_TIME = 3000;
const body = document.querySelector('body');
const sectionMarkers = document.querySelector('.notice');
const formForMarkers = sectionMarkers.querySelector('form');


function isEscapeKey (evt) {
  return evt.key === 'Escape';
}

function showAlert () {

  body.style.backgroundColor = '#ff0000';
  setTimeout(() => {
    body.style.backgroundColor = '#f0f0ea';
  }, ALERT_SHOW_TIME);


  errorModalWindow.style.display = 'block';
  window.addEventListener('click', () => {
    errorModalWindow.style.display = 'none';
  });
  document.addEventListener('keydown', (evt) => {
    if(isEscapeKey(evt)) {
      evt.preventDefault();
      errorModalWindow.style.display = 'none';
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

  successModalWindow.style.display = 'block';
  window.addEventListener('click', () => {
    successModalWindow.style.display = 'none';
  });

  document.addEventListener('keydown', (evt) => {
    if(isEscapeKey(evt)) {
      evt.preventDefault();
      successModalWindow.style.display = 'none';
    }
  });}

export {isEscapeKey, showAlert, resetForm, formForMarkers, body};
