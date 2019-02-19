'use strict';

const main = document.querySelector(`#main`);

const greetingTemplate = document.querySelector(`#greeting`).content.querySelector(`.greeting`);
const  rulesTemplate = document.querySelector(`#rules`).content.querySelector(`.rules`);
const  game1Template = document.querySelector(`#game-1`).content.querySelector(`.game`);
const  game2Template = document.querySelector(`#game-2`).content.querySelector(`.game`);
const  game3Template = document.querySelector(`#game-3`).content.querySelector(`.game`);
const  statsTemplate = document.querySelector(`#stats`).content.querySelector(`.result`);
const  statsMoreTemplate = document.querySelector(`#stats-more`).content.querySelector(`.result`);
const  statsSingleTemplate = document.querySelector(`#stats-single`).content.querySelector(`.result`);
const  modalErrorTemplate = document.querySelector(`#modal-error`).content.querySelector(`.modal`);
const  modalConfirmTemplate = document.querySelector(`#modal-confirm`).content.querySelector(`.modal`);

const screensArray = [greetingTemplate, rulesTemplate, game1Template, game2Template, game3Template,
  statsTemplate, statsMoreTemplate, statsSingleTemplate, modalErrorTemplate, modalConfirmTemplate];

const showScreen = (screenNumber) => {
  main.innerHTML = ``;
  const clone = screensArray[screenNumber].cloneNode(true);
  main.appendChild(clone);
};

showScreen(0);

// Добавляем стрелочки

const arrows = document.createElement(`div`);
arrows.classList.add(`arrows__wrap`);
arrows.innerHTML = `<style>
    .arrows__wrap {
      position: absolute;
      top: 95px;
      left: 50%;
      margin-left: -56px;
    }
    .arrows__btn {
      background: none;
      border: 2px solid black;
      padding: 5px 20px;
    }
  </style>
  <button class="arrows__btn"><-</button>
  <button class="arrows__btn">-></button>`;

document.querySelector(`body`).appendChild(arrows);

// Переключение экранов при нажатии на стрелки

const arrowsArray = document.querySelectorAll(`.arrows__btn`);
const  slideLeft = arrowsArray[0];
const  slideRight = arrowsArray[1];
let idx = 0; // Индекс текущего слайда.

const moveRight = () => {
  idx++;
  if (idx !== screensArray.length - 1) {
    showScreen(idx);
  } else {
    slideRight.removeEventListener(`click`, moveRight);
  }
};

// Аналогично, только для левой стрелки

const moveLeft = () => {
  idx--;
  if (idx !== 0) {
    showScreen(idx);
  } else {
    slideLeft.removeEventListener(`click`, moveLeft);
  }
};

slideRight.addEventListener(`click`, moveRight);
slideLeft.addEventListener(`click`, moveLeft);

document.addEventListener(`keydown`, function (evt) {
  if (evt.keyCode === 37) {
    moveLeft();
  }
  if (evt.keyCode === 39) {
    moveRight();
  }
});
