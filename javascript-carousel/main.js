var left = document.querySelector('.fa-angle-left');
var right = document.querySelector('.fa-angle-right');
var dot1 = document.querySelector('.dot1');
var dot2 = document.querySelector('.dot2');
var dot3 = document.querySelector('.dot3');
var dot4 = document.querySelector('.dot4');
var dot5 = document.querySelector('.dot5');
var imageHolder = document.querySelector('.carousel-image');
var images = [
  'images/614hBOHd3bL.jpg',
  'images/91ayp7CNKBL._SL1500_.jpg',
  'images/DQ3at30f.jpg',
  'images/i3ltn78g3tb5e87qbpky_390x400_1x-0.jpg',
  'images/61vvWLXNX9L.jpg'
];
var i = 0;

left.addEventListener('click', moveLeft);
right.addEventListener('click', moveRight);
dot1.addEventListener('click', image1);
dot2.addEventListener('click', image2);
dot3.addEventListener('click', image3);
dot4.addEventListener('click', image4);
dot5.addEventListener('click', image5);

var pictureChange = null;

resetInterval();

function resetInterval() {
  clearInterval(pictureChange);
  pictureChange = setInterval(imageLoopAround, 3000);
}

function imageLoopAround() {
  if (i < images.length) {
    imageHolder.setAttribute('src', images[i]);
    i++;
  } else {
    i = 0;
    imageHolder.setAttribute('src', images[i]);
  }
}

function moveLeft(event) {
  clearInterval(pictureChange);
  if (i > 0) {
    i -= 1;
    imageHolder.setAttribute('src', images[i]);
    pictureChange = setInterval(imageLoopAround, 3000);
  } else if (i <= 0) {
    i = 4;
    imageHolder.setAttribute('src', images[i]);
    pictureChange = setInterval(imageLoopAround, 3000);
  }
}

function moveRight(event) {
  resetInterval();
  if (i < images.length -1) {
    clearInterval(pictureChange);
    i += 1;
    imageHolder.setAttribute('src', images[i]);
    pictureChange = setInterval(imageLoopAround, 3000);
  } else {
    clearInterval(pictureChange);
    i = 0;
    imageHolder.setAttribute('src', images[i]);
    pictureChange = setInterval(imageLoopAround, 3000);
  }
}

function image1(event) {
  imageHolder.setAttribute('src', 'images/614hBOHd3bL.jpg');
  clearInterval(pictureChange);
  i = 0;
  pictureChange = setInterval(imageLoopAround, 3000);
}

function image2(event) {
  imageHolder.setAttribute('src', 'images/91ayp7CNKBL._SL1500_.jpg');
  clearInterval(pictureChange);
  i = 1;
  pictureChange = setInterval(imageLoopAround, 3000);
}

function image3(event) {
  imageHolder.setAttribute('src', 'images/DQ3at30f.jpg');
  clearInterval(pictureChange);
  i = 2;
  pictureChange = setInterval(imageLoopAround, 3000);
}

function image4(event) {
  imageHolder.setAttribute('src', 'images/i3ltn78g3tb5e87qbpky_390x400_1x-0.jpg');
  clearInterval(pictureChange);
  i = 3;
  pictureChange = setInterval(imageLoopAround, 3000);
}

function image5(event) {
  imageHolder.setAttribute('src', 'images/61vvWLXNX9L.jpg');
  clearInterval(pictureChange);
  i = 4;
  pictureChange = setInterval(imageLoopAround, 3000);
}
