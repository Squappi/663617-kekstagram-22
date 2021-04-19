import { mocksMassive } from './random.js';

const template = document.querySelector('#picture').content;
const pictureBody = document.querySelector('.pictures');
const newPictureTemplate = template.querySelector('.picture');

const fragment = document.createDocumentFragment();

const bigPicture = document.querySelector('.big-picture');

for (let i = 0; i < mocksMassive.length; i++) {
    const newPicture = newPictureTemplate.cloneNode(true);
    newPicture.querySelector('.picture__likes').textContent = mocksMassive[i].likes;
    newPicture.querySelector('.picture__img').src = mocksMassive[i].url;
    newPicture.querySelector('.picture__comments').textContent = mocksMassive[i].comments.length;
    fragment.appendChild(newPicture);
}

pictureBody.appendChild(fragment);

pictureBody.addEventListener('click', (evt) => {
    evt.preventDefault();
    bigPicture.classList.remove('hidden');
    const pictureElement = document.querySelectorAll('.picture');
    pictureElement.forEach(e => e.addEventListener('click', (evt) => {
        console.log(evt.target);
    }));
});
