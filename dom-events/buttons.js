function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(EventTarget);
}
var button = document.querySelector('.click-button');
button.addEventListener('click', handleClick);

function handleMouseOver(event) {
  console.log('button hovered');
  console.log(event);
  console.log(EventTarget);
}

var hover = document.querySelector('.hover-button');
hover.addEventListener('mouseover', handleMouseOver);

function handleDoubleClick(event) {
  console.log('button double clicked');
  console.log(event);
  console.log(EventTarget);
}

var doubleClick = document.querySelector('.double-click-button');
doubleClick.addEventListener('dblclick', handleDoubleClick);
