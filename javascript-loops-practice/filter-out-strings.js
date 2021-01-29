/* exported filterOutStrings */
function filterOutStrings(values) {
  var i;
  var numbersOnly = [];
  for (i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      numbersOnly.push(values[i]);
    }
  }
  return numbersOnly;
}
