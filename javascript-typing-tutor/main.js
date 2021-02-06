var span = document.querySelectorAll('span');
// document.addEventListener('keydown', keyTest);
// var spanTest = document.querySelector('span');
// var letters = document.querySelector('.typing-test').textContent;

// Put keydown in forEach for span;

// keydown function within for Loop;

// var lettersArray = letters.split('');
var i;
// var currentLetter;
// for (var i = 0; i < lettersArray.length; i++) {
//   currentLetter = lettersArray[i];
//   console.log(currentLetter);
// }

span.forEach(spanLoop);

function spanLoop(node) {
  for (i = 0; i <= node.length; i++) {
  // console.log(node[i]);
  // letters[i].addEventListener('keydown', keyTest);
  }
  // console.log(node)

}

// function keyTest(event) {
//   var key = event.key;
//   console.log(key);
//   // var lettersArray[i] = lettersArray[0];
//   if (key === lettersArray[i]) {
//       spanTest.className = 'greenkey';
//       lettersArray[i]++
//     } else {

//       spanTest.className = 'redkey';
//     }
//   }

// span.forEach(spanLoop);
// span.forEach(letters);

// function spanLoop(node) {
//   var i;
//   for (i = 0; i <= span.length; i++) {
//   console.log(letters[i]);
//   letters[i].addEventListener('keydown', keyTest);
//   }
//   console.log(node)

// }
// if(key === "a") {
//   console.log('a test worked');
//   spanTest.className = 'greenkey';
// } else if(key === "w") {
//   console.log('this works too')
// }

// what I need to do

// create a for loop over all the spans
// add event listener to them
// make conditionals to tell if correct key was typed
// if corrent key was typed, it is   green
// if not red
// also need line under each letter
// keyboard event key to tell which key was pressed
