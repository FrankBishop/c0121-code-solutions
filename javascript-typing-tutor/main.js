var span = document.querySelectorAll('span');
document.addEventListener('keydown', keyTest);

var spanIndexNumber = 0;

var spanIndex = span[spanIndexNumber].textContent;

var spanChangeIndexNumber = 0;
var spanChange = span[spanChangeIndexNumber];

function keyTest(event) {
  var key = event.key;
  if (key === spanIndex) {
    spanChange.className = 'greenkey';
    spanIndexNumber++;
    spanChangeIndexNumber++;
    spanIndex = span[spanIndexNumber].textContent;
    spanChange = span[spanChangeIndexNumber];
    spanChange.className = 'bottom';
  } else {
    spanChange.className = 'redkey';
  }
}
