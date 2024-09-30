/*const images = [
    'https://i.pinimg.com/736x/25/2a/04/252a045199e33164a8b7577fc001851a.jpg',
    'https://i.imgflip.com/4/1g8my4.jpg',
    'https://wallpapers.com/images/hd/blank-meme-pictures-604-x-919-tn3g9s6zzjsqeu6o.jpg',
    'https://preview.redd.it/6rs9ahsx1g651.jpg?width=640&crop=smart&auto=webp&s=a54eb6c4f0862f7cc7b7679024165411a651455d',
    'https://ecdn.teacherspayteachers.com/thumbitem/Animal-Blank-Memes-9478825-1682939514/original-9478825-3.jpg',
    'https://ecdn.teacherspayteachers.com/thumbitem/Animal-Blank-Memes-9478825-1682939514/original-9478825-2.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWikrEL7P8HJ-SF5Z1B4U7Pck32H4Y84kmBg&s',
    'https://static.gameloop.com/img/e7de10c8dec6e9ad6ee900ef32a1b785.png?imageMogr2/thumbnail/172.8x172.8/format/webp'
];
*/
/*function buildImages() {
    for (var i = 0; i < memes.length; i++) {
        document.createElement(memes[i]);
    }
}*/
/*
const container = document.getElementById('image-container');

for (let i = 0; i < images.length; i++) {
    const img = document.createElement('img');
    img.src = images[i];
    container.appendChild(img);
}*/
const images = ['https://i.pinimg.com/736x/25/2a/04/252a045199e33164a8b7577fc001851a.jpg',
    'https://i.imgflip.com/4/1g8my4.jpg',
    'https://wallpapers.com/images/hd/blank-meme-pictures-604-x-919-tn3g9s6zzjsqeu6o.jpg',
    'https://preview.redd.it/6rs9ahsx1g651.jpg?width=640&crop=smart&auto=webp&s=a54eb6c4f0862f7cc7b7679024165411a651455d',
    'https://ecdn.teacherspayteachers.com/thumbitem/Animal-Blank-Memes-9478825-1682939514/original-9478825-3.jpg',
    'https://ecdn.teacherspayteachers.com/thumbitem/Animal-Blank-Memes-9478825-1682939514/original-9478825-2.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWikrEL7P8HJ-SF5Z1B4U7Pck32H4Y84kmBg&s',
    'https://static.gameloop.com/img/e7de10c8dec6e9ad6ee900ef32a1b785.png?imageMogr2/thumbnail/172.8x172.8/format/webp'
            ];
  
let randomImgIndex;
function getRandomImgIndex(array) {
    let randomImgIndex = Math.floor(Math.random() * array.length);
    console.log(randomImgIndex);
    return randomImgIndex;
}

function showRandomImg() {
    let randomImgIndex = getRandomImgIndex(images)
    const container = document.getElementById('imageContainer');
    const img = document.createElement('img');
    img.src = images[randomImgIndex];
    container.appendChild(img);
    return img;
}

let memoryMemeImg = showRandomImg();
console.log(memoryMemeImg);

