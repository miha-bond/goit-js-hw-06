const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listRef = document.querySelector('.gallery');
console.log(listRef);
const listGallary = images.map(({ url, alt }) => {
  // const itamEl = document.createElement('li');
  // itamEl.classList.add('gallery__itam');
  // const imgEl = document.createElement('img');
  // imgEl.src = url;
  // imgEl.alt = alt;
  // imgEl.width = '700';
  // itamEl.append(imgEl);
  // listRef.append(itamEl);
  // return listRef;

  // return `<li style = 'display: flex; flex-direction: column;align-items: center; margin: 20px;'><img src="${url}" alt="${alt}" width ='700'></li>`;
  return `<li class="gallery__itam"><img src="${url}" alt="${alt}" width ='700'></li>`;
});

let markup = listGallary.join('');
listRef.insertAdjacentHTML('afterend', markup);

//? Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

//? <ul class="gallery"></ul>

//! Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

//! Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
//! Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.
//* const images = [
//*   {
//*     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//*     alt: "White and Black Long Fur Cat",
//*   },
//*   {
//*     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//*     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//*   },
//*   {
//*     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//*     alt: "Group of Horses Running",
//*   },
//* ];
