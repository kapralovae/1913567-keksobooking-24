import {showAlert} from './util.js';
import {createMarker, mymap} from './server-data.js';
import { debounce } from './utils/debounce.js';

const COUNT_MARKERS = 10;
let serverMarkers=[];
let mapMarkers = [];
function getData () {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((srvMarkers) => {
      serverMarkers = srvMarkers;
      const markers = srvMarkers.slice(0, COUNT_MARKERS);
      mapMarkers = paintMarkers(markers);
    });

}

function paintMarkers (markers) {
  const paintMarkers = [];
  for(let i = 0; i < markers.length; i++) {
    paintMarkers.push(createMarker(mymap, markers[i]));
  }
  return paintMarkers;
}

function removeMarkers () {
  mapMarkers.forEach((item) => {
    mymap.removeLayer(item);
  });

}

function selectFilter () {
  const housingFeatures = document.querySelector('#housing-type');
  const typeFilter = housingFeatures.value;

  const priceFilter = document.querySelector('#housing-price');
  const selectPrice = priceFilter.value;

  const roomsFilter = document.querySelector('#housing-rooms');
  const selectRooms = roomsFilter.value;

  const guestsFilter = document.querySelector('#housing-guests');
  const selectGuests = guestsFilter.value;

  const checkFieldset = document.querySelector('#housing-features');
  const checkFilter = checkFieldset.querySelectorAll('input');

  const features = [];
  checkFilter.forEach((item) => {

    if (item.checked) {
      features.push(item.value);
    }
  });

  const filterMarkers = [];
  let comparePrice = '';
  serverMarkers.forEach((item) => {

    if (item.offer.price < 10000) {
      comparePrice = 'low';
    } else if (item.offer.price > 10000 && item.offer.price < 50000) {
      comparePrice = 'middle';
    } else {
      comparePrice = 'high';
    }

    if ( (item.offer.type === typeFilter || typeFilter==='any')
        && (comparePrice === selectPrice || selectPrice==='any')
        && (String(item.offer.rooms) ===selectRooms || selectRooms==='any')
        && (String(item.offer.guests) === selectGuests || selectGuests==='any')
    )  {
      let isAdd = true;
      features.forEach((feature)=>{
        if(!(item.offer.features) || item.offer.features.indexOf(feature)===-1) {
          isAdd = false;
        }
      });
      if(isAdd) {
        filterMarkers.push(item);
      }
    }

  });

  removeMarkers();

  mapMarkers = paintMarkers(filterMarkers.slice(0, COUNT_MARKERS));

}
const filters = debounce(selectFilter, 500);

function sendData (onSuccess, body) {
  fetch(
    'https://24.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
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
}

export {sendData, getData, serverMarkers, paintMarkers, removeMarkers, mapMarkers, selectFilter, filters};
