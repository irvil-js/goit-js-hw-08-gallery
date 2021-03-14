import itemsDefault from './gallery-items.js';

const ulRef = document.querySelector('.js-gallery');

// Создание и рендер разметки по массиву данных и предоставленному шаблону.

const imgItem = itemsDefault.map(e => {
    const imgEl = document.createElement('li');
    imgEl.src = "${preview}";
    imgEl.alt = "${description}";

    return imgEl;
})