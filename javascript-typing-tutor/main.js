var span = document.querySelectorAll('span');
// var test=document.querySelector('.typing-test')
document.addEventListener('keydown', keyTest);
span.forEach(spanLoop);
var spanTest = document.querySelector('span');

function spanLoop(node) {
  node.addEventListener('keydown', keyTest);
  // console.log(node)

}

function keyTest(event) {
  var key = event.key;
  // console.log(key);
  var i;

  for (i = 0; i <= span.length; i++) {
    // console.log(span.textContent)
    if (key === span[i]) {
      spanTest.className = 'greenkey';
    } else {
      spanTest.className = 'redkey';
    }
  }
  // if(key === "a") {
  //   console.log('a test worked');
  //   spanTest.className = 'greenkey';
  // } else if(key === "w") {
  //   console.log('this works too')
  // }
}

// function keyTest(event) {

// }

// what I need to do

// create a for loop over all the spans
// add event listener to them
// make conditionals to tell if correct key was typed
// if corrent key was typed, it is   green
// if not red
// also need line under each letter
// keyboard event key to tell which key was pressed
