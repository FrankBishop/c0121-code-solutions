var $lightbulb = document.querySelector('.lightbulb');
var $background = document.querySelector('.background');
var clicks = 0;
$lightbulb.addEventListener('click', handleClick);

function handleClick(event) {
  clicks++;
  if (clicks % 2 !== 0) {
    $lightbulb.className = 'lightbulb-clicked';
    $background.className = 'background-clicked';
  } else {
    $lightbulb.className = 'lightbulb';
    $background.className = 'background';
  }
}
