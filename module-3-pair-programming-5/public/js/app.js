

// document.addEventListener('DOMContentLoaded', () => {
//     document.getElementById('save_btn').addEventListener('click', saveCard);
//     document.getElementById('next_btn').addEventListener('click', getNewCard);

//     refreshCollection();
//     getNewCard();
// });





// function editHandler(event, id) {
//     const cat_fact = document.getElementById('cat_fact');
//     const cat_pic = document.getElementById('cat_pic');
//     const caption = document.getElementById('caption_box');

//     fetch(API_BASE + '/' + id)
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             cardData = {};
//             cardData['catCardId'] = data.catCardId;
//             cardData['catFact'] = data.catFact;
//             cardData['imgUrl'] = data.imgUrl;
//             cardData['caption'] = data.caption;
//             caption.value = data.caption;
//             caption.disabled = false;
//             caption.style.textAlign = 'left';
//             cat_fact.innerText = data.catFact;
//             cat_pic.setAttribute('src', data.imgUrl);
//             caption.focus();
//         });
// }

// function deleteHandler(event, id) {
//     fetch(API_BASE + '/' + id, {
//         method: 'DELETE',
//     })
//         .then((response) => {
//             return response.text();
//         })
//         .then((data) => {
//             console.log(data);
//             alert('Cat Card deleted!');
//             refreshCollection();
//         })
//         .catch((err) => {
//             console.error(err);
//             alert('Could not delete Cat Card!');
//         });
// }

// function addId(container, id) {
//     const hidden = document.createElement('input');
//     hidden.type = 'hidden';
//     hidden.value = id;
//     container.appendChild(hidden);
// }

// function addFact(container, fact) {
//     const h5 = document.createElement('h5');
//     h5.innerText = fact;
//     h5.classList.add('collection-fact');
//     container.appendChild(h5);
// }

// function addPic(container, img_url) {
//     const img = document.createElement('img');
//     img.src = img_url;
//     img.classList.add('collection-pic');
//     container.appendChild(img);
// }

// function addCaption(container, caption) {
//     const d = document.createElement('div');
//     d.innerText = caption;
//     container.appendChild(d);
// }

// function addIcons(container, id) {
//     const outerDiv = document.createElement('div');
//     outerDiv.style.display = 'flex';
//     outerDiv.style.justifyContent = 'space-around';

//     const leftDiv = document.createElement('div');
//     leftDiv.innerHTML = '&#x270D;';
//     leftDiv.classList.add('edit_buttons');
//     leftDiv.style.cursor = 'pointer';
//     leftDiv.addEventListener('click', event => { editHandler(event, id)});

//     const rightDiv = document.createElement('div');
//     rightDiv.innerHTML = '❌';
//     rightDiv.classList.add('delete_buttons');
//     rightDiv.style.cursor = 'pointer';
//     rightDiv.addEventListener('click', event => { deleteHandler(event, id)});

//     outerDiv.appendChild(leftDiv);
//     outerDiv.appendChild(rightDiv);

//     container.appendChild(outerDiv);
// }