/* exported getKeys */
function getKeys(object) {
  var keysArray = [];
  var key;
  for (key in object) {
    keysArray.push(key);
  }
  return keysArray;
}
