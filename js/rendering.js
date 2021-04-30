import { mocksMassive } from './random.js';

const template = document.querySelector('#picture').content;
const pictureBody = document.querySelector('.pictures');
const newPictureTemplate = template.querySelector('.picture');

const fragment = document.createDocumentFragment();

const bigPicture = document.querySelector('.big-picture');
const bigPicturePainting = document.querySelector('.big-picture__painting');
// const socialPicture = document.querySelector('.social__picture');
const socialCaption = document.querySelector('.social__caption');
const likesCount = document.querySelector('.likes-count');
// const socialText = document.querySelector('.social__text');
const bigPictureCancel = document.querySelector('.big-picture__cancel');


for (let i = 0; i < mocksMassive.length; i++) {
    const newPicture = newPictureTemplate.cloneNode(true);
    newPicture.querySelector('.picture__likes').textContent = mocksMassive[i].likes;
    newPicture.querySelector('.picture__img').src = mocksMassive[i].url;
    newPicture.querySelector('.picture__comments').textContent = mocksMassive[i].comments.length;
    fragment.appendChild(newPicture);

    newPicture.dataset.id = mocksMassive[i].id;

    newPicture.addEventListener('click', (evt) => {
        evt.preventDefault();
        bigPicture.classList.remove('hidden');
        document.querySelector('.social__comment-count').classList.remove('hidden');
        document.querySelector('.comments-loader').classList.remove('hidden');
        document.querySelector('body').classList.add('modal-open');
        const big = mocksMassive.find(item => item.id === +evt.currentTarget.dataset.id);

        // add description
        bigPicturePainting.src = big.url;
        bigPicturePainting.alt = big.description;
        likesCount.textContent = big.likes;
        socialCaption.textContent = big.description;

        // add block

        let makeElement = (tagName, className, text) => {
            let element = document.createElement(tagName);
            element.classList.add(className);
            if(text) {
                element.textContent = text;
            }
            return element;
        }

        let createCard = () => {
            let listItem = makeElement('li', 'social__comment');

            let image = makeElement('img', 'social__picture');
            image.src = mocksMassive[i].comments[0].avatar;
            image.alt = mocksMassive[i].comments[0].name;
            image.height = 35;
            image.width = 35;
            listItem.appendChild(image);

            let addText = makeElement('p', 'social__text');
            addText.textContent = mocksMassive[i].comments[0].message;
            listItem.appendChild(addText);
            console.log(listItem);
            return listItem;
        }

        let socialList = document.querySelector('.social__comments');

        socialList.appendChild(createCard());

        // add comments
        // for (let j = 0; j < big.comments.length;j++) {
        //     // also description
        //     socialPicture.src = big.comments[j].avatar;
        //     // add comments
        //     socialText.textContent = big.comments[j].message;
        // }
        bigPictureCancel.addEventListener('click', () => {
            bigPicture.classList.add('hidden');
            document.querySelector('body').classList.remove('modal-open');
        });

    });
}

pictureBody.appendChild(fragment);

