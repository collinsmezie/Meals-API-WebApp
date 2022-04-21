import './style.css';

const url2 = 'https://themealdb.com/api/json/v1/1/categories.php';
const show = document.querySelector('.display');

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
    <i class="fa fa-thumbs-up" aria-hidden="true"></i>
    </div>
    <button class="comment-btn" id=${element.idCategory}>Comment</button>
    </div>`;
    show.appendChild(meal);
  });
};
display();

const displayPopup = async () => {
  const data = await fetch(url2).then((response) => response.json());

  const totalArray = data.categories;
  const comment = document.querySelectorAll('.comment-btn');
  const popup = document.querySelector('.popup');
  comment.forEach((button, id) => {
    button.addEventListener('click', () => {
      popup.innerHTML = `<section class ="commentSection" id="commentCard">
          <div>
          <img src="${totalArray[id].strCategoryThumb}">
          <p>X</p>
          </div>
          <p>${totalArray[id].strCategoryDescription}</p>
          <p id="commentCount"></p>
          <div id="apicomment">
          
          </div>
         <div> 
          <input id="name" type="text" placeholder="your name..." required>
          <textarea id="message" placeholder="your message..." required></textarea>
          <button class="submits">Submit</button>
          </div>
          </section>`;
      /* eslint-disable no-unused-vars */
      const commentCount = document.getElementById('commentCount');
      const apicomment = document.getElementById('apicomment');
      /* eslint-disable no-use-before-define */
      getAllComments(button.id);

      const submit = document.querySelector('.submits');
      submit.addEventListener('click', () => {
        const message = document.getElementById('message');
        const name = document.getElementById('name');
        /* eslint-disable no-use-before-define */
        addComment(name, message, button.id);
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
  commentCount.textContent = `Comments (${dataObj.length})`;

  apicomment.innerHTML = '';

  if (dataObj.length === undefined) {
    commentCount.textContent = 'Comments (0)';

    apicomment.innerHTML += `
    <li> No comments yet</li>`;
  } else {
    dataObj.forEach((e) => {
      apicomment.innerHTML += `
    <li>${e.creation_date}  ${e.username}:  ${e.comment}</li>`;
    });
  }
};
