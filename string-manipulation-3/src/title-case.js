/* exported titleCase */
function titleCase(title) {
  var splitTitle = title.split(' ');
  var newTitle = '';
  var newWord = '';
  var i;
  var length = splitTitle.length;
  for (i = 0; i < length; i++) {
    newWord = splitTitle[i];
    newWord = newWord.toLowerCase();
    // newWord = newWord.toLowerCase();
    console.log(newWord)

    if (newWord === 'javascript') {
      newWord = 'JavaScript';
      newTitle = newTitle + ' ' + newWord;
    } else if(newWord === "javascript:") {
      newWord = 'JavaScript:';
      newTitle = newTitle + ' ' + newWord;
    }
    else if (newWord.length > 3){
      // newWord = newWord.toLowerCase();
      var upperCase = newWord.slice(0, 1);
      var lowercase = newWord.slice(1);
      upperCase = upperCase.toUpperCase();
      newWord = upperCase + lowercase;
      newTitle = newTitle + ' ' + newWord;
    } else if (newWord.length <= 3) {
      // newWord = newWord.toLowerCase();
      newTitle = newTitle + ' ' + newWord;
    }
  }
  newTitle = newTitle.trim();
  return newTitle
}


// find way to detect what character comes before a word, if empty space or not
//substring method


// function capitalizeWords(string) {
//   var splitString = string.split(' ');
//   var newString = '';
//   var newWord = '';
//   var i;
//   var length = splitString.length;
//   for (i = 0; i < length; i++) {
//     newWord = splitString[i];
//     newWord = newWord.toLowerCase();
//     var upperCase = newWord.slice(0, 1);
//     var lowercase = newWord.slice(1);
//     upperCase = upperCase.toUpperCase();
//     newWord = upperCase + lowercase;
//     newString = newString + ' ' + newWord;
//   }
//   newString = newString.trim();
//   return newString;
// }
