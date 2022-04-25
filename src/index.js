import './style.css';
// import { commentCounter } from './Module/counters.js';
import displayPopup from './Module/display_popup.js';
import display from './Module/display_home.js';
/* eslint-disable no-unused-vars */

/* eslint-disable no-use-before-define */
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const urlID = '7amfNDyGsWWSaz3PJUCx';
const url2 = 'https://themealdb.com/api/json/v1/1/categories.php';
const show = document.querySelector('.display');
display();
displayPopup();
