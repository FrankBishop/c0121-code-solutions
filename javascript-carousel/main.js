var left = document.querySelector('.fa-angle-left');
var right = document.querySelector('.fa-angle-right');
var dot1 = document.querySelector('.dot1');
var dot2 = document.querySelector('.dot2');
var dot3 = document.querySelector('.dot3');
var dot4 = document.querySelector('.dot4');
var dot5 = document.querySelector('.dot5')

left.addEventListener('click', moveLeft);
right.addEventListener('click', moveRight);
dot1.addEventListener('click', image1);
dot2.addEventListener('click', image2);
dot3.addEventListener('click', image3);
dot4.addEventListener('click', image4);
dot5.addEventListener('click', image5)

function moveLeft(event) {
  console.log('the left move')
}

function moveRight(event) {
  console.log('the right move')
}

function image1(event) {
  console.log('image1')
}

function image2(event) {
  console.log('image2')
}

function image3(event) {
  console.log('image3')
}

function image4(event) {
  console.log('image4')
}

function image5(event) {
  console.log('image5')
}
