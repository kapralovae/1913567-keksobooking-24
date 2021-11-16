import {showAlert} from './util.js';
import {createMarker, mymap} from './server-data.js';

const COUNT_MARKERS = 15;
let serverMarkers=[];
function getData () {
  fetch('https://24.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((srvMarkers) => {
      serverMarkers = srvMarkers;
      const markers = srvMarkers.slice(0, COUNT_MARKERS);
      paintMarkers(markers);
      console.log(serverMarkers);


    });

}

function paintFilterMarker (srvMarkers) {
  for (let i = 0; i < srvMarkers.length; i++) {
    createMarker(mymap,srvMarkers[i]);
  }
}

function paintMarkers (markers) {
  for(let i = 0; i < markers.length; i++) {
    createMarker(mymap,markers[i]);
  }
}

function removeMarkers (markers) {
  for(let i = 0; i < markers.length; i++) {
    createMarker(mymap,markers[i]).remove(mymap);
  }
}

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

export {sendData, getData, serverMarkers, paintMarkers, removeMarkers, paintFilterMarker};
