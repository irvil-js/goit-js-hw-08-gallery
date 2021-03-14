import gallery from './gallery-items.js';

const ulRef = document.querySelector('.js-gallery');

// Создание и рендер разметки по массиву данных и предоставленному шаблону.




const imgMarkup = gallery => {
    return gallery.map(e => {
        const listEl = document.createElement('li');
        listEl.classList.add('gallery__item');

        const aEl = document.createElement('a');
        aEl.classList.add('gallery__link');
        aEl.href = e.original;


        const imgEl = document.createElement('img');
        imgEl.classList.add('gallery__image');
        imgEl.src = e.preview;
        imgEl.alt = e.description;
        imgEl.dataset.source = e.original;

        aEl.appendChild(imgEl);
        listEl.appendChild(aEl);

        return listEl;
    });
};

const elements = imgMarkup(gallery);

ulRef.append(...elements);

console.log(ulRef);