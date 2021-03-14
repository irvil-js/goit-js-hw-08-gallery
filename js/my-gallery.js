import gallery from './gallery-items.js';

const ulRef = document.querySelector('.js-gallery');

// Создание и рендер разметки по массиву данных и предоставленному шаблону.




const imgMarkup = gallery => {
    return gallery.map(e => {
        let listEl = document.createElement('li');
        let imgEl = document.createElement('img');
        imgEl.src = e.preview;
        imgEl.alt = e.description;
        listEl.appendChild(imgEl)

        return listEl;
    });
};

let elements = imgMarkup(gallery);

ulRef.append(...elements);

console.log(ulRef);