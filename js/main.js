import {getArticle} from './generate-data.js';

const mapCanvas = document.querySelector('#map-canvas');
const copyCard = getArticle();
mapCanvas.append(copyCard);
