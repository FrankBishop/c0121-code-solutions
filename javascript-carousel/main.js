var left = document.querySelector('.fa-angle-left');
var right = document.querySelector('.fa-angle-right');
var dot1 = document.querySelector('.dot1');
var dot2 = document.querySelector('.dot2');
var dot3 = document.querySelector('.dot3');
var dot4 = document.querySelector('.dot4');
var dot5 = document.querySelector('.dot5');
var imageHolder = document.querySelector('img')
var images = [
  "images/001.png",
  "images/004.png",
  "images/007.png",
  "images/025.png",
  "images/039.png"
]

left.addEventListener('click', moveLeft);
right.addEventListener('click', moveRight);
dot1.addEventListener('click', image1);
dot2.addEventListener('click', image2);
dot3.addEventListener('click', image3);
dot4.addEventListener('click', image4);
dot5.addEventListener('click', image5)

// var imageCount = setInterval(imageLoop, 3000)
// setInterval(imageLoop, 3000)

function imageLoop() {
  var i = 0;
  setInterval(imageLoopAround, 3000)
  function imageLoopAround() {
    if (i < 5) {
      var currentImage = imageHolder.getAttribute('src');
      imageHolder.setAttribute('src', images[i]);
      i++
    } else {
      i = 0;
      currentImage = imageHolder.getAttribute('src');
      imageHolder.setAttribute('src', images[i]);
    }
  }
}

function moveLeft(event) {
  console.log('the left move');

  imageHolder.setAttribute('src', 'images/001.png');
}

function moveRight(event) {
  console.log('the right move')
}

function image1(event) {
  console.log('image1')
  imageHolder.setAttribute('src', 'images/001.png');
}

function image2(event) {
  console.log('image2')
  imageHolder.setAttribute('src', 'images/004.png');
}

function image3(event) {
  console.log('image3')
  imageHolder.setAttribute('src', 'images/007.png');
}

function image4(event) {
  console.log('image4')
  imageHolder.setAttribute('src', 'images/025.png');
}

function image5(event) {
  console.log('image5')
  imageHolder.setAttribute('src', 'images/039.png');
}



//set interval for when image changes
//change image
//assign image to each button
function languagesTab(event) {
  var result = event.target.matches('.tab');
  var i;
  var j;
  if (result) {
    for (i = 0; i < tabNodeList.length; i++) {
      if (tabNodeList[i] === event.target) {
        tabNodeList[i].className = 'tab active';
        var data = event.target.getAttribute('data-view');
        for (j = 0; j < viewNodeList.length; j++) {
          if (viewNodeList[j].getAttribute('data-view') === data) {
            viewNodeList[j].className = 'view';
          } else {
            viewNodeList[j].className = 'hidden';
          }
        }
      } else {
        tabNodeList[i].className = 'tab';
      }
    }
  }

}
