/* exported getWords */
function getWords(string) {
  var words = [];
  var word;
  if (string !== '') {
    word = string.split(' ');
    return word;
  } else {
    return words;
  }
}
