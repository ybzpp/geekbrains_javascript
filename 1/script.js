// вводим переменную, в которой будет храниться текущий номер  отображаемой большой картинки
var currentBigImageNumber = 0;
// переменная imagesNumber хранит количество изображений в галерее
var imagesNumber = document.getElementById('gallery').getElementsByTagName('img').length;

function init() {
    let gallery = document.getElementById('gallery');
    let image = gallery.getElementsByTagName('img');
    for (let i = 0; i < image.length; i++) {
        image[i].onclick = changeBigPicture;
    };
    let leftButton = document.getElementById('left');
    let rightButton = document.getElementById('right');
    leftButton.onclick = moveBigPicture;
    rightButton.onclick = moveBigPicture;
}

function changeBigPicture(eventObj) {
    let appDiv = document.getElementById('big_picture');
    appDiv.innerHTML = '';
    let eventBlock = eventObj.target;
    let imageNameParts = eventBlock.id.split('_');
    let src = 'img/big/' + imageNameParts[1] + '.jpg';
    let imageDomElement = document.createElement('img');
    imageDomElement.src = src;
    imageDomElement.alt = 'Oops...';
    currentBigImageNumber = +imageNameParts[1];
    appDiv.appendChild(imageDomElement);
    //проверка загрузилась ли картинка
    imageDomElement.onerror = function () {
        alert('Этой большой картинки нет!')
    };
}


window.onload = init;