var left = document.querySelector('.fa-angle-left');
var right = document.querySelector('.fa-angle-right');
var dots = document.querySelectorAll('.dot');
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
var pictureChange = null;

resetInterval();
addDots();

function resetInterval() {
  clearInterval(pictureChange);
  pictureChange = setInterval(imageLoopAround, 3000);
}

function addDots() {
  for (var i = 0; i < dots.length; i++) {
    dots[i].addEventListener('click', changeImage);
  }
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
  if (i < images.length - 1) {
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

function changeImage(event) {
  resetInterval();
  var imageToChange = event.target.getAttribute('image');
  for (var j = 0; j < dots.length; j++) {
    if (dots[j].getAttribute('image') === imageToChange) {
      clearInterval(pictureChange);
      imageHolder.setAttribute('src', images[j]);
      i = j;
    }
  }
  pictureChange = setInterval(imageLoopAround, 3000);
}
