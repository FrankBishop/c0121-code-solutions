/* exported ransomCase */
// function ransomCase(string) {
//   var newWord;
//   var newWord2;
//   var newWord3;
//   var i;

//   for (i = 0; i <= string.length; i++) {
//     newWord = string.slice(0, 1);
//     // newWord2 = string[1].toUpperCase();
//     newWord2 = string.slice(1, 2);
//     newWord2 = newWord2.toUpperCase();
//     newWord3 = newWord + newWord2;
//   }
//   return newWord3;
// }

// if index % 2

function ransomCase(string) {
  var newWord;
  var newWord2;
  var newWord3;
  var i;

  for (i = 0; i <= string.length; i++) {
    newWord = string.slice(0, 1);
    // newWord2 = string[1].toUpperCase();
    newWord2 = string.slice(1, 2);
    newWord2 = newWord2.toUpperCase();
    newWord3 = newWord + newWord2;
  }
  return newWord3;
}

// use remainder like in light bulb challenge
