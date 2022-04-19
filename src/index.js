import './style.css';

const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const url2 = 'https://themealdb.com/api/json/v1/1/categories.php';
const show = document.querySelector('.display');
const ID = '7amfNDyGsWWSaz3PJUCx';

const display = async () => {
  const data = await fetch(url2).then((response) => response.json());
  console.log(data);
  console.log(data.categories);
  data.categories.forEach((element) => {
    const meal = document.createElement('div');
    meal.className = 'meal';
    meal.innerHTML = `<div id="${element.idCategory}">
    <div class="images">
    <img class="img" src="${element.strCategoryThumb}">
    </div>
    <div class="actions b">
    <p class="foodcategory">${element.strCategory}</p>
    <i class="fa fa-thumbs-up" aria-hidden="true"></i>
    </div>
    <button id="comment-btn">Comment</button>
    </div>`;
    show.appendChild(meal);
    // show.style.display = "block"
  });
};
display();
