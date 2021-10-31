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

export {inActivePage, activePage};
