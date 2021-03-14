import gallery from './gallery-items.js';

const ulRef = document.querySelector('.js-gallery');
const modal = document.querySelector('.js-lightbox');
const openModalImg = document.querySelector('.lightbox__image');
const modalCloseBtn = document.querySelector('button[data-action="close-lightbox"]'), //кнопка закрытия модального окна


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

// console.log(ulRef);


// Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.
// Подмена значения атрибута src элемента img.lightbox__image

ulRef.addEventListener('click', onOpenModal);

function onOpenModal(evt) {
    
    if (evt.target.nodeName !== 'IMG') {
        return;
    }
    evt.preventDefault(); //отмена перехода по ссылке
    
    modal.classList.add('is-open'); //открытие модалки по клику
    openModalImg.src = evt.target.dataset.source; //Подмена значения атрибута src элемента img.lightbox__image
};


// Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].

modalCloseBtn.addEventListener('click', onCloseModal);

function onCloseModal(event) {
    if (event.currentTarget === event.target) {
        onCloseModal();
    }
};

function onCloseModal() {
    modal.classList.remove('is-open');
    openModalImg.src = '';   //очстка от атрибута

}