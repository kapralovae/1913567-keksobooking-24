import { setAddressInput } from './server-data.js';
import { successModalWindow, errorModalWindow, avatarImg, pictures } from './form.js';
import { filters } from './api.js';
import { mainMarker } from './server-data.js';


const ALERT_SHOW_TIME = 3000;
const body = document.querySelector('body');
const sectionMarkers = document.querySelector('.notice');
const formForMarkers = sectionMarkers.querySelector('form');
const divFilters = document.querySelector('.map__filters-container');
const formFilters = divFilters.querySelector('form');

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
  formFilters.reset();
  filters();
  mainMarker.setLatLng({
    lat: 35.68386,
    lng: 139.7635,
  });
  setAddressInput();
  avatarImg.src = 'img/muffin-grey.svg';
  pictures.src = '';

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

const buttonReset = sectionMarkers.querySelector('.ad-form__reset');
buttonReset.addEventListener('click', (evt) => {
  evt.preventDefault();
  formForMarkers.reset();
  formFilters.reset();
  filters();
  mainMarker.setLatLng({
    lat: 35.68386,
    lng: 139.7635,
  });
});

export {isEscapeKey, showAlert, resetForm, formForMarkers, body};
