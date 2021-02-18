var left = document.querySelector('.fa-angle-left');
var right = document.querySelector('.fa-angle-right');
var dot1 = document.querySelector('.dot1');
var dot2 = document.querySelector('.dot2');
var dot3 = document.querySelector('.dot3');
var dot4 = document.querySelector('.dot4');
var dot5 = document.querySelector('.dot5');
var imageHolder = document.querySelector('img');
var images = [
  "images/001.png",
  "images/004.png",
  "images/007.png",
  "images/025.png",
  "images/039.png"
];
var i = 0;
var currentImage = imageHolder.getAttribute('src');

left.addEventListener('click', moveLeft);
right.addEventListener('click', moveRight);
dot1.addEventListener('click', image1);
dot2.addEventListener('click', image2);
dot3.addEventListener('click', image3);
dot4.addEventListener('click', image4);
dot5.addEventListener('click', image5)

var pictureChange = setInterval(imageLoopAround, 3000)

function imageLoopAround() {
  if (i < 5) {
    currentImage = imageHolder.getAttribute('src');
    imageHolder.setAttribute('src', images[i]);
    i++
  } else {
    i = 0;
    currentImage = imageHolder.getAttribute('src');
    imageHolder.setAttribute('src', images[i]);
  }
}

function moveLeft(event) {
  console.log('the left move');
  if (i > 0) {
    console.log('before', i);
    i -= 1;
    imageHolder.setAttribute('src', images[i]);
    console.log('after set', i);
    // imageLoopAround()
  } else if (i <= 0) {
    console.log('it is 0');
    i = 4
    imageHolder.setAttribute('src', images[i]);
    // imageLoopAround()
  }
}

function moveRight(event) {
  console.log('the right move');
  if (i <= 3) {
    console.log('before', i);
    i+=1;
    imageHolder.setAttribute('src', images[i]);
    console.log('after set', i);
    // imageLoopAround()
  } else{
    console.log('it is 4');
    i = 0
    imageHolder.setAttribute('src', images[i]);
    // imageLoopAround()
  }
}

function image1(event) {
  imageHolder.setAttribute('src', 'images/001.png');
  clearInterval(pictureChange);
  i = 0;
  setInterval(imageLoopAround, 3000)
}

function image2(event) {
  imageHolder.setAttribute('src', 'images/004.png');
  clearInterval(pictureChange);
  i = 1;
  setInterval(imageLoopAround, 3000)
}

function image3(event) {
  imageHolder.setAttribute('src', 'images/007.png');
  clearInterval(pictureChange);
  i = 2;
  setInterval(imageLoopAround, 3000)
}

function image4(event) {
  imageHolder.setAttribute('src', 'images/025.png');
  clearInterval(pictureChange);
  i = 3;
  setInterval(imageLoopAround, 3000)
}

function image5(event) {
  imageHolder.setAttribute('src', 'images/039.png');
  clearInterval(pictureChange);
  i = 4;
  setInterval(imageLoopAround, 3000)
}
