import './style.css';
import { commentCounter } from './Module/counters.js';
import { displayPopup } from './Module/display_popup.js';
import { display } from './Module/display_home.js';
import { addComment, getAllComments, update } from './Module/create_comments.js';
import { addLikes, getAllLikes, displayLikes } from './Module/create_likes.js';

/* eslint-disable no-unused-vars */

/* eslint-disable no-use-before-define */
const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const urlID = '7amfNDyGsWWSaz3PJUCx';
const url2 = 'https://themealdb.com/api/json/v1/1/categories.php';
const show = document.querySelector('.display');
display();
displayPopup();
// commentCounter();
// addComment();
// getAllLikes();
// getAllComments();
// update();
// addLikes();
// displayLikes();
