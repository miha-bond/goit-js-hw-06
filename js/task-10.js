const refs = {
  divBoxes: document.querySelector('#boxes'),
  inputNu: document.querySelector('input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
};

refs.btnCreate.addEventListener('click', createEl);
refs.btnDestroy.addEventListener('click', () => {
  const markupTab = [];
  {
    const markupEl = `<div></div>`;
    markupTab.push(markupEl);
  }
  refs.divBoxes.innerHTML = markupTab.join('');
});
refs.inputNu.addEventListener('input', event => {
  event.currentTarget.value;
});

const markupTab = [];
function createEl() {
  for (let i = 0; i < refs.inputNu.value; i += 1) {
    const markupEl = `<div class="box__itam" style="background-color: ${getRandomHexColor()}; width: ${
      30 + i * 10
    }px; height: ${30 + i * 10}px; border-radius: 6%;"></div>`;
    markupTab.push(markupEl);
  }
  refs.divBoxes.innerHTML = markupTab.join('');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// function destroyEl() {
//   refs.divBoxes.remove('div');
// }
//? Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

//*   <div id="controls">
//*     <input type="number" min="1" max="100" step="1" />
//*     <button type="button" data-create>Create</button>
//*     <button type="button" data-destroy>Destroy</button>
//*   </div>

//*   <div id="boxes"></div>

//! Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.
//! Розміри найпершого <div> - 30px на 30px.
//! Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
//! Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.

//*   function getRandomHexColor() {
//*     return `#${Math.floor(Math.random() * 16777215)
//*       .toString(16)
//*       .padStart(6, 0)}`;
//*   }

//! Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.
