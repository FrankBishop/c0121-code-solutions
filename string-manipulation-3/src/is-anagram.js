/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var first = firstString.split(" ");
  first = first.join('');
  var second = secondString.split(" ");
  second = second.join('');
  firstArray = first.split('');
  secondArray = second.split('');
  var i;
  for (i = 0; i < secondArray.length; i++) {
    if (firstArray.indexOf(secondArray[i]) < 0) {
      return false
    } else {
      firstArray.splice(firstArray.indexOf(secondArray[i]), 1)
    }
  }
  return true
}
