const categoriesItemsRef = document.querySelectorAll('.item');
console.log('Number of categories:', categoriesItemsRef.length);
categoriesItemsRef.forEach(item => {
  console.log('Categori:', item.firstElementChild.textContent);
  const itemsList = item.querySelector('ul');
  console.log('Elements:', itemsList.children.length);
});
