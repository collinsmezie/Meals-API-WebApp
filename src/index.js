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
          <div id="apicomment">
          
          </div>
         <div> 
          <input id="name" type="text" placeholder="your name..." required>
          <textarea id="message" placeholder="your message..." required></textarea>
          <button class="submits">Submit</button>
          </div>
          </section>
          `;
      const submit = document.querySelector('.submits');
      submit.addEventListener('click', () => {

      });
    });
  });
};
displayPopup();

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const ID = '7amfNDyGsWWSaz3PJUCx';

// const message = document.getElementById('message');
// const name = document.getElementById('name');
const addComment = async (userName, Comment) => {
  const awaitData = await fetch(`${url}${ID}/comments`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: 'item1',
      username: userName.value,
      comment: Comment.value,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((res) => res.status);
  return awaitData;
};
addComment();

const getApi = () => {
  const getItems = fetch(`${url}${ID}/comments?item_id=item1`)
    .then((response) => response.json());
    // .then((json) => console.log(json));
  return getItems;
};
getApi();
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