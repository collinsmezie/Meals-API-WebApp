import './style.css';
import { commentCounter } from './counters.js';
/* eslint-disable no-unused-vars */

/* eslint-disable no-use-before-define */
const url2 = 'https://themealdb.com/api/json/v1/1/categories.php';
const show = document.querySelector('.display');

const getAllLikes = async () => {
  const allLikes = await fetch(`${url}${urlID}/likes`);
  const dataLikes = await allLikes.json();
  return dataLikes;
};

const displayLikes = async (id, p) => {
  const likeAdd = await getAllLikes();
  likeAdd.forEach((like) => {
    if (like.item_id === id) {
      p.innerHTML = `${like.likes}`;
    }
  });
};

const display = async () => {
  const data = await fetch(url2).then((response) => response.json());
  data.categories.forEach((element) => {
    const meal = document.createElement('div');
    meal.className = 'meal';
    meal.innerHTML = `<div class="card" id="${element.idCategory}">
    <div class="images">
    <img class="img" src="${element.strCategoryThumb}">
    </div>
    <div class="actions b">
    <p class="foodcategory">${element.strCategory}</p>
    <div class="thumbshow">
    <i class="fa fa-thumbs-up" aria-hidden="true" id=${element.strCategory}></i>
    <p class="likeShow" id=${element.strCategory}> </p>
    </div>

    </div>
    <button class="comment-btn" id=${element.idCategory}>Comment</button>
    </div>`;
    show.appendChild(meal);
  });

  const likes = document.querySelectorAll('.fa.fa-thumbs-up');
  const likeShow = document.querySelectorAll('.likeShow');
  likes.forEach((like) => {
    like.addEventListener('click', async () => {
      likeShow.forEach((p) => {
        if (p.id === like.id) {
          addLikes(like.id);
          displayLikes(like.id, p);
        }
      });
    });
  });
};
display();

const displayPopup = async () => {
  const data = await fetch(url2).then((response) => response.json());
  const totalArray = data.categories;
  const comment = document.querySelectorAll('.comment-btn');
  const popup = document.querySelector('.popup');
  comment.forEach((button, index) => {
    button.addEventListener('click', () => {
      popup.innerHTML = `<section class ="commentSection" id="commentCard">
          <div class="popup-card">
          <img src="${totalArray[index].strCategoryThumb}">
          <p class="cancel" >X</p>
          </div>
          <p class="food-description">${totalArray[index].strCategoryDescription}</p>
          <p id="commentCount"></p>
          <div id="apicomment">
          
          </div>
         <div class="input-form"> 
          <input id="name" type="text" placeholder="your name..." required>
          <textarea id="message" placeholder="your message..." required></textarea>
          <button class="submits">Submit</button>
          </div>
          </section>`;
      const dynamicSection = document.querySelector('.commentSection');
      document.querySelector('.cancel').addEventListener('click', () => {
        dynamicSection.style.display = 'none';
      });
      /* eslint-disable no-unused-vars */
      const commentCount = document.getElementById('commentCount');
      const apicomment = document.getElementById('apicomment');
      /* eslint-disable no-use-before-define */

      getAllComments(button.id);
      commentCounter(button.id);
      const submit = document.querySelector('.submits');
      submit.addEventListener('click', async () => {
        const message = document.getElementById('message');
        const name = document.getElementById('name');
        /* eslint-disable no-use-before-define */
        await addComment(name, message, button.id);
        getAllComments(button.id);
        commentCounter(button.id);
      });
    });
  });
};
displayPopup();

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const urlID = '7amfNDyGsWWSaz3PJUCx';

const addComment = async (userName, userComment, id) => {
  const awaitData = await fetch(`${url}${urlID}/comments`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
      username: userName.value,
      comment: userComment.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => res.status);
  return awaitData;
};

const getAllComments = async (id) => {
  const allComments = await fetch(`${url}${urlID}/comments?item_id=${id}`);
  const dataObj = await allComments.json();
  /* eslint-disable no-undef */
  apicomment.innerHTML = '';
  if (dataObj.length === undefined) {
    apicomment.innerHTML += '<p> No comments yet</p>';
    return;
  }
  update(dataObj);
};

const update = (data) => {
  data.forEach((datum) => {
    apicomment.innerHTML += `
    <p>${datum.creation_date} - ${datum.username}:  ${datum.comment}</p>`;
  });
};

const addLikes = async (id) => {
  const awaitLikes = await fetch(`${url}${urlID}/likes`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: id,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => res.status);
  return awaitLikes;
};
