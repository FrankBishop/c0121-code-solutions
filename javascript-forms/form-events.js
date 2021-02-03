function handleFocus(event) {
  console.log('focus event was fired');
  console.log(event.target.name);
}
function handleBlur(event) {
  console.log('blur event was fired');
  console.log(event.target.name);
}
function handleInput(event) {
  console.log(event.target.name);
  console.log('value of name', event.target.value);
}

var $input = document.querySelector('input');
var $input2 = document.querySelector('#user-email');
var $textArea = document.querySelector('textarea');

$input.addEventListener('focus', handleFocus);
$input.addEventListener('blur', handleBlur);
$input.addEventListener('input', handleInput);

$input2.addEventListener('focus', handleFocus);
$input2.addEventListener('blur', handleBlur);
$input2.addEventListener('input', handleInput);

$textArea.addEventListener('focus', handleFocus);
$textArea.addEventListener('blur', handleBlur);
$textArea.addEventListener('input', handleInput);
