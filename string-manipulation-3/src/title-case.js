/* exported titleCase */
function titleCase(title) {
  var splitTitle = title.split(' ');
  var newTitle = '';
  var newWord = '';
  var length = splitTitle.length;
  for (var i = 0; i < length; i++) {
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
  if (newTitle.includes('-')) {
    for (i = 0; i < newTitle.length; i++) {
      if (newTitle[i] === '-') {
        var dashTitle = newTitle.slice(0, i + 1);
        var dashTitle2 = newTitle.slice(i + 1);
        var dashTitle1cap = dashTitle.slice(0, 1);
        var dashTitle1rest = dashTitle.slice(1)
        var dashTitle2cap = dashTitle2.slice(0, 1);
        var dashTitle2rest = dashTitle2.slice(1);
        dashTitle1cap = dashTitle1cap.toUpperCase();
        dashTitle2cap = dashTitle2cap.toUpperCase();
        newTitle = dashTitle1cap + dashTitle1rest + dashTitle2cap + dashTitle2rest;
      }
    }
  }
  newTitle = newTitle.trim();
  return newTitle
}
