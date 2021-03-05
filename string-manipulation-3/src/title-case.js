/* exported titleCase */
function titleCase(title) {
  var splitTitle = title.split(' ');
  var newTitle = '';
  var newWord = '';
  var length = splitTitle.length;
  var previousWord = '';
  for (var i = 0; i < length; i++) {
    newWord = splitTitle[i];
    newWord = newWord.toLowerCase();
    if (newWord === 'javascript') {
      newWord = 'JavaScript'
      newTitle = newTitle + ' ' + newWord;
    } else if (newWord === "javascript:") {
      newWord = 'JavaScript:';
      newTitle = newTitle + ' ' + newWord;
    } else if (newWord === "api") {
      newWord = 'API';
      newTitle = newTitle + ' ' + newWord;
    } else if (newWord.includes('-')) {
      for (var j = 0; j < newWord.length; j++) {
        if (newWord[j] === '-') {
          var dashWord = newWord.slice(0, j + 1);
          var dashWord2 = newWord.slice(j + 1);
          var dashWord1cap = dashWord.slice(0, 1);
          var dashWord1rest = dashWord.slice(1)
          var dashWord2cap = dashWord2.slice(0, 1);
          var dashWord2rest = dashWord2.slice(1);
          dashWord1cap = dashWord1cap.toUpperCase();
          dashWord2cap = dashWord2cap.toUpperCase();
          newWord = dashWord1cap + dashWord1rest + dashWord2cap + dashWord2rest
          newTitle = newTitle + ' ' + newWord;
        }
      }
    } else if (previousWord.includes(':')) {
      var upperCase = newWord.slice(0, 1);
      var lowercase = newWord.slice(1);
      upperCase = upperCase.toUpperCase();
      newWord = upperCase + lowercase;
      newTitle = newTitle + ' ' + newWord;

    } else if (newWord === 'and' || newWord === 'or' || newWord === 'nor' || newWord === 'but' || newWord === 'a' || newWord === 'the' || newWord === 'an' || newWord === 'as' || newWord === 'by' || newWord === 'for' || newWord === 'in' || newWord === 'of' || newWord === 'on' || newWord === 'per' || newWord === 'to') {
      newTitle = newTitle + ' ' + newWord;
    }
    else {
      var upperCase = newWord.slice(0, 1);
      var lowercase = newWord.slice(1);
      upperCase = upperCase.toUpperCase();
      newWord = upperCase + lowercase;
      newTitle = newTitle + ' ' + newWord;
    }
    previousWord = newWord
  }
  newTitle = newTitle.trim();
  return newTitle
}
