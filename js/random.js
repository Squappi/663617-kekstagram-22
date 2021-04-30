let descriptions = ['описание карточки 1','описание карточки 2','описание карточки 3'];
let messages = ['Всё отлично!','В целом всё неплохо. Но не всё.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.'];
let names = ['Виталик', 'Паша', 'Никита'];

const getRandonInteger = (a = 0, b = 1) => {
    const LOWER = Math.ceil(Math.min(a,b));
    const UPPER = Math.ceil(Math.max(a,b));

    return Math.floor( LOWER + Math.random() * (UPPER - LOWER +1));
};

export const mocksMassive = [];


const getComments = () => {
    let commentCount = getRandonInteger(0,15);
    let commentsMassive = [];
    for (let i = 1; i <= commentCount; i++) {
        let commentsObj = {
            id: i,
            avatar: 'img/avatar-'+ getRandonInteger(1, 6) + '.svg',
            message: messages[getRandonInteger(0, messages.length - 1)],
            name: names[getRandonInteger(0, names.length - 1)],
        };
        commentsMassive.push(commentsObj);
    }
    return commentsMassive;
}

for (let i = 0; i < 5; i++) {
    let randomMassive = {
        id: i,
        comments: getComments(),
        url: 'photos/' + getRandonInteger(1, 25) + '.jpg',
        description: descriptions[getRandonInteger(0, 2)],
        likes: getRandonInteger(15, 200),
    }
    mocksMassive.push(randomMassive);
}
console.log(mocksMassive);
