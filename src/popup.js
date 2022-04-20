const url2 = 'https://themealdb.com/api/json/v1/1/categories.php';
// const show = document.querySelector('.display');
// const dynamic = document.querySelector('.dynamic')

const displayPopup = async () => {
    let data = await fetch(url2).then((response) => response.json());
    let popup = document.getElementById('popup');
      const totalArray = data.categories;
      const comment = document.querySelectorAll('.comment-btn');
      comment.forEach((button, id) => {
        button.addEventListener('click', () => {
            popup.innerHTML += `<section class ="commentSection" id="commentCard">
            <div>
            <img src="${totalArray[id]['strCategoryThumb']}">
            <p>X</p>
            </div>
            <p>${totalArray[id]['strCategoryDescription']}</p>
            <div id="apicomment">
            
            </div>
           <div> 
            <input id="name" type="text" placeholder="your name..." required>
            <textarea id="message" placeholder="your message..." required></textarea>
            <button class="submit">Comment</button>
            </div>
            </section>
            `
        })
      })
  }
  displayPopup();




// export const create = () => {
//     const dom = document.createElement('div');
//     dom.className = 'domClass';
//     const para = document.createElement('p')
//     para.textContent = 'dynamic paragraph'
//     dom.appendChild(para)
//     return dynamic.appendChild(dom)
//   }
  

  export const backtick = () => {
   dynamic.innerHTML = `<div class="action b">
    <p class="foodcategorys">Tis is it</p>
    <i class="fa fa-thumbs-up" aria-hidden="true"></i>
    <button class="btns">submit</button>
    </div>`
  }