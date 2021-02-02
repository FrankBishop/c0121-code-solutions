/* exported capitalizeWord */

function capitalizeWord(word) {
  var newWord = word.toLowerCase();
  var lowercase = newWord.slice(1);
  var i;
  for (i = 0; i <= newWord.length; i++) {
    if (newWord[i] === newWord[0]) {
      newWord = newWord[i].toUpperCase();
      newWord = newWord + lowercase;
    }
  }
  if (newWord === 'Javascript') {
    var java = newWord.slice(0, 4);
    var script = newWord.slice(4);
    var script2 = script.slice(1);
    script = script[0].toUpperCase();
    script = script + script2;
    newWord = java + script;

  }
  return newWord;
}
