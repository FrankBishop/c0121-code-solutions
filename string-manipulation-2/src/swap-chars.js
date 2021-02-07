/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var splitString = string.split('');
  var oneSwap = splitString.slice(firstIndex, firstIndex + 1);
  var twoSwap = splitString.slice(secondIndex, secondIndex + 1);
  splitString[firstIndex] = twoSwap;
  splitString[secondIndex] = oneSwap;
  var splitStringString = splitString.join('');
  return splitStringString;
}
