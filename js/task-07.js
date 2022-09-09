const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRef.addEventListener('input', changesFontSize);

textRef.style.fontSize = inputRef.value + 'px';
function changesFontSize(event) {
  textRef.style.fontSize = `${event.currentTarget.value}px`;
}
//! Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

//*     <input id="font-size-control" type="range" min="16" max="96" />
//*     <br />
//*     <span id="text">Abracadabra!</span>
