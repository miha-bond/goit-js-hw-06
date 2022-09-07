const counterValue = {
  velue: 0,
  decrement() {
    this.velue -= 1;
  },
  increment() {
    this.velue += 1;
  },
};

const valueRef = document.querySelector('#value');
const btnDecrementRef = document.querySelector(
  'button[data-action="decrement"]',
);
const btnIncrementRef = document.querySelector(
  'button[data-action="increment"]',
);

btnDecrementRef.addEventListener('click', () => {
  counterValue.decrement();
  valueRef.textContent = counterValue.velue;
});
btnIncrementRef.addEventListener('click', () => {
  counterValue.increment();
  valueRef.textContent = counterValue.velue;
});

//? Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

//! Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
//! Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
//! Оновлюй інтерфейс новим значенням змінної counterValue.
