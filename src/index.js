import './style.css';
//import { create } from './popup.js';
import { displayPopup } from './popup.js';

//const put = document.querySelector('.domClass')
let put;
let newbtn;
let submit;
window.addEventListener('load', () => {

  submit = document.querySelector('.submit')
  // console.log("this is", submit)
  // newbtn = document.querySelector('.btns')
  // console.log("this is",newbtn)
})

const url2 = 'https://themealdb.com/api/json/v1/1/categories.php';
const show = document.querySelector('.display');
// console.log(show)

const display = async () => {
  let data = await fetch(url2).then((response) => response.json());
  data.categories.forEach((element) => {
    const meal = document.createElement('div');
    meal.className = 'meal';
    meal.innerHTML = `<div class="card" id="${element.idCategory}">
    <div class="images">
    <img class="img" src="${element.strCategoryThumb}">
    </div>
    <div class="actions b">
    <p class="foodcategory">${element.strCategory}</p>
    <i class="fa fa-thumbs-up" aria-hidden="true"></i>
    </div>
    <button class="comment-btn" id=${element.idCategory}>Comment</button>
    </div>`;
    show.appendChild(meal);
  });
};
display();



const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const ID = '7amfNDyGsWWSaz3PJUCx';

const message = document.getElementById('message');
const name = document.getElementById('name');
const addComment = async ( userName, Comment ) => {

 const awaitData =  await fetch(`${url}${ID}/comments`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: "item1",
      username: userName.value,
      comment: Comment.value    
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => res.status);
  return awaitData
};

const getApi = () => {
  const getItems = fetch(`${url}${ID}/comments?item_id=item1`)
  .then(response => response.json())
  .then(json => console.log(json));
  return getItems
}













// const url3 ='https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/7amfNDyGsWWSaz3PJUCx/likes';
// const addLikes = async () => {
//   const res = await fetch(url3,
//     {
//       method: 'POST',
//       body: JSON.stringify({
//         item_id: 7,
//       }),
//       headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//       },
//     });
//     return res.status;
// };
// console.log(addLikes(4))


