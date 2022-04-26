const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';
const urlID = '7amfNDyGsWWSaz3PJUCx';

export const addLikes = async (id) => {
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

export const getAllLikes = async () => {
  const allLikes = await fetch(`${url}${urlID}/likes`);
  const dataLikes = allLikes.json();
  return dataLikes;
};

// export const displayLikes = async (id, p) => {
//   const likeAdd = await getAllLikes();
//   likeAdd.forEach((like) => {
//     if (like.item_id === id) {
//       p.innerHTML = `${like.likes}`;
//     }
//   });
// };