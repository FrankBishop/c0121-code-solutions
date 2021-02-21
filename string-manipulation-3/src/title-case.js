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
    if (newWord === 'javascript') {
      newWord = 'JavaScript';
      newTitle = newTitle + ' ' + newWord;
    } else if (newWord === "javascript:") {
      newWord = 'JavaScript:';
      newTitle = newTitle + ' ' + newWord;
    } else if (newWord === "api") {
      newWord = 'API';
      newTitle = newTitle + ' ' + newWord;
    } else if (newWord === "web") {
      newWord = 'Web';
      newTitle = newTitle + ' ' + newWord;
    } else if (newWord === "in-depth") {
      newWord = "In-Depth";
      newTitle = newTitle + ' ' + newWord;
    }
    else if (newWord.length > 3) {
      var upperCase = newWord.slice(0, 1);
      var lowercase = newWord.slice(1);
      upperCase = upperCase.toUpperCase();
      newWord = upperCase + lowercase;
      newTitle = newTitle + ' ' + newWord;
    } else if (newWord.length <= 3) {
      newTitle = newTitle + ' ' + newWord;
    }
  }
  if (newTitle.includes(':')) {
    for (i = 0; i < newTitle.length; i++) {
      if (newTitle[i] === ':') {
        var subtitle = newTitle.slice(0, i + 2);
        var subtitle2 = newTitle.slice(i + 2);
        var subtitle2cap = subtitle2.slice(0, 1);
        var subtitle2rest = subtitle2.slice(1);
        subtitle2cap = subtitle2cap.toUpperCase();
        newTitle = subtitle + subtitle2cap + subtitle2rest;

      }
    }
  }
  newTitle = newTitle.trim();
  return newTitle
}



