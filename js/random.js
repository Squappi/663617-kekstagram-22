let descriptions = ['описание карточки 1','описание карточки 2','описание карточки 3'];
let messages = ['Всё отлично!','В целом всё неплохо. Но не всё.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.'];
let names = ['Виталик', 'Паша', 'Никита'];

const getRandonInteger = (a = 0, b = 1) => {
    const LOWER = Math.ceil(Math.min(a,b));
    const UPPER = Math.ceil(Math.max(a,b));

    return Math.floor( LOWER + Math.random() * (UPPER - LOWER +1));
};


const getComments = () => {
    return {
        id: getRandonInteger(1, 25),
        avatar: 'img/avatar-'+ getRandonInteger(1, 6) + '.svg',
        message: messages[getRandonInteger(0, messages.length - 1)],
        name: names[getRandonInteger(0, names.length - 1)],
    };
}

const getRandomMock = () => {
    return {
        id: getRandonInteger(1, 25),
        comments: new Array(getRandonInteger(1, 15)).fill('').map(getComments),
        url: 'photos/' + getRandonInteger(1, 25) + '.jpg',
        description: descriptions[getRandonInteger(0, 2)],
        likes: getRandonInteger(15, 200),
    }
};

const GENERATE = 26;

export const mocksMassive = new Array(GENERATE).fill().map(getRandomMock);
