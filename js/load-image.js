const picture = document.querySelector('.pictures');

const uploadImg = document.querySelector('.img-upload__overlay');
const loadInput = document.querySelector('.img-upload__input');
const closeModalShow = document.querySelector('.img-upload__cancel');
const form = document.querySelector('.img-upload__form');
const submitModalShow = document.querySelector('.img-upload__submit');

const download = (input) => {
    let file = input.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = function() {
        let link = document.createElement('a');
        link.classList.add('picture');
        let img = document.createElement('img');
        img.src = reader.result;
        img.width = 188;
        img.height = 188;
        link.appendChild(img);
        picture.appendChild(img);
    }
}

loadInput.addEventListener('change', () => {
    uploadImg.classList.remove('hidden');
    document.body.classList.add('modal-open');
    closeModalShow.addEventListener('click', () => {
        uploadImg.classList.add('hidden');
        document.body.classList.remove('modal-open');
        form.value = '';
    });
    submitModalShow.addEventListener('click', (evt) => {
        evt.preventDefault();
        download(loadInput);
        uploadImg.classList.add('hidden');
        document.body.classList.remove('modal-open');
    });
});


