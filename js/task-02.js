const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listRef = document.querySelector('#ingredients');

const itemList = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent = ingredient;
  return itemEl;
});
listRef.append(...itemList);

console.log(listRef);

//! Напиши скрипт, який для кожного елемента масиву ingredients:

//! Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
//! Додасть назву інгредієнта як його текстовий вміст.
//! Додасть елементу клас item.
//! Після чого, вставить усі <li> за одну операцію у список ul#ingredients.
