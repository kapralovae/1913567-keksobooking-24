// import './get-random-number.js';
// import './generate-data.js';
// import './data-and-get-object-massive.js';
import {getArticle} from './generate-data';

const mapCanvas = document.querySelector('#map-canvas');
const copyCard = getArticle();
mapCanvas.append(copyCard);
