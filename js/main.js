import './server-data.js';

import { showAlert, formForMarkers, resetForm } from './util.js';

function setUserFormSubmit (onSuccess) {
  formForMarkers.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const formData = new FormData(formForMarkers);
    fetch(
      'https://24.javascript.pages.academy/keksobooking',
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

setUserFormSubmit(resetForm);
